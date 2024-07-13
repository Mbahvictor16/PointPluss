import Headers from "@/src/helper/Headers";
import React from "react";

export default function PolicyTemplate({ children }) {
  return (
    <>
      <Headers />
      {children}
    </>
  );
}
