import React from 'react'
import PropTypes from 'prop-types'
import setImageParams from '../_helpers/setImageParameters'

const FullWidthImageSmall = ({ image = '#', index = 0 }) => {
  const imageParameters = { fm: 'pjpg', q: 85 }
  const style = {
    __html: `<style>
      .full-width-image-small-${index} {
        background-image: url(${setImageParams(image, { ...imageParameters, w: 500 })})
      }
      @media only screen and (min-width: 500px) {
        .full-width-image-small-${index} {
          background-image: url(${setImageParams(image, { ...imageParameters, w: 1000 })})
        }
      }
      @media only screen and (min-width: 1170px) {
        .full-width-image-small-${index} {
          background-image: url(${setImageParams(image, { ...imageParameters, w: 1920 })})
        }
      }
    </style>`,
  }

  return (
    <div>
      <div dangerouslySetInnerHTML={style} />
      <div className={`full-width-image-small full-width-image-small-${index}`} />
    </div>
  )
}

FullWidthImageSmall.propTypes = {
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}

export default FullWidthImageSmall
