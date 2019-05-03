import React from 'react'
import { CircleBorder, DiamondBorder, Parallax } from '../'

const ShapesBack = () => {
  return (
    <div className="services-intro-shapes parallax-layer">
      <Parallax speed="0.875">
        <CircleBorder classes="shape-circle-1" color="blue" />
        <DiamondBorder classes="shape-diamond-1" color="yellow" />
      </Parallax>
    </div>
  )
}

export default ShapesBack
