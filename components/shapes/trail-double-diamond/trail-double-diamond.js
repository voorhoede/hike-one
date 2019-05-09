import React from 'react'
import PropTypes from 'prop-types'

const TrailDoubleDiamond = ({ shadow = false }) => (
  <div className="shape">
    <svg className="shape-trail-double-diamond" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 399 399">
      { shadow &&
        <defs>
          <filter id="shape-trail-double-diamond-shadow" width="160%" height="160%" x="-30%" y="-20%" filterUnits="objectBoundingBox">
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
      <g filter={shadow ? 'url(#shape-trail-double-diamond-shadow)' : ''}
        fill="none" fillRule="evenodd"  transform="translate(50 20)">
        <rect className="shape-trail-double-diamond-bg" width="299.511" height="299.824" fill="#45D33C" rx="4"/>
        <g transform="translate(33 71)">
          <rect className="shape-trail-double-diamond-back" width="109.818" height="110.183" x="23.053" y="23.337" fill="#FFE044" rx="4" transform="rotate(45 77.961 78.429)"/>
          <rect className="shape-trail-double-diamond-front" width="109.818" height="110.183" x="100.772" y="23.271" fill="#FE595B" rx="4" transform="rotate(45 155.68 78.362)"/>
        </g>
      </g>
    </svg>
  </div>
)

TrailDoubleDiamond.propTypes = {
  shadow: PropTypes.bool,
}

export default TrailDoubleDiamond
