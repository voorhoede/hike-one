import React from 'react'
import PropTypes from 'prop-types'

const RichBodyText = ({ content = '', textCenter }) => (
  <div className={`rich-body-text ${textCenter ? 'text-center' : ''}`}
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

RichBodyText.propTypes = {
  content: PropTypes.string.isRequired,
  textCenter: PropTypes.bool.isRequired,
}

export default RichBodyText
