import React from 'react'
import getDateFormat from '../_helpers/getDateFormat'
import setImageParams from '../_helpers/setImageParameters'
import ArrowRightExternalLink from '../icons/arrow-right-external-link'
import Authors from '../authors/authors'

const UpdateExtractLarge = ({index, title='', date='', image='', color='', target='', category='update', authors=[], external=false}) => {
  const imageParameters = { fit: 'crop', fm: 'pjpg', q: 85 }

  const style ={__html:
    `<style>
      .update-extract-large-image-${index} {
        background-image: url("${setImageParams(image, { ...imageParameters, w: 550, h:200 })}")
      }

      @media only screen and (min-width: 768px) {
        .update-extract-large-image-${index} {
          background-image: url("${setImageParams(image, { ...imageParameters, w: 600, h:500 })}")
        }
      }

      @media only screen and (min-width: 1024px) {
        .update-extract-large-image-${index} {
          background-image: url("${setImageParams(image, { ...imageParameters, w: 700, h:500 })}")
        }
      }
    </style>`}

  return (
    <a href={target} target={external ? '_blank' : ''} className="update-extract-large">
      <div dangerouslySetInnerHTML={style}></div>
      <div className={`update-extract-large-image-${index} update-extract-large-image`}></div>
      <div className="update-extract-large-text" style={{backgroundColor: color}}>
        <div className="update-extract-large-type" style={{color: color}}>
          {category}
          {external && <span className="external-link-icon"><ArrowRightExternalLink fill={color} /></span>}
        </div>
        <h2 className="update-extract-large-title">{title}</h2>
        <span className="update-extract-large-subtitle" style={{backgroundColor: color}}>
          <Authors authors={authors} /> - {`${getDateFormat(date)}`}
        </span>
      </div>
    </a>
  )
}

export default UpdateExtractLarge
