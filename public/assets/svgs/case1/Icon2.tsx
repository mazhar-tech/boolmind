import React from 'react'

const Icon2 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" rx="8" fill="#05061A" fillOpacity="0.4" />
      <rect x="0.5" y="0.5" width="79" height="79" rx="7.5" stroke="url(#paint0_linear_4521_6977)" strokeOpacity="0.2" />
      <g filter="url(#filter0_d_4521_6977)">
        <rect x="12" y="12" width="56" height="56" rx="4" fill="url(#paint1_linear_4521_6977)" shapeRendering="crispEdges" />
        <path d="M36.5 27.75V35.3333H43.5V27.75H36.5Z" fill="#A4A2C4" />
        <path d="M34.167 27.75V35.3333H27.75V32.4167C27.75 29.8393 29.8393 27.75 32.4167 27.75H34.167Z" fill="#A4A2C4" />
        <path d="M27.75 37.666V47.5827C27.75 50.16 29.8393 52.2494 32.4167 52.2494H34.167V37.666H27.75Z" fill="#A4A2C4" />
        <path d="M36.5 52.2494H43.5V37.666H36.5V52.2494Z" fill="#A4A2C4" />
        <path d="M45.8345 52.2494H47.5841C50.1614 52.2494 52.2508 50.16 52.2508 47.5827V37.666H45.8345V52.2494Z" fill="#A4A2C4" />
        <path d="M52.2508 35.3333V32.4167C52.2508 29.8393 50.1614 27.75 47.5841 27.75H45.8345V35.3333H52.2508Z" fill="#A4A2C4" />
      </g>
      <defs>
        <filter id="filter0_d_4521_6977" x="0.203377" y="0.203377" width="79.5932" height="79.5932" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="5.89831" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0313726 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4521_6977" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4521_6977" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_4521_6977" x1="0" y1="0" x2="40" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF5B35" />
          <stop offset="1" stopColor="#490E00" />
        </linearGradient>
        <linearGradient id="paint1_linear_4521_6977" x1="12" y1="12" x2="40" y2="68" gradientUnits="userSpaceOnUse">
          <stop stopColor="#161734" />
          <stop offset="1" stopColor="#080925" />
        </linearGradient>
      </defs>
    </svg>

  )
}

export default Icon2