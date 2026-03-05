import React from 'react'

const Icon1 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" rx="8" fill="#05061A" fillOpacity="0.4" />
      <rect x="0.5" y="0.5" width="79" height="79" rx="7.5" stroke="url(#paint0_linear_44_2164)" strokeOpacity="0.2" />
      <g filter="url(#filter0_d_44_2164)">
        <rect x="12" y="12" width="56" height="56" rx="4" fill="url(#paint1_linear_44_2164)" shapeRendering="crispEdges" />
        <path d="M27.75 43.5H35.3333V36.5H27.75V43.5Z" fill="#A4A2C4" />
        <path d="M27.75 45.8328H35.3333V52.2498H32.4167C29.8393 52.2498 27.75 50.1604 27.75 47.5831V45.8328Z" fill="#A4A2C4" />
        <path d="M37.6689 52.2498H47.5856C50.1629 52.2498 52.2523 50.1604 52.2523 47.5831V45.8328H37.6689V52.2498Z" fill="#A4A2C4" />
        <path d="M52.2523 43.5V36.5H37.6689V43.5H52.2523Z" fill="#A4A2C4" />
        <path d="M52.2523 34.1663V32.4167C52.2523 29.8393 50.1629 27.75 47.5856 27.75H37.6689V34.1663H52.2523Z" fill="#A4A2C4" />
        <path d="M35.3333 27.75H32.4167C29.8393 27.75 27.75 29.8393 27.75 32.4167V34.1663H35.3333V27.75Z" fill="#A4A2C4" />
      </g>
      <defs>
        <filter id="filter0_d_44_2164" x="0.203377" y="0.203377" width="79.5932" height="79.5932" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="5.89831" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0313726 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_44_2164" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_44_2164" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_44_2164" x1="0" y1="0" x2="40" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF5B35" />
          <stop offset="1" stopColor="#490E00" />
        </linearGradient>
        <linearGradient id="paint1_linear_44_2164" x1="12" y1="12" x2="40" y2="68" gradientUnits="userSpaceOnUse">
          <stop stopColor="#161734" />
          <stop offset="1" stopColor="#080925" />
        </linearGradient>
      </defs>
    </svg>

  )
}

export default Icon1