import React from 'react'
import PropTypes from 'prop-types'
import setImageParams from '../_helpers/setImageParameters'

const LogoList = ({ companies = [] }) => (
  <ul className="logo-list list-no-style container">
    {companies.map((company, index) => (
      <li key={index}>
        {company.website ? (
          <a href={company.website} target="_blank" rel="noopener noreferrer">
            <LogoImage company={company} />
          </a>
        ) : (
          <LogoImage company={company} />
        )}
      </li>
    ))}
  </ul>
)

const LogoImage = ({ company }) => (
  <img
    src={`${setImageParams(company.logo.url, { fit: 'max', 'max-w': 250 })}`}
    alt={company.name} />
)

LogoImage.propTypes = {
  company: PropTypes.object,
}

LogoList.propTypes = {
  companies: PropTypes.array,
}

export default LogoList
