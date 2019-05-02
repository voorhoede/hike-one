import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon/icon'
import Link from 'next/link'

const BlogExtract = ({ blogImage, title, subtitle, date, link }) => (
  <Link href={link}>
    <a className="blog-extract">
      <div className="blog-extract-image-container">
        <img src={blogImage} alt="" />
      </div>

      <div className="blog-extract-text-container">
        <div className="blog-extract-triangle" />
        <h3>{subtitle}</h3>
        <h2>{title}</h2>
        <div className="blog-extract-footer-container">
          <span className="blog-extract-footer-date">{date}</span>
          <Icon icon="arrowRightCircle" classes="icon" />
        </div>
      </div>
    </a>
  </Link>
)

BlogExtract.propTypes = {
  blogImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default BlogExtract
