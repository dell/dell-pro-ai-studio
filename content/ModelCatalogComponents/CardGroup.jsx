"use client";
import React from "react";

export const CardGroup = ({ children }) => {
  return (
    <div className="x:w-full x:flex x:flex-wrap x:justify-center x:gap-4 x:p-4">
      {children}
    </div>
  );
};
