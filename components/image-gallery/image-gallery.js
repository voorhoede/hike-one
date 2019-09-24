import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ButtonClean, FullWidthImage } from '../'

class ImageGallery extends Component {
  constructor(props) {
    super(props)
    this.setActiveIndex = this.setActiveIndex.bind(this)
    this.state = {
      activeIndex: 0,
    }
  }

  setActiveIndex(index) {
    this.setState({ activeIndex: index })
  }

  render() {
    const { items, title } = this.props
    const { activeIndex } = this.state

    return (
      <div className="image-gallery">
        {items.map((item, index) => (
          <div
            key={index}
            className={`image-gallery-img ${activeIndex === index ? 'is-active' : ''}`}>
            {activeIndex === index && (
              <FullWidthImage index={index} image={item.url} overlay={true} staticImg={true} />
            )}
          </div>
        ))}
        <div className="image-gallery-navigation">
          {title && <h2 className="image-gallery-title">{title}</h2>}
          {items.map((item, index) => (
            <ButtonClean
              key={index}
              onClick={() => this.setActiveIndex(index)}
              classes={`image-gallery-btn ${activeIndex === index ? 'is-active' : ''}`}>
              {item.title}
            </ButtonClean>
          ))}
        </div>
      </div>
    )
  }
}

ImageGallery.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
}

export default ImageGallery
