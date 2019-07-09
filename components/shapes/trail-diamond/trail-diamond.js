import React from 'react'
import PropTypes from 'prop-types'

const TrailDiamond = ({ shadow = false }) => (
  <div className="shape">
    <svg className="shape-trail-diamond" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
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
      <path className="shape-trail-diamond-bg shape-bg" filter={shadow ? 'url(#shape-trail-diamond-shadow)' : ''} d="M54.1 50h291.8c2.2 0 4 1.8 4 4v292c0 2.2-1.8 4-4 4H54.1c-2.2 0-4-1.8-4-4V54c0-2.2 1.8-4 4-4z" fill="#fe595b" />
      <path className="shape-trail-diamond-front shape-front" d="M304.8,287.4l-213.3-0.2c-0.8,0-1.5-0.7-1.5-1.5c0-0.3,0.1-0.5,0.2-0.8l108.1-171.7c0.4-0.7,1.3-0.9,2.1-0.5c0.2,0.1,0.4,0.3,0.5,0.5l108.9,171.9c0.4,0.7,0.2,1.6-0.5,2.1C309.1,287.3,305,287.4,304.8,287.4L304.8,287.4z" fill="#00aae9" />
    </svg>
  </div>
)

TrailDiamond.propTypes = {
  shadow: PropTypes.bool,
}

export default TrailDiamond
