import React from 'react'
import { Parallax, Triangle } from '../'

export const variation1Front = () => (
  <div className="case-extract-small-shapes">
    <Parallax speed="1.25">
      <Triangle classes="shape-triangle-1" color="red" />
    </Parallax>
    <Parallax speed="1.5">
      <Triangle classes="shape-triangle-2" color="blue" />
    </Parallax>
  </div>
)
