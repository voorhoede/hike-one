import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { ButtonSecondaryMock } from '../'

const ServiceItem = ({ item = {}, Component = null, onMouseOver = null, onMouseLeave = null }) => {
  const { button, iconColor, link, text, title } = item

  return (
    <div className="service-item">
      <div className="service-item__icon">
        <div className={`service-item__icon-square ${iconColor.color}`}></div>
        <Component />
      </div>
      <div className="service-item__content">
        { item.link && item.link.slug
          ? <Link href={`/service?slug=${link.slug}`} as={`/service/${link.slug}`}>
            <a id={link.slug} onMouseOver={() => onMouseOver(link.slug)} onMouseLeave={() => onMouseLeave(link.slug)}>
              <h3 className="service-item__content-title">{title}</h3>
            </a>
          </Link>
          : <h3 className="service-item__content-title">{title}</h3>
        }
        <p className="service-item__content-text">{text}</p>
        <ButtonSecondaryMock
          icon="arrowRight"
          classes="btn-red-border btn-wide">
          {button}
        </ButtonSecondaryMock>
      </div>
    </div>
  )
}

ServiceItem.propTypes = {
  item: PropTypes.object,
  Component: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseLeave: PropTypes.func,
}

export default ServiceItem
