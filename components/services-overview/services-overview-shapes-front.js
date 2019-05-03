import React from 'react'
import { Parallax, Triangle } from '../'

const ShapesFront = () => {
  return (
    <div className="services-overview-shapes parallax-layer">
      <Parallax speed="1.5">
        <Triangle classes="shape-triangle-1" color="red" />
      </Parallax>
    </div>
  )
}

export default ShapesFront
