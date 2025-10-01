import React from "react";

export const ModelIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
      className={className}
    >
      <path d="M425.706 142.294A240 240 0 0 0 16 312v88h144v-32H48v-56c0-114.691 93.309-208 208-208s208 93.309 208 208v56H352v32h144v-88a238.432 238.432 0 0 0-70.294-169.706"></path>
      <path d="M80 264h32v32H80zm160-136h32v32h-32zm-104 40h32v32h-32zm264 96h32v32h-32zm-102.778 71.1l69.2-144.173l-28.85-13.848l-69.183 144.135a64.141 64.141 0 1 0 28.833 13.886M256 416a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32"></path>
    </svg>
  );
};

export const LicenseIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      fill="currentColor"
      focusable="false"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 12 12"
      className={className}
    >
      <path d="M2.89453 5.63646V7.2927C2.89453 7.63638 3.17195 7.9138 3.51562 7.9138C3.85929 7.9138 4.13672 7.63638 4.13672 7.2927V5.63646C4.13672 5.29279 3.85929 5.01535 3.51562 5.01535C3.17195 5.01535 2.89453 5.29279 2.89453 5.63646ZM5.37891 5.63646V7.2927C5.37891 7.63638 5.65633 7.9138 6.00001 7.9138C6.34368 7.9138 6.6211 7.63638 6.6211 7.2927V5.63646C6.6211 5.29279 6.34368 5.01535 6.00001 5.01535C5.65633 5.01535 5.37891 5.29279 5.37891 5.63646ZM2.6875 9.98411H9.31251C9.65618 9.98411 9.9336 9.70669 9.9336 9.36302C9.9336 9.01935 9.65618 8.74192 9.31251 8.74192H2.6875C2.34383 8.74192 2.06641 9.01935 2.06641 9.36302C2.06641 9.70669 2.34383 9.98411 2.6875 9.98411ZM7.86329 5.63646V7.2927C7.86329 7.63638 8.14071 7.9138 8.48438 7.9138C8.82805 7.9138 9.10547 7.63638 9.10547 7.2927V5.63646C9.10547 5.29279 8.82805 5.01535 8.48438 5.01535C8.14071 5.01535 7.86329 5.29279 7.86329 5.63646ZM5.61493 1.49169L2.34383 3.21419C2.17406 3.30114 2.06641 3.47919 2.06641 3.66966C2.06641 3.95536 2.29828 4.18724 2.58398 4.18724H9.42016C9.70172 4.18724 9.9336 3.95536 9.9336 3.66966C9.9336 3.47919 9.82594 3.30114 9.65618 3.21419L6.38508 1.49169C6.14493 1.36333 5.85508 1.36333 5.61493 1.49169Z"></path>
    </svg>
  );
};

export const PlatformIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
    >
      <path d="M11,11V21H21V11Zm8,8H13V13h6Z"></path>
      <path d="M30,13V11H26V8a2,2,0,0,0-2-2H21V2H19V6H13V2H11V6H8A2,2,0,0,0,6,8v3H2v2H6v6H2v2H6v3a2,2,0,0,0,2,2h3v4h2V26h6v4h2V26h3a2,2,0,0,0,2-2V21h4V19H26V13ZM24,24H8V8H24Z"></path>
    </svg>
  );
};

export const CopyIcon = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 1.5H3.5C2.39543 1.5 1.5 2.39543 1.5 3.5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.5 4.5H12.5C13.6046 4.5 14.5 5.39543 14.5 6.5V12.5C14.5 13.6046 13.6046 14.5 12.5 14.5H4.5C3.39543 14.5 2.5 13.6046 2.5 12.5V6.5C2.5 5.39543 3.39543 4.5 4.5 4.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CheckIcon = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 4.5L6.5 11.5L2.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
