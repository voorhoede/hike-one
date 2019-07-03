import React from 'react'

export const TrailDiamond = () => (
  <svg className="animated-shape" xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
    <rect className="shape-bg" width="400" height="400" fill="#fe595b"/>
    <rect className="shape-front" fill="#00aae9" x="126.1" y="126.1" width="147.7" height="147.7" transform="matrix(0.7071 0.7071 -0.7071 0.7071 200 -82.8427)" />
  </svg>
)

export const TrailDoubleDiamond = () => (
  <svg className="animated-shape" xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
    <rect className="shape-bg" width="400" height="400" fill="#45d33c" />
    <rect className="shape-back" x="82.2" y="129.5" fill="#FFE044" transform="matrix(0.7071 0.7071 -0.7071 0.7071 186.1439 -49.3912)" width="141" height="141"/>
    <rect className="shape-front" x="176.8" y="129.5" fill="#FE595B" transform="matrix(0.7071 0.7071 -0.7071 0.7071 213.8561 -116.2942)" width="141" height="141"/>
  </svg>
)

export const TrailTriangle = () => (
  <svg className="animated-shape" xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
    <rect className="shape-bg" width="400" height="400" fill="#FFE044"/>
    <path className="shape-front" fill="#8314BB" d="M304.8,287.4l-213.3-0.2c-0.8,0-1.5-0.7-1.5-1.5c0-0.3,0.1-0.5,0.2-0.8l108.1-171.7c0.4-0.7,1.3-0.9,2.1-0.5c0.2,0.1,0.4,0.3,0.5,0.5l108.9,171.9c0.4,0.7,0.2,1.6-0.5,2.1C309.1,287.3,305,287.4,304.8,287.4L304.8,287.4z" />
  </svg>
)
