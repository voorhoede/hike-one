import React from 'react'
import PropTypes from 'prop-types'
import { Authors, ArrowRightExternalLink } from '../'
import getDateFormat from '../_helpers/getDateFormat'
import setImageParams from '../_helpers/setImageParameters'

const UpdateExtractSmall = ({
  classes = '',
  title = '',
  date = '',
  authors = [],
  image = '',
  color = '',
  href = '',
  index,
  category = 'update',
  target = false,
}) => {
  const imageParameters = { fit: 'crop', fm: 'pjpg', q: 85 }
  const style = {
    __html: `<style>
      .update-extract-small-image-${index} {
        background-image: url("${setImageParams(image, { ...imageParameters, w: 550, h: 200 })}");
      }
      @media only screen and (min-width: 768px) {
        .update-extract-small-image-${index} {
          background-image: url("${setImageParams(image, { ...imageParameters, w: 470, h: 332 })}");
        }
      }
      @media only screen and (min-width: 1024px) {
        .update-extract-small-image-${index} {
          background-image: url("${setImageParams(image, { ...imageParameters, w: 337, h: 366 })}");
        }
      }
    </style>`,
  }

  return (
    <a
      href={href}
      target={target ? '_blank' : '_self'}
      className={`update-extract-small ${classes}`}>
      <div dangerouslySetInnerHTML={style} />
      <div className={`update-extract-small-image-${index} update-extract-small-image`} />
      <div className="update-extract-small-text" style={{ backgroundColor: color }}>
        <div className="update-extract-small-type" style={{ color: color }}>
          {category}
          {external && (
            <span className="external-link-icon">
              <ArrowRightExternalLink fill={color} />
            </span>
          )}
        </div>
        <h2 className="update-extract-small-title">{title}</h2>
        <span className="update-extract-small-subtitle" style={{ backgroundColor: color }}>
          <Authors authors={authors} /> - {`${getDateFormat(date)}`}
        </span>
      </div>
    </a>
  )
}

UpdateExtractSmall.propTypes = {
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

export default UpdateExtractSmall
