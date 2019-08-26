import React from 'react'
import { CircleBorder, DiamondBorder, Parallax, Triangle } from '../'

export const TextRightSmall1Front = () => (
  <div className="fifty-fifty-shapes-1">
    <Parallax speed="1.25">
      <Triangle classes="shape-triangle-1" color="red" />
    </Parallax>
  </div>
)

export const TextLeftSmall1Back = () => (
  <div className="fifty-fifty-shapes-2">
    <Parallax speed="0.875">
      <DiamondBorder classes="shape-diamond-1" color="yellow" />
      <CircleBorder classes="shape-circle-1" color="green" />
    </Parallax>
  </div>
)

export const TextRight1Back = () => (
  <div className="fifty-fifty-shapes-3">
    <Parallax speed="0.875">
      <CircleBorder classes="shape-circle-1" color="blue" />
    </Parallax>
  </div>
)
