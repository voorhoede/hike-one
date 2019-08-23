import React from 'react'
import PropTypes from 'prop-types'
import { Authors, ArrowRightExternalLink } from '../'
import getDateFormat from '../_helpers/getDateFormat'
import setImageParams from '../_helpers/setImageParameters'

const UpdateExtractLarge = ({
  index,
  title = '',
  date = '',
  image = '',
  color = '',
  href = '',
  category = 'update',
  authors = [],
  target = false,
}) => {
  const imageParameters = { fit: 'crop', fm: 'pjpg', q: 85 }
  const style = {
    __html: `<style>
      .update-extract-large-image-${index} {
        background-image: url('${setImageParams(image, { ...imageParameters, w: 550, h: 200 })}');
      }
      @media (min-width: 768px) {
        .update-extract-large-image-${index} {
          background-image: url('${setImageParams(image, { ...imageParameters, w: 600, h: 500 })}');
        }
      }
      @media (min-width: 1024px) {
        .update-extract-large-image-${index} {
          background-image: url('${setImageParams(image, { ...imageParameters, w: 700, h: 500 })}');
        }
      }
    </style>`,
  }

  return (
    <a href={href} target={target ? '_blank' : '_self'} rel="noopener noreferrer" className="update-extract-large">
      <div dangerouslySetInnerHTML={style} />
      <div className={`update-extract-large-image-${index} update-extract-large-image`} />
      <div className="update-extract-large-text" style={{ backgroundColor: color }}>
        <div className="update-extract-large-type" style={{ color: color }}>
          {category}
          {target && (
            <span className="external-link-icon">
              <ArrowRightExternalLink fill={color} />
            </span>
          )}
        </div>
        <h2 className="update-extract-large-title">{title}</h2>
        <span className="update-extract-large-subtitle" style={{ backgroundColor: color }}>
          <Authors authors={authors} /> - {getDateFormat(date)}
        </span>
      </div>
    </a>
  )
}

UpdateExtractLarge.propTypes = {
  classes: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  authors: PropTypes.array,
  image: PropTypes.string,
  color: PropTypes.string,
  href: PropTypes.string,
  index: PropTypes.number,
  category: PropTypes.string,
  target: PropTypes.bool,
}

export default UpdateExtractLarge
