import React from 'react'
import PropTypes from 'prop-types'

const TextCenter = ({ classes = '', title = '', text = '', children }) => {
  const childrenArray = React.Children.toArray(children)
  let parallaxLayerFront = childrenArray.find(child => child.props.position === 'front')
  let parallaxLayerBack = childrenArray.find(child => child.props.position === 'back')

  return (
    <section className={`${classes} text-center container`}>
      {parallaxLayerBack}
      <div className="container-inner content">
        {title && <h2 className="text-center-title">{title}</h2>}
        <div className="text-center-text" dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      {parallaxLayerFront}
    </section>
  )
}

TextCenter.propTypes = {
  classes: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default TextCenter
