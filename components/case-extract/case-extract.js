import React from 'react'
import Icon from '../icon/icon'
import ButtonSecondaryLink from '../buttons/button-secondary/button-secondary-link'
import Link from 'next/link'
import setImageParameters from '../_helpers/setImageParameters'

const CaseExtract = ({
  headerImage,
  title = '',
  subtitle = '',
  slug = '',
  companyName = '',
  color = '',
}) => {
  const headerImageSmall = setImageParameters(headerImage, { w: 600, q: 85, fm: 'pjpg' })
  const headerImageLarge = setImageParameters(headerImage, { w: 1200, q: 85, fm: 'pjpg' })

  const style = {
    __html: `<style>
        .case-extract-image-container {
          background-image: url(${headerImageSmall})
        }
      @media only screen and (min-width: 768px) {
        .case-extract-image-container {
          background-image: url(${headerImageLarge})
        }
      }
    </style>`,
  }

  return (
    <section className="case-extract container">
      <div dangerouslySetInnerHTML={style} />
      <Link href={`/case?slug=${slug}`} as={`/case/${slug}`} prefetch>
        <a>
          <div className="case-extract-inner clearfix">
            <div className="case-extract-image-container" />
            <div
              className="case-extract-text-container shadow"
              style={{ backgroundColor: `${color}` }}>
              <span>{companyName}</span>
              <h3>{title}</h3>
              <h4>{subtitle}</h4>
              <div className="case-extract-button-container">
                <span className="case-extract-button">
                  <Icon icon="arrowRightCircle" />
                </span>
              </div>
            </div>
          </div>
        </a>
      </Link>

      <div className="case-extract-link-container">
        <ButtonSecondaryLink
          href="/work"
          classes="case-extract-link btn-red-border"
          icon="arrowRight">
          Explore all work
        </ButtonSecondaryLink>
      </div>
    </section>
  )
}

export default CaseExtract
