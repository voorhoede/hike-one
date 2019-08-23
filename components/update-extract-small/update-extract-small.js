import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Authors, ArrowRightExternalLink } from '../'
import getDateFormat from '../_helpers/getDateFormat'
import setImageParams from '../_helpers/setImageParameters'

const UpdateExtractSmall = ({
  authors = [],
  category = 'update',
  color = '',
  date = '',
  href = '',
  image = '',
  index,
  target = false,
  title = '',
}) => {
  const url = target ? href : `/update/${href}`
  const imageParameters = { fit: 'crop', fm: 'pjpg', q: 85 }
  const style = {
    __html: `<style>
      .update-extract-small-image-${index} {
        background-image: url('${setImageParams(image, { ...imageParameters, w: 550, h: 200 })}');
      }
      @media (min-width: 768px) {
        .update-extract-small-image-${index} {
          background-image: url('${setImageParams(image, { ...imageParameters, w: 470, h: 332 })}');
        }
      }
      @media (min-width: 1024px) {
        .update-extract-small-image-${index} {
          background-image: url('${setImageParams(image, { ...imageParameters, w: 337, h: 366 })}');
        }
      }
    </style>`,
  }

  return (
    <Link href={url} prefetch={target ? false : null}>
      <a
        className="update-extract-small"
        target={target ? '_blank' : '_self'}
        rel={target ? 'noopener noreferrer' : null}>
        <div dangerouslySetInnerHTML={style} />
        <div className={`update-extract-small-image-${index} update-extract-small-image`} />
        <div className="update-extract-small-text" style={{ backgroundColor: color }}>
          <div className="update-extract-small-type" style={{ color: color }}>
            {category}
            {target && (
              <span className="external-link-icon">
                <ArrowRightExternalLink fill={color} />
              </span>
            )}
          </div>
          <h2 className="update-extract-small-title">{title}</h2>
          <span className="update-extract-small-subtitle" style={{ backgroundColor: color }}>
            <Authors authors={authors} /> - {getDateFormat(date)}
          </span>
        </div>
      </a>
    </Link>
  )
}

UpdateExtractSmall.propTypes = {
  authors: PropTypes.array,
  category: PropTypes.string,
  color: PropTypes.string,
  date: PropTypes.string,
  href: PropTypes.string,
  image: PropTypes.string,
  index: PropTypes.number,
  target: PropTypes.bool,
  title: PropTypes.string,
}

export default UpdateExtractSmall
