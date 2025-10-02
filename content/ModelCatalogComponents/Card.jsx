"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Chip } from "./Chip";
import { ModelIcon, LicenseIcon, PlatformIcon, CopyIcon, CheckIcon } from './Icons';

const iconMap = {
  model: ModelIcon,
  license: LicenseIcon,
  platform: PlatformIcon,
};

export const Card = ({ title, text, buttons, details, platform = null, type, hardware, hardwareVendor }) => {
  const actionButtons = buttons.filter(btn => !btn.label.trim().startsWith('>'));
  const snippet = buttons.find(btn => btn.label.trim().startsWith('>'));
  
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async (command) => {
    if (!command) return;
    const commandToCopy = command.slice(1).trim();
    
    try {
      await navigator.clipboard.writeText(commandToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="x:w-full x:rounded-xl x:border x:border-gray-200 x:bg-white x:dark:bg-neutral-900 x:shadow-sm x:hover:shadow-lg x:transition x:p-4 x:flex x:flex-col x:gap-4">
      
      <h2 className="x:text-xl x:font-semibold x:text-gray-900 x:dark:text-gray-100">
        {title}
        {platform && <Chip text={platform.toLowerCase()} onClick={()=>{}}></Chip>}
        {type && <Chip variant={"primary"} text={type} onClick={()=>{}}></Chip>}
        {hardware && <Chip variant={"success"} text={`${hardware} ${hardware != "CPU" ? `- ${hardwareVendor}` : ""}`} onClick={()=>{}}></Chip>}
      </h2>

      {text && <p className="x:text-gray-600 x:dark:text-gray-400 x:text-sm">{text}</p>}
      
      {details && details.length > 0 && (
         <ul className="x:grid x:grid-flow-col x:auto-cols-max x:items-center x:gap-x-12 x:mt-2">
           {details.map((item, i) => {
             const IconComponent = iconMap[item.icon];

             if (item.tooltip) {
               return (
                 <li key={i} className="x:relative x:group x:flex x:items-center x:gap-2 x:text-sm">
                   {IconComponent && <IconComponent className="x:shrink-0" />}
                   <span className="x:whitespace-nowrap">{item.text}</span>
                   <div
                     className="x:absolute x:bottom-full x:left-1/2 x:transform x:-translate-x-1/2 x:mb-2 w-max x:max-w-xs x:px-3 x:py-2 x:rounded-lg x:bg-gray-800 x:text-white x:text-sm x:opacity-0 x:group-hover:opacity-100 x:transition-opacity x:pointer-events-none x:dark:bg-neutral-700 x:whitespace-pre-line x:text-left"
                     role="tooltip"
                   >
                     {item.tooltip}
                     <div className="x:absolute x:top-full x:left-1/2 x:transform x:-translate-x-1/2 x:w-0 x:h-0 x:border-x-4 x:border-x-transparent x:border-t-4 x:border-t-gray-800 x:dark:border-t-neutral-700"></div>
                   </div>
                 </li>
               );
             }

             return (
               <li key={i} className="x:flex x:items-center x:gap-2 x:text-sm">
                 {IconComponent && <IconComponent className="x:shrink-0" />}
                 <span className="x:whitespace-nowrap">{item.text}</span>
               </li>
             );
           })}
         </ul>
       )}
      
      <div className="x:flex x:flex-row x:flex-nowrap x:items-center x:justify-between x:gap-4 x:mt-auto x:pt-4">
        <div className="x:flex x:items-center x:gap-4">
          {actionButtons.map((button, i) => (
            <Link 
              key={i} 
              href={button.href || '#'} 
              className="x:text-sm x:font-medium x:text-gray-700 x:dark:text-gray-300 hover:x:underline"
              title={button.tooltip}
            >
              {button.label}
            </Link>
          ))}
        </div>
        
        {snippet && (
          <div className="x:grow x:min-w-0 x:px-4 x:py-2 x:rounded-lg x:bg-gray-100 x:dark:bg-neutral-800 x:text-gray-800 x:dark:text-gray-200 x:text-sm x:font-mono x:overflow-x-auto">
            <div className="x:flex x:items-center x:justify-between x:gap-4">
              <span>{snippet.label}</span>
              <button
                onClick={() => handleCopy(snippet.label)}
                title={isCopied ? "Copied!" : "Copy code"}
                className="x:shrink-0 x:p-1 x:rounded-md x:hover:bg-gray-200 x:dark:hover:bg-neutral-700 x:transition-colors"
              >
                {isCopied ? (
                  <CheckIcon className="x:w-4 x:h-4 x:text-green-500" />
                ) : (
                  <CopyIcon className="x:w-4 x:h-4 x:text-gray-500 x:dark:text-gray-400" />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
