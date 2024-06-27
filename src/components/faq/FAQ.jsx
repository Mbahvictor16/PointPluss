"use client";

import React, { useState } from "react";
import AboutUSHeader from "../about-us/nav-link/AboutUSHeader";
import IntroText from "./SubComponents/IntroText";
import Content from "./SubComponents/Content";
import GetInTouch from "./SubComponents/GetInTouch";
import Dashboard from "../about-us/dashboard/Dashboard";

const FAQ = () => {
  const [isDashboardModalOpen, setIsDashboardModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsDashboardModalOpen(true); // Always open the Dashboard
  };

  const handleToggleModalClose = () => {
    setIsDashboardModalOpen(false); // Close the Dashboard
  };

  return (
    <div className="">
      <AboutUSHeader handleToggleModal={handleToggleModal} />
      <div className="flex flex-col py-[50px] px-[20px] sm:px-[70px] gap-9">
        <IntroText />
        <Content />
        <GetInTouch />
      </div>
      <Dashboard
        isOpen={isDashboardModalOpen}
        onClose={handleToggleModalClose}
      />
    </div>
  );
};

export default FAQ;
