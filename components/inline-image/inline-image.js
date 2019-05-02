import React from 'react'
import setImageParams from '../_helpers/setImageParameters'

const inlineImage = ({ image }) => {
  const imageParameters = { fit: 'max', fm: 'pjpg', q: 85 }

  return (
    <img
      srcSet={`
        ${setImageParams(image, {...imageParameters, w: 800, h:600 } )} 768w,
        ${setImageParams(image, {...imageParameters, w: 900, h:768 } )} 1024w,
        ${setImageParams(image, {...imageParameters, w: 1000, h:850 } )} 1190w,
        ${setImageParams(image, {...imageParameters, w: 1200, h:950 } )} 1440w
      `}
      sizes={`
        (max-width: 320px) calc(100vw - 30px),
        (max-width: 768px) calc(100vw - 30px),
        (max-width: 1024px) 790px,
        821px"`}
      alt=""
      src={image}
    />
  )
}

export default inlineImage
