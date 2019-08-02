import React from 'react'

export const ShapesDiamond = () => (
  <svg className="animated-shape-diamond" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1450 500">
    <path className="shape-back" fill="#ff5c5c" fillRule="evenodd" d="M781.6,2412.5L2887.5,306.6c31.1-31.1,31.1-82,0-113.1L781.6-1912.5c-31.1-31.1-82-31.1-113.1,0L-1437.5,193.4c-31.1,31.1-31.1,82,0,113.1L668.4,2412.5C699.5,2443.6,750.5,2443.6,781.6,2412.5z" />
    <path className="shape-front" fill="#00aae9" fillRule="evenodd" d="M733.5,352.6l94.1-94.1c4.7-4.7,4.7-12.3,0-17l-94.1-94.1c-4.7-4.7-12.3-4.7-17,0l-94.1,94.1c-4.7,4.7-4.7,12.3,0,17l94.1,94.1C721.2,357.3,728.8,357.3,733.5,352.6z" />
  </svg>
)

export const ShapesDoubleDiamond = () => (
  <svg className="animated-shape-double-diamond" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1450 500">
    <path className="shape-back" fill="#ff5c5c" fillRule="evenodd" d="M779.6 178.2l66.4 66.1a8 8 0 0 1 0 11.3l-66.4 66.1a8 8 0 0 1-11.3 0l-66.3-66a8 8 0 0 1 0-11.3l66.4-66.1a8 8 0 0 1 11.2 0z" />
    <path className="shape-front" fill="#ffe044" fillRule="evenodd" d="M681.6 178.2l66.4 66.1a8 8 0 0 1 0 11.3l-66.4 66.1a8 8 0 0 1-11.3 0l-66.3-66a8 8 0 0 1 0-11.3l66.4-66.1a8 8 0 0 1 11.2 0z" />
  </svg>
)

export const ShapesTriangles = () => (
  <svg className="animated-shape-traingles" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1450 500">
    <defs>
      <filter id="a" width="134.9%" height="145%" x="-17.5%" y="-21.3%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3" /></filter>
      <filter id="b" width="119.7%" height="125.8%" x="-9.8%" y="-11.8%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2" /></filter>
      <filter id="c" width="143.2%" height="155.1%" x="-21.6%" y="-26.1%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3" /></filter>
      <filter id="d" width="137.4%" height="147.5%" x="-18.7%" y="-22.5%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3" /></filter>
      <filter id="e" width="123.7%" height="130.8%" x="-11.9%" y="-14.1%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2" /></filter>
      <filter id="f" width="126.1%" height="133.5%" x="-13.1%" y="-15.4%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2" /></filter>
      <filter id="g" width="120.5%" height="126.4%" x="-10.2%" y="-12.1%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2" /></filter>
      <filter id="h" width="127.4%" height="135.8%" x="-13.7%" y="-16.4%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="2" /></filter>
    </defs>
    <path fill="#8415BC" fillRule="evenodd" d="M1191.9 229.4l63.2 102a1 1 0 0 1-.9 1.6h-126.4a1 1 0 0 1-.9-1.5l63.2-102.1a1 1 0 0 1 1.8 0z" />
    <path fill="#8415BC" fillRule="evenodd" filter="url(#a)" d="M1345.4 321.4l21.7 35a1 1 0 0 1-.9 1.6h-43.4a1 1 0 0 1-.9-1.5l21.7-35.1a1 1 0 0 1 1.8 0z" />
    <path fill="#8415BC" fillRule="evenodd" filter="url(#b)" d="M1426.4 184.4l24.7 40a1 1 0 0 1-.9 1.6h-49.4a1 1 0 0 1-.9-1.5l24.7-40.1a1 1 0 0 1 1.8 0z" />
    <path fill="#8415BC" fillRule="evenodd" d="M1290.4 97.4l24.7 40a1 1 0 0 1-.9 1.6h-49.4a1 1 0 0 1-.9-1.5l24.7-40.1a1 1 0 0 1 1.8 0z" />
    <path fill="#8415BC" fillRule="evenodd" filter="url(#c)" d="M1060.9 158.4l17.2 28a1 1 0 0 1-.9 1.6h-34.4a1 1 0 0 1-.9-1.5l17.2-28.1a1 1 0 0 1 1.8 0z" />
    <path className="shape-back" fill="#8415BC" fillRule="evenodd" d="M915.4 211.4l24.7 40a1 1 0 0 1-.9 1.6h-49.4a1 1 0 0 1-.9-1.5l24.7-40.1a1 1 0 0 1 1.8 0zM990.4 309.4l27.7 45a1 1 0 0 1-.9 1.6h-55.4a1 1 0 0 1-.9-1.5l27.7-45.1a1 1 0 0 1 1.8 0z" />
    <path fill="#8415BC" fillRule="evenodd" filter="url(#d)" d="M832.9 348.4l20.2 33a1 1 0 0 1-.9 1.6h-40.4a1 1 0 0 1-.9-1.5l20.2-33.1a1 1 0 0 1 1.8 0z" />
    <path fill="#8415BC" fillRule="evenodd" d="M680.4 254.4l63.7 104a1 1 0 0 1-.9 1.6H615.8a1 1 0 0 1-.9-1.5l63.7-104.1a1 1 0 0 1 1.8 0zM478.9 335.4l27.2 44a1 1 0 0 1-.9 1.6h-54.4a1 1 0 0 1-.9-1.5l27.2-44.1a1 1 0 0 1 1.8 0z" />
    <path fill="#8415BC" fillRule="evenodd" filter="url(#e)" d="M312.9 396.4l20.2 33a1 1 0 0 1-.9 1.6h-40.4a1 1 0 0 1-.9-1.5l20.2-33.1a1 1 0 0 1 1.8 0z" />
    <path className="shape-back" fill="#8415BC" fillRule="evenodd" d="M159.9 303.4l62.2 102a1 1 0 0 1-.9 1.6H96.8a1 1 0 0 1-.9-1.5l62.2-102.1a1 1 0 0 1 1.8 0zM258.4 172.4l23.7 39a1 1 0 0 1-.9 1.6h-47.4a1 1 0 0 1-.9-1.5l23.7-39a1 1 0 0 1 1.8 0z" />
    <path fill="#8415BC" fillRule="evenodd" filter="url(#f)" d="M29.9 231.4l18.2 30a1 1 0 0 1-.9 1.6H10.8a1 1 0 0 1-.9-1.5l18.2-30a1 1 0 0 1 1.8 0z" />
    <path fill="#8415BC" fillRule="evenodd" filter="url(#g)" d="M394.4 259.4l23.7 39a1 1 0 0 1-.9 1.6h-47.4a1 1 0 0 1-.9-1.5l23.7-39a1 1 0 0 1 1.8 0z" />
    <path fill="#8415BC" fillRule="evenodd" filter="url(#h)" d="M549.9 184.4l17.2 28a1 1 0 0 1-.9 1.6h-34.4a1 1 0 0 1-.9-1.5l17.2-28.1a1 1 0 0 1 1.8 0z" />
    <path fill="#8415BC" fillRule="evenodd" d="M780.4 124.4l24.7 40a1 1 0 0 1-.9 1.6h-49.4a1 1 0 0 1-.9-1.5l24.7-40.1a1 1 0 0 1 1.8 0z" />
  </svg>
)
