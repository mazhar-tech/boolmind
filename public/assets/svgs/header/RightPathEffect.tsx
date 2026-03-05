const RightPathEffect = () => {
  return (
    <svg width="721" height="407" viewBox="0 0 721 407" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="bgblur_0_4366_51655_clip_path" transform="translate(-35 -160.5)"><path d="M59 184.5H94V217.5H69L59 184.5Z" />
        </clipPath>
        {/* Beam gradient: left=solid, right=transparent — moves with the rect (left to right) */}
        <linearGradient id="rightBeamGrad" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint0_linear_4366_51655" x1="89" y1="100.5" x2="720" y2="100.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF5B35" stopOpacity="0.5" />
          <stop offset="1" stopColor="#FF5B35" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint1_linear_4366_51655" x1="89" y1="303.5" x2="720" y2="303.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7C00B1" stopOpacity="0.6" />
          <stop offset="1" stopColor="#7C00B1" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint2_linear_4366_51655" x1="89" y1="135.5" x2="720" y2="135.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC635" stopOpacity="0.4" />
          <stop offset="1" stopColor="#FF5B35" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint3_linear_4366_51655" x1="89" y1="268.5" x2="720" y2="268.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2402E9" stopOpacity="0.5" />
          <stop offset="1" stopColor="#2402E9" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint4_linear_4366_51655" x1="89" y1="233.5" x2="720" y2="233.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00819D" stopOpacity="0.5" />
          <stop offset="1" stopColor="#00819D" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint5_linear_4366_51655" x1="720" y1="200.154" x2="89" y2="200.154" gradientUnits="userSpaceOnUse">
          <stop stopColor="#007C27" stopOpacity="0" />
          <stop offset="1" stopColor="#007C27" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="paint6_linear_4366_51655" x1="389" y1="205.5" x2="331" y2="205.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF5B35" />
          <stop offset="1" stopColor="#FF5B35" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint7_linear_4366_51655" x1="634" y1="197.5" x2="576" y2="197.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF5B35" />
          <stop offset="1" stopColor="#FF5B35" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint8_linear_4366_51655" x1="418" y1="203.5" x2="360" y2="203.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7C00B1" />
          <stop offset="1" stopColor="#7C00B1" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint9_linear_4366_51655" x1="523" y1="200.5" x2="465" y2="200.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC635" />
          <stop offset="1" stopColor="#FFC635" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint10_linear_4366_51655" x1="249" y1="203.5" x2="191" y2="203.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2402E9" />
          <stop offset="1" stopColor="#2402E9" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint11_linear_4366_51655" x1="634" y1="203.5" x2="576" y2="203.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00819D" />
          <stop offset="1" stopColor="#00819D" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint12_linear_4366_51655" x1="320" y1="203.5" x2="262" y2="203.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00819D" />
          <stop offset="1" stopColor="#00819D" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint13_linear_4366_51655" x1="706" y1="203.5" x2="648" y2="203.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#007C27" />
          <stop offset="1" stopColor="#007C27" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint14_linear_4366_51655" x1="422" y1="203.5" x2="364" y2="203.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#007C27" />
          <stop offset="1" stopColor="#007C27" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Base gradient paths */}
      <path d="M720 0.5C403.499 0.5 328.256 162.582 79 200.5" stroke="url(#paint0_linear_4366_51655)" />
      <path d="M720 406.5C409.084 406.5 316.692 241.79 79 200.5" stroke="url(#paint1_linear_4366_51655)" />
      <path d="M720 70.5C404.348 70.5 326.463 175.308 79 200.5" stroke="url(#paint2_linear_4366_51655)" />
      <path d="M720 336.5C408.214 336.5 318.457 227.221 79 200.5" stroke="url(#paint3_linear_4366_51655)" />
      <path d="M720 256.5C406.916 256.5 321.114 212.92 79 200.5" stroke="url(#paint4_linear_4366_51655)" />
      <path d="M720 171.675C540.125 159.909 491.844 187.549 363.249 193.306C267.277 197.603 175.675 201.402 79 200.5" stroke="url(#paint5_linear_4366_51655)" />

      {/* Animated beams: left to right, same 5s cycle with staggered keyTimes */}
      <mask id="mask0_4366_51655" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="721" height="407">
        <rect y="0" width="80" height="407" fill="url(#rightBeamGrad)">
          <animate begin="0.3s" attributeName="x" values="70;800;800" keyTimes="0;0.231;1" dur="5s" repeatCount="indefinite" calcMode="linear" />
        </rect>
      </mask>
      <g mask="url(#mask0_4366_51655)">
        <path d="M720 0.5C403.499 0.5 328.256 162.582 79 200.5" stroke="#FF5B35" strokeWidth="2" />
      </g>
      <mask id="mask1_4366_51655" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="721" height="407">
        <rect y="0" width="80" height="407" fill="url(#rightBeamGrad)">
          <animate begin="0.3s" attributeName="x" values="70;800;800" keyTimes="0;0.179;1" dur="5s" repeatCount="indefinite" calcMode="linear" />
        </rect>
      </mask>
      <g mask="url(#mask1_4366_51655)">
        <path d="M720 0.5C403.499 0.5 338.256 162.582 89 200.5" stroke="#FF5B35" strokeWidth="2" />
      </g>
      <mask id="mask2_4366_51655" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="721" height="407">
        <rect y="0" width="80" height="407" fill="url(#rightBeamGrad)">
          <animate begin="0.3s" attributeName="x" values="70;800;800" keyTimes="0;0.282;1" dur="5s" repeatCount="indefinite" calcMode="linear" />
        </rect>
      </mask>
      <g mask="url(#mask2_4366_51655)">
        <path d="M720 406.5C409.084 406.5 316.692 241.79 79 200.5" stroke="#7C00B1" strokeWidth="2" />
      </g>
      <mask id="mask3_4366_51655" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="721" height="407">
        <rect y="0" width="80" height="407" fill="url(#rightBeamGrad)">
          <animate begin="0.3s" attributeName="x" values="70;800;800" keyTimes="0;0.103;1" dur="5s" repeatCount="indefinite" calcMode="linear" />
        </rect>
      </mask>
      <g mask="url(#mask3_4366_51655)">
        <path d="M720 70.5C404.348 70.5 326.463 175.308 79 200.5" stroke="#FFC635" strokeWidth="2" />
      </g>
      <mask id="mask4_4366_51655" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="721" height="407">
        <rect y="0" width="80" height="407" fill="url(#rightBeamGrad)">
          <animate begin="0.3s" attributeName="x" values="70;800;800" keyTimes="0;0.25;1" dur="5s" repeatCount="indefinite" calcMode="linear" />
        </rect>
      </mask>
      <g mask="url(#mask4_4366_51655)">
        <path d="M720 336.5C408.214 336.5 318.457 227.221 79 200.5" stroke="#2402E9" strokeWidth="2" />
      </g>
      <mask id="mask5_4366_51655" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="721" height="407">
        <rect y="0" width="80" height="407" fill="url(#rightBeamGrad)">
          <animate begin="0.3s" attributeName="x" values="70;800;800" keyTimes="0;0.21;1" dur="5s" repeatCount="indefinite" calcMode="linear" />
        </rect>
      </mask>
      <g mask="url(#mask5_4366_51655)">
        <path d="M720 256.5C406.916 256.5 331.114 212.92 89 200.5" stroke="#00819D" strokeWidth="2" />
      </g>
      <mask id="mask6_4366_51655" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="721" height="407">
        <rect y="0" width="80" height="407" fill="url(#rightBeamGrad)">
          <animate begin="0.3s" attributeName="x" values="70;800;800" keyTimes="0;0.26;1" dur="5s" repeatCount="indefinite" calcMode="linear" />
        </rect>
      </mask>
      <g mask="url(#mask6_4366_51655)">
        <path d="M720 256.5C406.916 256.5 321.114 212.92 79 200.5" stroke="#00819D" strokeWidth="2" />
      </g>
      <mask id="mask7_4366_51655" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="721" height="407">
        <rect y="0" width="80" height="407" fill="url(#rightBeamGrad)">
          <animate begin="0.3s" attributeName="x" values="70;800;800" keyTimes="0;0.18;1" dur="5s" repeatCount="indefinite" calcMode="linear" />
        </rect>
      </mask>
      <g mask="url(#mask7_4366_51655)">
        <path d="M720 171.675C540.125 159.909 491.844 187.549 363.249 193.306C267.277 197.603 185.675 201.402 89 200.5" stroke="#007C27" strokeWidth="2" />
      </g>
      <mask id="mask8_4366_51655" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="721" height="407">
        <rect y="0" width="80" height="407" fill="url(#rightBeamGrad)">
          <animate begin="0.3s" attributeName="x" values="70;800;800" keyTimes="0;0.24;1" dur="5s" repeatCount="indefinite" calcMode="linear" />
        </rect>
      </mask>
      <g mask="url(#mask8_4366_51655)">
        <path d="M720 171.675C540.125 159.909 491.844 187.549 363.249 193.306C267.277 197.603 175.675 201.402 79 200.5" stroke="#007C27" strokeWidth="2" />
      </g>

      <path data-figma-bg-blur-radius="24" d="M59 184.5H94V217.5H69L59 184.5Z" fill="#000008" fillOpacity="0.01" />
    </svg>

  )
}

export default RightPathEffect