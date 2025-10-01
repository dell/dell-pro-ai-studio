"use client";
import React from "react";

export const Input = ({
  id,
  name,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  helperText,
  disabled = false,
  className = "",
}) => {
  const baseInputClasses =
    "x:rounded-lg x:px-3 x:py-4 x:my-4 x:transition-all x:w-full x:md:w-64 x:text-base x:leading-tight x:md:text-sm x:bg-black/[.05] x:dark:bg-gray-50/10 x:placeholder:text-gray-600 x:dark:placeholder:text-gray-400 x:contrast-more:border x:contrast-more:border-current x:[&::-webkit-search-cancel-button]:appearance-none x:transition-colors x:focus-visible:nextra-focus";

  const stateClasses = disabled
    ? "x:opacity-60 x:cursor-not-allowed x:bg-gray-100 x:dark:bg-neutral-800"
    : error
    ? "x:border-red-500 x:dark:border-red-600"
    : "x:border-gray-300 x:hover:border-gray-400 x:dark:border-neutral-700 x:dark:hover:border-neutral-500";
  
  const combinedInputClasses = `${baseInputClasses} ${stateClasses}`;

  return (
    <div className={`x:w-full ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className=" x:text-sm x:font-medium x:mb-1.5 x:text-gray-800 x:dark:text-gray-200"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={combinedInputClasses}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : (helperText ? `${id}-helper` : undefined)}
      />

      {(error || helperText) && (
        <p 
          id={error ? `${id}-error` : `${id}-helper`}
          className={`x:mt-1.5 x:text-sm ${error ? 'x:text-red-500' : 'x:text-gray-600 x:dark:text-gray-400'}`}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
};
