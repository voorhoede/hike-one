import React from 'react'
import PropTypes from 'prop-types'
import Facebook from '../icons/facebook-circle'
import Twitter from '../icons/twitter-circle'
import LinkedIn from '../icons/linkedin-circle'

const SocialShare = ({ facebookLink = '', linkedinLink = '', twitterLink = '' }) => (
  <div className="social-share">
    <a href={facebookLink} className="social-share-item" target="_blank" rel="noopener noreferrer">
      <Facebook color="facebook-blue" />
    </a>
    <a href={twitterLink} className="social-share-item" target="_blank" rel="noopener noreferrer">
      <Twitter color="twitter-blue" />
    </a>
    <a href={linkedinLink} className="social-share-item" target="_blank" rel="noopener noreferrer">
      <LinkedIn color="linkedin-blue" />
    </a>
  </div>
)

SocialShare.propTypes = {
  facebookLink: PropTypes.string.isRequired,
  linkedinLink: PropTypes.string.isRequired,
  twitterLink: PropTypes.string.isRequired,
}

export default SocialShare
