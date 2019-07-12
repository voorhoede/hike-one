import React from 'react'

const TrailDoubleDiamond = () => (
  <div className="shape">
    <svg className="shape-trail-double-diamond" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
      <rect className="shape-bg" fill="#45d33c" width="400" height="400" rx="12" ry="12" />
      <rect className="shape-back" fill="#FFE044" width="134" height="134" x="78.7" y="133" rx="12" ry="12" transform="matrix(0.7071 0.7071 -0.7071 0.7071 184.0894 -44.4479)" />
      <rect className="shape-front" fill="#FE595B" width="134" height="134" x="187.3" y="133" rx="12" ry="12" transform="matrix(0.7071 0.7071 -0.7071 0.7071 215.8987 -121.2424)" />
    </svg>
  </div>
)

export default TrailDoubleDiamond
