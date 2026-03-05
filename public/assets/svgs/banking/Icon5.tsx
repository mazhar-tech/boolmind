import React from 'react'

const Icon5 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" rx="5.66572" fill="#05061A" fillOpacity="0.4" />
      <rect x="0.354108" y="0.354108" width="79.2918" height="79.2918" rx="5.31161" stroke="url(#paint0_linear_55_4225)" strokeOpacity="0.2" strokeWidth="0.708215" />
      <g filter="url(#filter0_d_55_4225)">
        <rect x="12" y="12" width="56" height="56" rx="2.83286" fill="url(#paint1_linear_55_4225)" shapeRendering="crispEdges" />
        <path fillRule="evenodd" clipRule="evenodd" d="M28.625 30.9765C28.625 29.849 29.5391 28.9349 30.6667 28.9349H49.3333C50.4609 28.9349 51.375 29.849 51.375 30.9765V33.9301C51.375 34.536 51.1058 35.1106 50.6403 35.4986L44.404 40.6955C44.3486 40.7416 44.3123 40.8066 44.3021 40.8779L43.2737 48.0018C43.1781 48.6635 42.7646 49.2366 42.1668 49.5358L39.5551 50.8431C38.2846 51.479 36.7691 50.655 36.6122 49.2428L35.6822 40.8732C35.6739 40.7984 35.6369 40.7296 35.5791 40.6814L29.3596 35.4986C28.8941 35.1106 28.625 34.536 28.625 33.9301V30.9765Z" fill="#A4A2C4" />
      </g>
      <defs>
        <filter id="filter0_d_55_4225" x="0.203377" y="0.203377" width="79.5932" height="79.5932" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="5.89831" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0313726 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_55_4225" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_55_4225" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_55_4225" x1="0" y1="0" x2="40" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF5B35" />
          <stop offset="1" stopColor="#490E00" />
        </linearGradient>
        <linearGradient id="paint1_linear_55_4225" x1="12" y1="12" x2="40" y2="68" gradientUnits="userSpaceOnUse">
          <stop stopColor="#161734" />
          <stop offset="1" stopColor="#080925" />
        </linearGradient>
      </defs>
    </svg>

  )
}

export default Icon5