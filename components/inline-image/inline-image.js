import React, { Component } from 'react'
import PropTypes from 'prop-types'
import lazyLoad from '../_helpers/lazyLoad'
import setImageParams from '../_helpers/setImageParameters'

class InlineImage extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const options = {
      threshold: 0.3,
    }

    lazyLoad(this.element, options)
  }

  ratio() {
    const { width, height } = this.props
    const maxRatio = 1.3
    const videoHeight = Math.min(width * maxRatio, height)

    return (videoHeight / width) * 100
  }

  render() {
    const { url = '' } = this.props
    const imageRatio = this.ratio()

    return (
      <div className="inline-image" style={{ paddingBottom: `${imageRatio}%` }}>
         <img
          ref={node => (this.element = node)}
          className="image"
          sizes={`
            (max-width: 320px) calc(100vw - 30px),
            (max-width: 768px) calc(100vw - 30px),
            (max-width: 1024px) 790px,
            821px"`}
          alt=""
          srcSet={`
            ${setImageParams(url, { fit: 'max', w: 800, h: 600 })} 768w,
            ${setImageParams(url, { fit: 'max', w: 900, h: 768 })} 1024w,
            ${setImageParams(url, { fit: 'max', w: 1000, h: 850 })} 1190w,
            ${setImageParams(url, { fit: 'max', w: 1200, h: 950 })} 1440w
          `}
          data-lazy-src={url}
        />
      </div>
    )
  }
}

InlineImage.propTypes = {
  url: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

export default InlineImage
