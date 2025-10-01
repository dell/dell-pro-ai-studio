"use client";
import React from "react";
import Link from "next/link";

/**
 * @param {object[]} buttons
 * @param {string} buttons[].label
 * @param {function} [buttons[].onClick]
 * @param {string} [buttons[].href]
 * @param {boolean} [buttons[].isActive=false]
 * @param {boolean} [buttons[].disabled=false]
 * @param {string} [className]
 */
export const ButtonGroup = ({ buttons, className = "" }) => {
  return (
    <div
      className={`x:inline-flex x:rounded-lg x:shadow-sm x:border x:dark:border-neutral-700 ${className} x:mt-2`}
      role="group"
    >
      {buttons.map((button, index) => {
        const isFirst = index === 0;
        const isLast = index === buttons.length - 1;

        let buttonClasses =
          "x:relative x:px-4 x:py-2 x:text-sm x:font-medium x:transition-colors x:focus:z-10 x:focus-visible:nextra-focus";

        if (isFirst && !isLast) {
          buttonClasses += " x:rounded-l-lg";
        } else if (isLast && !isFirst) {
          buttonClasses += " x:rounded-r-lg";
        } else if (isFirst && isLast) {
          buttonClasses += " x:rounded-lg";
        }

        let buttonStyle = {
  
        }

        if (isFirst) {
          buttonStyle.borderTopLeftRadius = '0.5rem';
          buttonStyle.borderBottomLeftRadius = '0.5rem';
        }
        if (isLast) {
          buttonStyle.borderTopRightRadius = '0.5rem';
          buttonStyle.borderBottomRightRadius = '0.5rem';
        }

        if (!isLast) {
          buttonStyle.borderRight = '1px solid #797979ff';
        }

        if (!isFirst) {
          buttonClasses += " x:-ml-px x:border-l x:border-gray-200 x:dark:border-neutral-700";
        }

         if (!isLast) {
          buttonClasses += " x:border-r x:border-gray-200 x:dark:border-neutral-700";
        }

        if (button.isActive) {
          buttonClasses += " active x:bg-gray-100 x:text-white x:dark:bg-black";
        } else {
          buttonClasses +=
            " x:bg-white x:text-gray-700 x:hover:bg-gray-100 x:dark:bg-neutral-800 x:dark:text-gray-300 x:dark:hover:bg-neutral-700";
        }

        if (button.disabled) {
          buttonClasses += " x:opacity-50 x:cursor-not-allowed";
        }

        const Component = button.href ? Link : 'button';

        return (
          <Component
            key={index}
            href={button.href || undefined}
            onClick={button.onClick}
            disabled={button.disabled}
            className={buttonClasses}
            style={buttonStyle}
          >
            {button.label}
          </Component>
        );
      })}
    </div>
  );
};
