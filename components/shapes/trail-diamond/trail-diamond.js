import React from 'react'

const TrailDiamond = ({shadow}) => (
  <div className="shape">
    <svg className="shape-trail-diamond" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 399 400">
      { shadow &&
        <defs>
          <filter id="shape-trail-diamond-shadow" width="160%" height="160%" x="-30%" y="-20%" filterUnits="objectBoundingBox">
            <feOffset dy="30" in="SourceAlpha" result="shadowOffsetOuter1"/>
            <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="25"/>
            <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      }
      <g filter={shadow ? 'url(#shape-trail-diamond-shadow)' : '' }
        fill="none" fillRule="evenodd"  transform="translate(50 20)">
        <rect className="shape-trail-diamond-bg" width="299.848" height="299.973" fill="#FE595B" rx="4"/>
        <rect className="shape-trail-diamond-front" width="144.23" height="144.29" x="77.607" y="79.804" fill="#00AAE9" rx="4" transform="rotate(45 149.722 151.95)"/>
      </g>
    </svg>
  </div>
)


export default TrailDiamond
