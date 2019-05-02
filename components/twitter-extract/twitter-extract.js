import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon/icon'

const TwitterExtract = ({
  twitterImage,
  subtitle,
  title,
  date,
  linkTwitterAccount,
  linkTwitterPost,
}) => (
  <div className="twitter-extract">
    <div className={`twitter-extract-image ${twitterImage ? '' : 'is-hidden'}`}>
      <a href={linkTwitterPost}>
        <img src={twitterImage} alt="" />
      </a>
    </div>
    <div className={`twitter-extract-text ${twitterImage ? '' : 'twitter-extract-full-width'}`}>
      <div className={`twitter-extract-triangle ${twitterImage ? '' : 'is-hidden'}`} />
      <a href={linkTwitterAccount}>
        <h4 className="twitter-extract-subtitle">{subtitle}</h4>
      </a>
      <a href={linkTwitterPost}>
        <h3 className="twitter-extract-title">{title}</h3>
      </a>
      <span className="twitter-extract-date">{date}</span>
      <a href={linkTwitterAccount}>
        <Icon icon="twitter" />
      </a>
    </div>
  </div>
)

TwitterExtract.propTypes = {
  twitterImage: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  linkTwitterAccount: PropTypes.string.isRequired,
  linkTwitterPost: PropTypes.string.isRequired,
}

export default TwitterExtract
