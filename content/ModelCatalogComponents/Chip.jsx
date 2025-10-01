"use client";
import React from "react";

export const Chip = ({ text, onClick, variant = "default" }) => {
  const baseClasses = "x:inline-block x:mx-2 x:px-3 x:py-1 x:rounded-full x:text-sm x:font-medium x:cursor-pointer x:transition-colors";

  const variants = {
    default: "x:bg-gray-200 x:text-gray-800 x:hover:bg-gray-300 x:dark:bg-neutral-800 x:dark:text-gray-300 x:dark:hover:bg-neutral-600",
    primary: "x:bg-blue-100 x:text-blue-800 x:hover:bg-blue-200 x:dark:bg-blue-900/30 x:dark:text-blue-400 x:dark:hover:bg-blue-900/50",
    success: "x:bg-green-100 x:text-green-800 x:hover:bg-green-200 x:dark:bg-green-900/30 x:dark:text-green-500 x:dark:hover:bg-green-900/50",
  };

  return (
    <span className={`${baseClasses} ${variants[variant]}`} onClick={onClick}>
      {text}
    </span>
  );
};
