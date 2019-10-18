import React from 'react'
import PropTypes from 'prop-types'
import { ButtonSecondaryLink } from '../'
import setImageParams from '../_helpers/setImageParameters'

const VacancyCard = ({ data = {} }) => {
  const style = {
    __html: `<style>
      .vacancy-card-image {
        background-image: url('${setImageParams(data.image.url, { fit: 'crop', w: 450, h: 200 })}');
      }
      @media (min-width: 768px) {
        .vacancy-card-image {
          background-image: url('${setImageParams(data.image.url, { fit: 'crop', w: 400, h: 339 })}');
        }
      }
      @media (min-width: 1024px) {
        .vacancy-card-image {
          background-image: url('${setImageParams(data.image.url, { fit: 'crop', w: 450, h: 360 })}');
        }
      }
    </style>`,
  }

  return (
    <div className="container">
      <div className="vacancy-card container-inner">
        <div className="vacancy-card-image"></div>
        <div className="vacancy-card-content">
          <h2 className="vacancy-card-title">{data.title}</h2>
          <p className="vacancy-card-tagline">{data.content}</p>
          <ButtonSecondaryLink
            href={data.callToActionUrl}
            target="_blank"
            classes="vacancies-btn"
            icon="arrowRight"
            prefetch={false}>
            {data.callToActionTitle}
          </ButtonSecondaryLink>
        </div>
      </div>
      <div dangerouslySetInnerHTML={style} />
    </div>
  )
}

VacancyCard.propTypes = {
  data: PropTypes.object,
}

export default VacancyCard
