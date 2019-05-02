import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon/icon'

const ImageCompositionLarge = ({
  children,
  teamImage34,
  person1,
  person2,
  person3,
  listValues,
}) => {
  const childrenArray = React.Children.toArray(children)
  const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front')
  const parallaxLayerBack = childrenArray.find(child => child.props.position === 'back')

  return (
    <div className="image-composition-large">
      {parallaxLayerBack}
      <div className="image-composition-large-inner">
        <div className="image-composition-img-1 image-team">
          <img src={teamImage34.photo.url} className="image-team-img" />
          <span className="image-team-title">{teamImage34.title}</span>
        </div>
        <div className="image-composition-img-2 image-person">
          <div className="transition-img-hover">
            <img src={person1.photo.url} className="image-person-img" />
            <div className="image-person-text">
              <span className="image-person-title">{person1.name}</span>
              <span className="image-person-subtitle">{person1.role}</span>
            </div>
          </div>
        </div>
        <div className="image-composition-img-3 image-person">
          <div className="transition-img-hover">
            <img src={person2.photo.url} className="image-person-img" />
            <div className="image-person-text">
              <span className="image-person-title">{person2.name}</span>
              <span className="image-person-subtitle">{person2.role}</span>
            </div>
          </div>
        </div>
        <div className="image-composition-img-4 image-person">
          <div className="transition-img-hover">
            <img src={person3.photo.url} className="image-person-img" />
            <div className="image-person-text">
              <span className="image-person-title">{person3.name}</span>
              <span className="image-person-subtitle">{person3.role}</span>
            </div>
          </div>
        </div>
        <div className="image-composition-text">
          <h3 className="image-composition-text-title">{listValues.title}</h3>
          <ul className="image-composition-text-list">
            {listValues.values.map((item, index) => (
              <li key={index} className="image-composition-text-list-item">
                <span className="image-composition-text-list-icon">
                  <Icon icon="triangle" />
                </span>
                <span className="image-composition-text-list-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {parallaxLayerFront}
    </div>
  )
}

ImageCompositionLarge.propTypes = {
  children: PropTypes.node,
  teamImage34: PropTypes.object.isRequired,
  person1: PropTypes.object.isRequired,
  person2: PropTypes.object.isRequired,
  person3: PropTypes.object.isRequired,
  listValues: PropTypes.object.isRequired,
}

export default ImageCompositionLarge
