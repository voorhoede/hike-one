import React from 'react'
import PropTypes from 'prop-types'
import setImageParams from '../_helpers/setImageParameters'

const TeamImage = ({ image = '', title = '' }) => (
  <div className="image-team team-image">
    <img
      srcSet={`
        ${setImageParams(image, { fit: 'crop', h: 350 })} 250w,
        ${setImageParams(image, { fit: 'crop', h: 450 })} 480w,
        ${setImageParams(image, { fit: 'crop', h: 550 })} 768w,
        ${setImageParams(image, { fit: 'crop', h: 650 })} 1024w,
        ${setImageParams(image, { fit: 'crop', h: 750 })} 1230w,
        ${setImageParams(image, { fit: 'crop', h: 850 })} 1440w
      `}
      src={`${image}`}
      alt=""
    />
    <span className="image-team-title">{title}</span>
  </div>
)

TeamImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
}

export default TeamImage
