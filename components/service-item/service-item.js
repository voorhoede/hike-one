import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { ButtonSecondaryMock } from '..'

const ServiceItem = ({ item = {}, Component = null }) => {
  const hasLink = item.link && item.link.slug

  return hasLink
    ? <WithLink {...item} Component={Component} />
    : <Item {...item} Component={Component} />
}

ServiceItem.propTypes = {
  item: PropTypes.object,
  Component: PropTypes.func,
}

const WithLink = ({
  button = '',
  iconColor = '',
  link = '',
  text = '',
  title = '',
  Component = null
}) => (
  <Link href={`/service?slug=${link.slug}`} as={`/service/${link.slug}`}>
    <a id={link.slug} className="service-item">
      <div className="service-item__icon">
        <div className={`service-item__icon-square ${iconColor.color}`}></div>
        <Component />
      </div>
      <div className="service-item__content">
        <h3 className="service-item__content-title">{title}</h3>
        <p className="service-item__content-text">{text}</p>
        <ButtonSecondaryMock
          icon="arrowRight"
          classes="btn-red-border btn-wide">
          {button}
        </ButtonSecondaryMock>
      </div>
    </a>
  </Link>
)

WithLink.propTypes = {
  button: PropTypes.string,
  iconColor: PropTypes.object,
  link: PropTypes.object,
  text: PropTypes.string,
  title: PropTypes.string,
  Component: PropTypes.func,
}

const Item = ({
  button = '',
  iconColor = '',
  text = '',
  title = '',
  Component = null
}) => (
  <div className="service-item">
    <div className="service-item__icon">
      <div className={`service-item__icon-square ${iconColor.color}`}></div>
      <Component />
    </div>
    <div className="service-item__content">
      <h3 className="service-item__content-title">{title}</h3>
      <p className="service-item__content-text">{text}</p>
      <ButtonSecondaryMock
        icon="arrowRight"
        classes="btn-red-border btn-wide">
        {button}
      </ButtonSecondaryMock>
    </div>
  </div>
)

Item.propTypes = {
  button: PropTypes.string,
  iconColor: PropTypes.object,
  text: PropTypes.string,
  title: PropTypes.string,
  Component: PropTypes.func,
}

export default ServiceItem
