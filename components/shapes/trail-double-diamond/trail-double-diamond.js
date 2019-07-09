import React from 'react'
import PropTypes from 'prop-types'

const TrailDoubleDiamond = ({ shadow = false }) => (
  <div className="shape">
    <svg className="shape-trail-double-diamond" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
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
      <path className="shape-trail-double-diamond-bg shape-bg" filter={shadow ? 'url(#shape-trail-double-diamond-shadow)' : ''} d="M54.1 50h291.8c2.2 0 4 1.8 4 4v292c0 2.2-1.8 4-4 4H54.1c-2.2 0-4-1.8-4-4V54c0-2.2 1.8-4 4-4z" />
      <path className="shape-trail-double-diamond-back shape-back" d="M164.1 125.1l72 72c1.6 1.6 1.6 4.1 0 5.7L163.8 275c-1.6 1.6-4.1 1.6-5.7 0l-72-72c-1.6-1.6-1.6-4.1 0-5.7l72.3-72.3c1.6-1.5 4.1-1.5 5.7.1z" fill="#ffe044"/>
      <path className="shape-trail-double-diamond-front shape-front" d="M241.8 125l72 72c1.6 1.6 1.6 4.1 0 5.7L241.5 275c-1.6 1.6-4.1 1.6-5.7 0l-72-72c-1.6-1.6-1.6-4.1 0-5.7l72.4-72.3c1.5-1.5 4.1-1.5 5.6 0z" fill="#fe595b"/>
    </svg>
  </div>
)

TrailDoubleDiamond.propTypes = {
  shadow: PropTypes.bool,
}

export default TrailDoubleDiamond
