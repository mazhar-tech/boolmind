import React from 'react'

const Icon3 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="92" height="92" rx="46" fill="#05061A" fillOpacity="0.4" />
      <rect x="0.5" y="0.5" width="91" height="91" rx="45.5" stroke="url(#paint0_linear_4627_15243)" strokeOpacity="0.2" />
      <g filter="url(#filter0_d_4627_15243)">
        <rect x="12" y="12" width="68" height="68" rx="34" fill="url(#paint1_linear_4627_15243)" shapeRendering="crispEdges" />
        <path d="M33.75 49.5H41.3333V42.5H33.75V49.5Z" fill="#A4A2C4" />
        <path d="M33.75 51.832H41.3333V58.249H38.4167C35.8393 58.249 33.75 56.1597 33.75 53.5824V51.832Z" fill="#A4A2C4" />
        <path d="M43.6689 58.249H53.5856C56.1629 58.249 58.2523 56.1597 58.2523 53.5824V51.832H43.6689V58.249Z" fill="#A4A2C4" />
        <path d="M58.2523 49.5V42.5H43.6689V49.5H58.2523Z" fill="#A4A2C4" />
        <path d="M58.2523 40.1663V38.4167C58.2523 35.8393 56.1629 33.75 53.5856 33.75H43.6689V40.1663H58.2523Z" fill="#A4A2C4" />
        <path d="M41.3333 33.75H38.4167C35.8393 33.75 33.75 35.8393 33.75 38.4167V40.1663H41.3333V33.75Z" fill="#A4A2C4" />
      </g>
      <defs>
        <filter id="filter0_d_4627_15243" x="0.203377" y="0.203377" width="91.5932" height="91.5932" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="5.89831" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0313726 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4627_15243" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4627_15243" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_4627_15243" x1="0" y1="0" x2="46" y2="92" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF5B35" />
          <stop offset="1" stopColor="#490E00" />
        </linearGradient>
        <linearGradient id="paint1_linear_4627_15243" x1="12" y1="12" x2="46" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#161734" />
          <stop offset="1" stopColor="#080925" />
        </linearGradient>
      </defs>
    </svg>


  )
}

export default Icon3