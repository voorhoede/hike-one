import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Authors, ButtonSecondary } from '../'

class MustRead extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      isCollapsed: true
    }
  }

  handleClick() {
    const { isCollapsed } = this.state
    this.setState({ isCollapsed: !isCollapsed })
  }

  render() {
    const { items } = this.props
    const { isCollapsed } = this.state
    const buttonText = isCollapsed ? 'Show more' : 'Show less'
    const state = isCollapsed ? 'hide' : 'show'
    const mustReadShortFade = isCollapsed ? 'must-read-short-fade' : ' '
    const buttonIcon = isCollapsed ? 'arrowDown' : 'arrowUp'
    const buttonClass = isCollapsed ? 'arrow-down' : 'arrow-up'

    return (
      <div className="must-read">
        <h1 className="must-read-title">Must read</h1>
        {items.map((item, index) => (
          <MustReadItem
            key={index}
            index={index}
            authors={item.authors}
            state={state}
            link={item.externalLink}
            slug={item.slug}
            title={item.title}
          />
        ))}
        <div className={mustReadShortFade} />
        <ButtonSecondary
          onClick={this.handleClick}
          classes={`must-read-toggle btn-red-border vertical-spring ${buttonClass}`}
          icon={buttonIcon}>
          {buttonText}
        </ButtonSecondary>
      </div>
    )
  }
}

const MustReadItem = ({ authors, index, link, slug, state, title, topic }) => {
  const prefix = topic ? 'topic' : 'update'

  return (
    <Link
      href={link ? link : `/update?slug=${slug}`}
      as={link ? link : `/${prefix}/${slug}`}
      prefetch={link ? false : null}>
      <a className={`must-read-item must-read-item-${index} ${state}`} target={link ? '_blank' : null}>
        <h2 className="must-read-item-index">{index + 1}</h2>
        <div>
          <h1 className="must-read-item-title">{title}</h1>
          <h3 className="must-read-item-author">
            <Authors authors={authors} />
          </h3>
        </div>
      </a>
    </Link>
  )
}

MustReadItem.propTypes = {
  authors: PropTypes.array,
  index: PropTypes.number,
  link: PropTypes.string,
  slug: PropTypes.string,
  state: PropTypes.string,
  title: PropTypes.string,
  topic: PropTypes.bool,
}

MustRead.propTypes = {
  items: PropTypes.array,
}

export default MustRead
