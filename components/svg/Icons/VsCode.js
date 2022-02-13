/* eslint-disable max-len */
const VsCode = () => {
  return (
    <div className="icon">
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="a" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
          <path fillRule="evenodd" clipRule="evenodd" d="M70.91 99.32c1.58.61 3.37.57 4.96-.2l20.6-9.9a6.25 6.25 0 0 0 3.53-5.63V16.4c0-2.4-1.38-4.59-3.54-5.63L75.87.88a6.23 6.23 0 0 0-7.1 1.2L29.36 38.04 12.19 25.01a4.16 4.16 0 0 0-5.32.24l-5.5 5a4.17 4.17 0 0 0-.01 6.17L16.25 50 1.35 63.58a4.17 4.17 0 0 0 .01 6.17l5.5 5a4.16 4.16 0 0 0 5.33.24l17.17-13.03 39.4 35.96c.63.62 1.36 1.09 2.15 1.4Zm4.1-72.02L45.12 50 75 72.7V27.3Z" fill="#fff"/>
        </mask>
        <g mask="url(#a)">
          <path d="M96.46 10.8 75.86.88a6.23 6.23 0 0 0-7.11 1.2L1.3 63.58a4.17 4.17 0 0 0 0 6.17l5.51 5a4.17 4.17 0 0 0 5.32.24l81.23-61.62a4.14 4.14 0 0 1 6.64 3.3v-.24c0-2.4-1.38-4.6-3.54-5.63Z" fill="#0065A9"/>
          <g filter="url(#b)">
            <path d="m96.46 89.2-20.6 9.92a6.23 6.23 0 0 1-7.11-1.2L1.3 36.42a4.17 4.17 0 0 1 0-6.17l5.51-5a4.17 4.17 0 0 1 5.32-.24l81.23 61.62a4.14 4.14 0 0 0 6.64-3.3v.24c0 2.4-1.38 4.6-3.54 5.63Z" fill="#007ACC"/>
          </g>
          <g filter="url(#c)">
            <path d="M75.86 99.13a6.23 6.23 0 0 1-7.11-1.21c2.3 2.3 6.25.67 6.25-2.6V4.68c0-3.26-3.94-4.9-6.25-2.59a6.23 6.23 0 0 1 7.1-1.2l20.6 9.9a6.25 6.25 0 0 1 3.55 5.63V83.6c0 2.4-1.38 4.59-3.54 5.63l-20.6 9.9Z" fill="#1F9CF0"/>
          </g>
          <path fillRule="evenodd" clipRule="evenodd" className="vscode-mixblendmode" d="M70.85 99.32c1.58.61 3.37.57 4.96-.2l20.59-9.9a6.25 6.25 0 0 0 3.54-5.63V16.4c0-2.4-1.38-4.59-3.54-5.63L75.81.88a6.23 6.23 0 0 0-7.1 1.2L29.29 38.04 12.13 25.01a4.16 4.16 0 0 0-5.32.24l-5.5 5a4.17 4.17 0 0 0-.01 6.17L16.19 50 1.29 63.58a4.17 4.17 0 0 0 .01 6.17l5.5 5a4.16 4.16 0 0 0 5.33.24l17.16-13.03 39.42 35.96c.62.62 1.35 1.09 2.14 1.4Zm4.1-72.02L45.05 50l29.9 22.7V27.3Z" fill="url(#d)" opacity=".25"/>
        </g>
        <defs>
          <filter id="b" x="-8.39" y="15.83" width="116.73" height="92.25" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="4.17"/>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="overlay" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
          <filter id="c" x="60.42" y="-8.08" width="47.92" height="116.15" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="4.17"/>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="overlay" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
          <linearGradient id="d" x1="49.94" y1=".26" x2="49.94" y2="99.74" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff"/>
            <stop offset="1" stopColor="#fff" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default VsCode;
