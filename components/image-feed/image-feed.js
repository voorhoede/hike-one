import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Icon from '../icon/icon'

const ImageFeed = ({ socialImagesInstagram, socialImagesDribble, linkDribble, linkInstagram }) => (
  <div className="image-feed-container">
    <Link href={linkDribble}>
      <a>
        <div className="image-feed">
          <div className="image-feed-image">
            <img src={socialImagesInstagram} alt="" />
          </div>
          <div className="image-feed-icon">
            <Icon icon="instagram" classes="icon" />
          </div>
        </div>
      </a>
    </Link>
    <Link href={linkInstagram}>
      <a>
        <div className="image-feed">
          <div className="image-feed-image">
            <img src={socialImagesDribble} alt="" />
          </div>
          <div className="image-feed-icon">
            <Icon icon="dribble" classes="icon" />
          </div>
        </div>
      </a>
    </Link>
  </div>
)

ImageFeed.propTypes = {
  socialImagesInstagram: PropTypes.string.isRequired,
  socialImagesDribble: PropTypes.string.isRequired,
  linkDribble: PropTypes.string.isRequired,
  linkInstagram: PropTypes.string.isRequired,
}

export default ImageFeed
