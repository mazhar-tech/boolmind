import * as React from 'react';

export const MicIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
      fill="#A4A2C4"
    />
    <path
      d="M19 10v2a7 7 0 0 1-14 0v-2"
      stroke="#A4A2C4"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="12"
      y1="19"
      x2="12"
      y2="23"
      stroke="#A4A2C4"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="8"
      y1="23"
      x2="16"
      y2="23"
      stroke="#A4A2C4"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18 6L6 18"
      stroke="#A4A2C4"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6L18 18"
      stroke="#A4A2C4"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
