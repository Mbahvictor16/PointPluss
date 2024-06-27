

import React, { useEffect } from "react";
import { useRouter } from 'next/navigation';
import "./Splash7.css";

const Splash7 = () => {
  const router = useRouter();

  useEffect(() => {
    if (router) {
      const timeout = setTimeout(() => {
        router.push("/");
      }, 3000); // 1000ms = 1s (matching the animation duration)

      // Clear the timeout on component unmount
      return () => clearTimeout(timeout);
    }
  }, [router]);

  return (
    <div className="splash7 w-full h-screen flex flex-col justify-center items-center">
      <div className="splash-container">
        <div className="text-amber-500 text-[86.26px] font-bold font-['Roboto Condensed'] splash7-asap">
          Point+
        </div>
        <div className="text-black text-xl font-bold font-['Roboto Condensed'] splash7-text">
          Delivering Flavor, One Bite at a Time.
        </div>
      </div>
    </div>
  );
};

export default Splash7;
