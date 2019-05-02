import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const CompanyOverviewItemSmall = ({
  companyLogo = '',
  referenceCaseLink = '',
  referenceSlug = '',
  text = '',
}) => (
  <div className={`company-item-small`}>
    <div className="company-item-small-image-container">
      <img src={companyLogo} alt="" />
    </div>
    {referenceCaseLink ? (
      <Link href={`/case?slug=${referenceSlug}`} as={`/case/${referenceSlug}`}>
        <a className="company-item-small-subtitle">{text}</a>
      </Link>
    ) : (
      <p className="company-item-small-subtitle">{text}</p>
    )}
  </div>
)

CompanyOverviewItemSmall.propTypes = {
  companyLogo: PropTypes.string.isRequired,
  referenceCaseLink: PropTypes.string.isRequired,
  referenceSlug: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default CompanyOverviewItemSmall
