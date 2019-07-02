import React from 'react'

const TrailDoubleDiamond = () => (
  <svg className="shape animated-shape-trail-double-diamond" xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
    <rect className="shape-trail-double-diamond-bg shape-bg" width="400" height="400" fill="#45d33c" />
    <rect className="shape-trail-double-diamond-back shape-back" x="82.2" y="129.5" transform="matrix(0.7071 0.7071 -0.7071 0.7071 186.1439 -49.3912)" width="141" height="141"/>
    <rect className="shape-trail-double-diamond-front shape-front" x="176.8" y="129.5" transform="matrix(0.7071 0.7071 -0.7071 0.7071 213.8561 -116.2942)" width="141" height="141"/>
  </svg>
)

export default TrailDoubleDiamond
