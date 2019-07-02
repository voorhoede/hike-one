import React from 'react'

const TrailDiamond = () => (
  <svg className="shape animated-shape-trail-diamond" xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
    <rect className="shape-trail-diamond-bg shape-bg" width="400" height="400" fill="#fe595b"/>
    <rect className="shape-trail-diamond-front shape-front" fill="#00aae9" x="126.1" y="126.1" width="147.7" height="147.7" transform="matrix(0.7071 0.7071 -0.7071 0.7071 200 -82.8427)" />
  </svg>
)

export default TrailDiamond
