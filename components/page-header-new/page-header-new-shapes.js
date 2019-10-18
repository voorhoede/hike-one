import React from 'react'

export const ShapesDiamond = () => (
  <svg className="animated-shape-diamond" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1450 500">
    <path className="shape-back" fill="#00aae9" fillRule="evenodd" d="M781.6,2412.5L2887.5,306.6c31.1-31.1,31.1-82,0-113.1L781.6-1912.5c-31.1-31.1-82-31.1-113.1,0L-1437.5,193.4c-31.1,31.1-31.1,82,0,113.1L668.4,2412.5C699.5,2443.6,750.5,2443.6,781.6,2412.5z" />
    <path className="shape-front" fill="#ff5c5c" fillRule="evenodd" d="M733.5,352.6l94.1-94.1c4.7-4.7,4.7-12.3,0-17l-94.1-94.1c-4.7-4.7-12.3-4.7-17,0l-94.1,94.1c-4.7,4.7-4.7,12.3,0,17l94.1,94.1C721.2,357.3,728.8,357.3,733.5,352.6z" />
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
    <path className="shape-arrow-1" fill="#8415BC" fillRule="evenodd" d="M1191.9,229.4l63.2,102c0.3,0.4,0.2,1.1-0.2,1.4c-0.2,0.2-0.5,0.2-0.7,0.2h-126.4c-0.6,0-1-0.4-1-1c0-0.2,0-0.4,0.1-0.5l63.2-102.1c0.2-0.5,0.8-0.7,1.3-0.5C1191.6,229,1191.8,229.2,1191.9,229.4L1191.9,229.4z"/>
    <path className="shape-arrow-2" fill="#8415BC" fillRule="evenodd" filter="url(#a)" d="M1345.4,321.4l21.7,35c0.3,0.4,0.2,1.1-0.2,1.4c-0.2,0.2-0.5,0.2-0.7,0.2h-43.4c-0.6,0-1-0.4-1-1c0-0.2,0-0.4,0.1-0.5l21.7-35.1c0.2-0.5,0.8-0.7,1.3-0.5C1345.1,321,1345.3,321.2,1345.4,321.4L1345.4,321.4z"/>
    <path className="shape-arrow-3" fill="#8415BC" fillRule="evenodd" filter="url(#b)" d="M1421.4,184.4l24.7,40c0.3,0.4,0.2,1.1-0.2,1.4c-0.2,0.2-0.5,0.2-0.7,0.2h-49.4c-0.6,0-1-0.4-1-1c0-0.2,0-0.4,0.1-0.5l24.7-40.1c0.2-0.5,0.8-0.7,1.3-0.5C1421.1,184,1421.3,184.2,1421.4,184.4L1421.4,184.4z"/>
    <path className="shape-arrow-4" fill="#8415BC" fillRule="evenodd" d="M1290.4,97.4l24.7,40c0.3,0.4,0.2,1.1-0.2,1.4c-0.2,0.2-0.5,0.2-0.7,0.2h-49.4c-0.6,0-1-0.4-1-1c0-0.2,0-0.4,0.1-0.5l24.7-40.1c0.2-0.5,0.8-0.7,1.3-0.5C1290.1,97,1290.3,97.2,1290.4,97.4L1290.4,97.4z"/>
    <path className="shape-arrow-5" fill="#8415BC" fillRule="evenodd" filter="url(#c)" d="M1060.9,158.4l17.2,28c0.3,0.4,0.2,1.1-0.2,1.4c-0.2,0.2-0.5,0.2-0.7,0.2h-34.4c-0.6,0-1-0.4-1-1c0-0.2,0-0.4,0.1-0.5l17.2-28.1c0.2-0.5,0.8-0.7,1.3-0.5C1060.6,158,1060.8,158.2,1060.9,158.4L1060.9,158.4z"/>
    <path className="shape-arrow-6" fill="#8415BC" fillRule="evenodd" d="M990.4,309.4l27.7,45c0.3,0.4,0.2,1.1-0.2,1.4c-0.2,0.2-0.5,0.2-0.7,0.2h-55.4c-0.6,0-1-0.4-1-1c0-0.2,0-0.4,0.1-0.5l27.7-45.1c0.2-0.5,0.8-0.7,1.3-0.5C990.1,309,990.3,309.2,990.4,309.4L990.4,309.4z"/>
    <path className="shape-arrow-7" fill="#8415BC" fillRule="evenodd" filter="url(#d)" d="M832.9,348.4l20.2,33c0.3,0.4,0.2,1.1-0.2,1.4c-0.2,0.2-0.5,0.2-0.7,0.2h-40.4c-0.6,0-1-0.4-1-1c0-0.2,0-0.4,0.1-0.5l20.2-33.1c0.2-0.5,0.8-0.7,1.3-0.5C832.6,348,832.8,348.2,832.9,348.4L832.9,348.4z"/>
    <path className="shape-arrow-8" fill="#8415BC" fillRule="evenodd" d="M680.4,254.4l63.7,104c0.3,0.4,0.2,1.1-0.2,1.4c-0.2,0.2-0.5,0.2-0.7,0.2H615.8c-0.6,0-1-0.4-1-1c0-0.2,0-0.4,0.1-0.5l63.7-104.1c0.2-0.5,0.8-0.7,1.3-0.5C680.1,254,680.3,254.2,680.4,254.4L680.4,254.4z"/>
    <path className="shape-arrow-9" fill="#8415BC" fillRule="evenodd" filter="url(#e)" d="M312.9,396.4l20.2,33c0.3,0.4,0.2,1.1-0.2,1.4c-0.2,0.2-0.5,0.2-0.7,0.2h-40.4c-0.6,0-1-0.4-1-1c0-0.2,0-0.4,0.1-0.5l20.2-33.1c0.2-0.5,0.8-0.7,1.3-0.5C312.6,396,312.8,396.2,312.9,396.4L312.9,396.4z"/>
    <path className="shape-arrow-10" fill="#8415BC" fillRule="evenodd" d="M159.9,303.4l62.2,102c0.3,0.4,0.2,1.1-0.2,1.4c-0.2,0.2-0.5,0.2-0.7,0.2H96.8c-0.6,0-1-0.4-1-1c0-0.2,0-0.4,0.1-0.5l62.2-102.1c0.2-0.5,0.8-0.7,1.3-0.5C159.6,303,159.8,303.2,159.9,303.4L159.9,303.4z"/>
    <path className="shape-arrow-11" fill="#8415BC" fillRule="evenodd" filter="url(#f)" d="M29.9,231.4l18.2,30c0.3,0.4,0.2,1.1-0.2,1.4c-0.2,0.2-0.5,0.2-0.7,0.2H10.8c-0.6,0-1-0.4-1-1c0-0.2,0-0.4,0.1-0.5l18.2-30c0.2-0.5,0.8-0.7,1.3-0.5c0.2,0.1,0.4,0.3,0.5,0.5L29.9,231.4z"/>
    <path className="shape-arrow-12" fill="#8415BC" fillRule="evenodd" filter="url(#g)" d="M394.4,259.4l23.7,39c0.3,0.4,0.2,1.1-0.2,1.4c-0.2,0.2-0.5,0.2-0.7,0.2h-47.4c-0.6,0-1-0.4-1-1c0-0.2,0-0.4,0.1-0.5l23.7-39c0.2-0.5,0.8-0.7,1.3-0.5c0.2,0.1,0.4,0.3,0.5,0.5L394.4,259.4z"/>
    <path className="shape-arrow-13" fill="#8415BC" fillRule="evenodd" filter="url(#h)" d="M549.9,184.4l17.2,28c0.3,0.4,0.2,1.1-0.2,1.4c-0.2,0.2-0.5,0.2-0.7,0.2h-34.4c-0.6,0-1-0.4-1-1c0-0.2,0-0.4,0.1-0.5l17.2-28.1c0.2-0.5,0.8-0.7,1.3-0.5C549.6,184,549.8,184.2,549.9,184.4L549.9,184.4z"/>
    <path className="shape-arrow-14" fill="#8415BC" fillRule="evenodd" d="M780.4,124.4l24.7,40c0.3,0.4,0.2,1.1-0.2,1.4c-0.2,0.2-0.5,0.2-0.7,0.2h-49.4c-0.6,0-1-0.4-1-1c0-0.2,0-0.4,0.1-0.5l24.7-40.1c0.2-0.5,0.8-0.7,1.3-0.5C780.1,124,780.3,124.2,780.4,124.4L780.4,124.4z"/>
    <path className="shape-arrow-15" fill="#8415BC" fillRule="evenodd" d="M478.9,335.4l27.2,44c0.3,0.4,0.2,1.1-0.2,1.4c-0.2,0.2-0.5,0.2-0.7,0.2h-54.4c-0.6,0-1-0.4-1-1c0-0.2,0-0.4,0.1-0.5l27.2-44.1c0.2-0.5,0.8-0.7,1.3-0.5C478.6,335,478.8,335.2,478.9,335.4L478.9,335.4z"/>
    <path className="shape-arrow-16" fill="#8415BC" fillRule="evenodd" d="M258.4,172.4l23.7,39c0.3,0.4,0.2,1.1-0.2,1.4c-0.2,0.2-0.5,0.2-0.7,0.2h-47.4c-0.6,0-1-0.4-1-1c0-0.2,0-0.4,0.1-0.5l23.7-39c0.2-0.5,0.8-0.7,1.3-0.5c0.2,0.1,0.4,0.3,0.5,0.5L258.4,172.4z"/>
    <path className="shape-arrow-17" fill="#8415BC" fillRule="evenodd" d="M915.4,211.4l24.7,40c0.3,0.4,0.2,1.1-0.2,1.4c-0.2,0.2-0.5,0.2-0.7,0.2h-49.4c-0.6,0-1-0.4-1-1c0-0.2,0-0.4,0.1-0.5l24.7-40.1c0.2-0.5,0.8-0.7,1.3-0.5C915.1,211,915.3,211.2,915.4,211.4L915.4,211.4z"/>
  </svg>
)
