import React from 'react'
import PropTypes from 'prop-types'
import setImageParams from '../_helpers/setImageParameters'

const TeamImage = ({ image = '', title = '' }) => {
  const imageParameters = { fit: 'crop', fm: 'pjpg', q: 85 }

  return (
    <div className="image-team team-image">
      <img
        srcSet={`
          ${setImageParams(image, { ...imageParameters, h: 350 })} 250w,
          ${setImageParams(image, { ...imageParameters, h: 450 })} 480w,
          ${setImageParams(image, { ...imageParameters, h: 550 })} 768w,
          ${setImageParams(image, { ...imageParameters, h: 650 })} 1024w,
          ${setImageParams(image, { ...imageParameters, h: 750 })} 1230w,
          ${setImageParams(image, { ...imageParameters, h: 850 })} 1440w
        `}
        src={`${image}`}
        alt=""
      />
      <span className="image-team-title">{title}</span>
    </div>
  )
}

TeamImage.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default TeamImage
