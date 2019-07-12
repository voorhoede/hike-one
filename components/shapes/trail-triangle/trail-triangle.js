import React from 'react'

const TrailTriangle= () => (
  <div className="shape">
    <svg className="shape-trail-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
      <rect className="shape-bg" fill="#8314BB" width="400" height="400" rx="12" ry="12" />
      <path className="shape-front" fill="#FFE044" d="M331.5,716.7l-267.6-0.3c-1,0-1.9-0.9-1.9-1.9c0-0.4,0.1-0.6,0.3-1l135.6-215.4c0.5-0.9,1.6-1.1,2.6-0.6c0.3,0.1,0.5,0.4,0.6,0.6l136.6,215.7c0.5,0.9,0.3,2-0.6,2.6C336.9,716.5,331.7,716.7,331.5,716.7L331.5,716.7z"/>
      <path className="shape-back" fill="#FFE044" d="M331.5,309.7l-267.6-0.3c-1,0-1.9-0.9-1.9-1.9c0-0.4,0.1-0.6,0.3-1L197.9,91.2c0.5-0.9,1.6-1.1,2.6-0.6c0.3,0.1,0.5,0.4,0.6,0.6l136.6,215.7c0.5,0.9,0.3,2-0.6,2.6C336.9,309.6,331.7,309.7,331.5,309.7L331.5,309.7z"/>
    </svg>
  </div>
)

export default TrailTriangle
