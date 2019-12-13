import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Authors, ArrowRightExternalLink } from '../'
import getDateFormat from '../_helpers/getDateFormat'
import setImageParams from '../_helpers/setImageParameters'

const UpdateExtractLarge = ({
  authors = [],
  category = 'update',
  color = '',
  date = '',
  link = '',
  slug = '',
  image = '',
  index,
  target = false,
  title = '',
  topic = false,
}) => {
  const prefix = topic ? 'topic' : 'update'
  const style = {
    __html: `<style>
      .update-extract-large-image-${index} {
        background-image: url('${setImageParams(image, { fit: 'crop', crop: 'faces', w: 550, h: 200 })}');
      }
      @media (min-width: 768px) {
        .update-extract-large-image-${index} {
          background-image: url('${setImageParams(image, { fit: 'crop', crop: 'faces', w: 600, h: 500 })}');
        }
      }
      @media (min-width: 1024px) {
        .update-extract-large-image-${index} {
          background-image: url('${setImageParams(image, { fit: 'crop', crop: 'faces', w: 700, h: 500 })}');
        }
      }
    </style>`,
  }

  return (
    <Link href={link ? link : `/update?slug=${slug}`} as={link ? link : `/${prefix}/${slug}`} prefetch={target ? false : null}>
      <a
        className="update-extract-large"
        target={target ? '_blank' : null}
        rel={target ? 'noopener noreferrer' : null}>
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
    </Link>
  )
}

UpdateExtractLarge.propTypes = {
  authors: PropTypes.array,
  category: PropTypes.string,
  color: PropTypes.string,
  date: PropTypes.string,
  link: PropTypes.string,
  slug: PropTypes.string,
  image: PropTypes.string,
  index: PropTypes.number,
  target: PropTypes.bool,
  title: PropTypes.string,
  topic: PropTypes.bool,
}

export default UpdateExtractLarge
