"use client";

import React, { useEffect, useState } from "react";
import "./globals.css";
import Footer from "../helper/Footer";
import Splash7 from "../helper/Splash7";
import Sidebar from "../helper/Sidebar";
import { FavoriteProductsProvider } from "../context/FavoriteProductsContext";
import HomePage from "../components/home/HomePage";
import Order from "../components/order/Order";

export default function Home({children}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);

  if (loading) {
    return <Splash7 />;
  }

  return (
    <FavoriteProductsProvider>
      <div className="app-container">
        <div className="flex">
          <Sidebar />
          <div className="Routes overflow-y-scroll ml-0 max-h-[calc(100vh)] w-[100%]">
            <HomePage/>
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </FavoriteProductsProvider>
  );
}
