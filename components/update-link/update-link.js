import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { ArrowRightCircle, Authors } from '../'

const UpdateLink = ({
  authors = [],
  date = '',
  href = '#',
  target = false,
  title = '',
  topic = false,
}) => (
  <div className="update-link">
    <Link href={target ? href : `/${topic ? 'topic' : 'update'}/${href}`} prefetch={target ? false : null}>
      <a className="update-link-title" target={target ? '_blank' : '_self'} rel={target ? 'noopener noreferrer' : null}>
        {title}
        <ArrowRightCircle />
      </a>
    </Link>
    <p className="update-link-sub">
      <span>{date}</span> | <Authors authors={authors} />
    </p>
  </div>
)

UpdateLink.propTypes = {
  authors: PropTypes.array,
  date: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  title: PropTypes.string,
  topic: PropTypes.bool,
}

export default UpdateLink
