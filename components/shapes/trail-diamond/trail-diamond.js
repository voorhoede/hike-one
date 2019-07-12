import React from 'react'

const TrailDiamond = () => (
  <div className="shape">
    <svg className="shape-trail-diamond" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
      <rect className="shape-bg" fill="#fe595b" width="400" height="400" rx="30" ry="30" />
      <rect className="shape-front" fill="#00aae9" width="192" height="192" x="103" y="103" rx="12" ry="12" transform="matrix(0.7071 0.7071 -0.7071 0.7071 199.9481 -82.8642)" />
    </svg>
  </div>
)

export default TrailDiamond
