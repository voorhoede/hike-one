import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { ArrowRightCircle, Authors } from '../'

const UpdateLink = ({ target = '#', title = '', authors = [], date = '', external = false }) => (
  <div className="update-link">
    <Link href={target}>
      <a className="update-link-title" target={external ? '_blank' : ''} rel="noopener noreferrer">
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
  target: PropTypes.string,
  title: PropTypes.string,
  authors: PropTypes.array,
  date: PropTypes.string,
  external: PropTypes.bool,
}

export default UpdateLink
