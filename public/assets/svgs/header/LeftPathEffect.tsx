const LeftPathEffect = () => {
  return (
    <svg width="720" height="406" viewBox="0 0 720 406" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="paint0_linear_4366_51638" x1="2.5" y1="201.548" x2="720.784" y2="201.548" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="paint1_linear_4366_51638" x1="3.88376" y1="231.261" x2="720.281" y2="191.491" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="paint2_linear_4366_51638" x1="3" y1="204.692" x2="720.69" y2="204.692" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" stopOpacity="0.4" />
        </linearGradient>
        {/* Beam gradient: right=solid white, left=transparent — moves with the rect */}
        <linearGradient id="leftBeamGrad" x1="1" y1="0" x2="0" y2="0" gradientUnits="objectBoundingBox">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Base gradient paths */}
      <path d="M2.5 193.556C182.5 143.059 261.307 183.705 359.5 198.559C457.693 213.414 506.333 200.708 607.5 201.22" stroke="url(#paint0_linear_4366_51638)" />
      <path d="M3.41799 222.875C180.874 172.061 261.295 202.945 360.184 208.75C459.072 214.556 506.646 205.929 607.502 201.501" stroke="url(#paint1_linear_4366_51638)" />
      <path d="M3 199.377C183 160.552 261.807 194.265 360 204.762C458.193 215.259 508.5 203.001 607.5 201.501" stroke="url(#paint2_linear_4366_51638)" />

      {/* All beams start together, same total cycle 5s (2.75s travel + 7s wait) */}

      {/* Line 1 — 30%, off screen at 2.25s */}
      <mask id="mask0_4366_51638" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="76" width="720" height="220">
        <rect y="76" width="80" height="220" fill="url(#leftBeamGrad)">
          <animate attributeName="x" values="103;650;650" keyTimes="0;0.231;1" dur="5s" repeatCount="indefinite" calcMode="linear" />
        </rect>
      </mask>
      <g mask="url(#mask0_4366_51638)">
        <path d="M2.5 193.999C182.5 143.503 261.307 184.148 359.5 199.003C457.693 213.858 506.333 201.151 607.5 201.664" stroke="white" strokeWidth="2" />
      </g>

      {/* Line 2 — 50%, off screen at 1.75s */}
      <mask id="mask1_4366_51638" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="118" width="720" height="220">
        <rect y="118" width="80" height="220" fill="url(#leftBeamGrad)">
          <animate attributeName="x" values="224;650;650" keyTimes="0;0.179;1" dur="5s" repeatCount="indefinite" calcMode="linear" />
        </rect>
      </mask>
      <g mask="url(#mask1_4366_51638)">
        <path d="M3.41799 222.875C180.874 172.061 261.295 202.945 360.184 208.75C459.072 214.556 506.646 205.929 607.502 201.501" stroke="white" strokeWidth="2" />
      </g>

      {/* Line 3 — 10%, off screen at 2.75s (longest) */}
      <mask id="mask2_4366_51638" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="102" width="720" height="220">
        <rect y="102" width="80" height="220" fill="url(#leftBeamGrad)">
          <animate attributeName="x" values="-18;650;650" keyTimes="0;0.282;1" dur="5s" repeatCount="indefinite" calcMode="linear" />
        </rect>
      </mask>
      <g mask="url(#mask2_4366_51638)">
        <path d="M3 199.377C183 160.552 261.807 194.265 360 204.762C458.193 215.259 508.5 203.001 607.5 201.501" stroke="white" strokeWidth="2" />
      </g>

      {/* Line 3 — 80%, off screen at 1.0s */}
      <mask id="mask3_4366_51638" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="102" width="720" height="220">
        <rect y="102" width="80" height="220" fill="url(#leftBeamGrad)">
          <animate attributeName="x" values="406;650;650" keyTimes="0;0.103;1" dur="5s" repeatCount="indefinite" calcMode="linear" />
        </rect>
      </mask>
      <g mask="url(#mask3_4366_51638)">
        <path d="M3 199.377C183 160.552 261.807 194.265 360 204.762C458.193 215.259 508.5 203.001 607.5 201.501" stroke="white" strokeWidth="2" />
      </g>
    </svg>
  )
}

export default LeftPathEffect
