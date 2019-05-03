import React from 'react'
import { DiamondBorder, Parallax, Triangle } from '../'

export const variation1Front = () => (
  <div className="collage-shapes-1">
    <Parallax speed="1.25">
      <Triangle classes="shape-triangle-1" color="blue" />
    </Parallax>
  </div>
)

export const variation1Back = () => (
  <div className="collage-shapes-1">
    <Parallax speed="0.875">
      <DiamondBorder classes="shape-diamond-1" color="green" />
    </Parallax>
  </div>
)
