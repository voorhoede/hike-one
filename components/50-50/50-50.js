import React from 'react'
import PropTypes from 'prop-types'
import setImageParams from '../_helpers/setImageParameters'
import { InlineVideo } from '../'

const FiftyFifty = ({
  classes = '',
  image = {},
  title = '',
  text = '',
  children,
  imageLarge = false,
  contentLeft = false,
  video = null,
}) => {
  const childrenArray = React.Children.toArray(children)
  const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front')
  const parallaxLayerBack = childrenArray.find(child => child.props.position === 'back')
  const imageLargeClass = imageLarge ? 'fifty-fifty-image-large' : ''
  const contentPosClass = contentLeft ? 'fifty-fifty-content-left' : ''
  const imageFormat = image && image.format === 'gif' ? 'gif' : 'pjpg'
  const imageParameters = image && { fit: 'max', fm: imageFormat, q: 85 }
  const imageUrl = image && image.url

  return (
    <section className={`fifty-fifty clearfix container ${classes} ${imageLargeClass} ${contentPosClass}`}>
      {parallaxLayerBack}
      <div className="container-inner">
        <div className="fifty-fifty-media">
          {video && (
            <InlineVideo
              video={video}
              classes="content"
              autoplay={true}
              loop={true}
              mute={true}
              controls={false}
            />
          )}

          {image && !imageLarge && (
            <img
              className="content"
              srcSet={`
                ${setImageParams(imageUrl, { ...imageParameters, w: 250 })} 250w,
                ${setImageParams(imageUrl, { ...imageParameters, w: 500 })} 500w,
                ${setImageParams(imageUrl, { ...imageParameters, w: 630 })} 630w,
                ${setImageParams(imageUrl, { ...imageParameters, w: 750 })} 750w,
                ${setImageParams(imageUrl, { ...imageParameters, w: 1000 })} 1000w,
                ${setImageParams(imageUrl, { ...imageParameters, w: 1260 })} 1260w,
                ${setImageParams(imageUrl, { ...imageParameters, w: 1400 })} 1400w
              `}
              sizes="
                (max-width: 768px) calc(100vw - 30px),
                (max-width: 1024px) calc(50vw - 50px),
                (max-width: 1244px) calc(50vw - 30px),
                630px"
              src={`${setImageParams(imageUrl, { ...imageParameters, w: 750 })} 750w,`}
              alt=""
            />
          )}

          {image && imageLarge && (
            <img
              className="content"
              srcSet={`
                ${setImageParams(imageUrl, { ...imageParameters, w: 250 })} 250w,
                ${setImageParams(imageUrl, { ...imageParameters, w: 500 })} 500w,
                ${setImageParams(imageUrl, { ...imageParameters, w: 715 })} 715w,
                ${setImageParams(imageUrl, { ...imageParameters, w: 750 })} 750w,
                ${setImageParams(imageUrl, { ...imageParameters, w: 1000 })} 1000w,
                ${setImageParams(imageUrl, { ...imageParameters, w: 1200 })} 1200w,
                ${setImageParams(imageUrl, { ...imageParameters, w: 1430 })} 1430w
              `}
              sizes="
                (max-width: 768px) calc(100vw - 30px),
                (max-width: 1024px) calc(60vw - 50px),
                (max-width: 1244px) calc(60vw - 30px),
                715px"
              src={`${setImageParams(imageUrl, { ...imageParameters, w: 750 })}`}
              alt=""
            />
          )}
        </div>

        <div className="fifty-fifty-content">
          {title && <h2 className="fifty-fifty-title content">{title}</h2>}

          <div className="fifty-fifty-text content" dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </div>

      {parallaxLayerFront}
    </section>
  )
}

FiftyFifty.propTypes = {
  classes: PropTypes.node,
  image: PropTypes.object,
  title: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
  imageLarge: PropTypes.bool,
  contentLeft: PropTypes.bool,
  video: PropTypes.object,
}

export default FiftyFifty
