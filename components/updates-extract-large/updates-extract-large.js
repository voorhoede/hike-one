import React from 'react'
import PropTypes from 'prop-types'
import { MustRead, UpdateExtractLarge } from '../'

const UpdatesExtractLarge = ({ highlights = [], mustRead = [] }) => (
  <div className="updates-highlights">
    <div className="updates-extract-large">
      {highlights.map((item, index) => (
        <UpdateExtractLarge
          key={index}
          index={index}
          authors={item.authors}
          category={item.category.name}
          color={item.themeColor.hex}
          date={item.createdAt}
          href={item.externalLink ? item.externalLink : item.slug}
          image={item.image.url}
          target={item.externalLink ? true : false}
          topic={item.topic}
          title={item.title}
        />
      ))}
    </div>
    <MustRead mustRead={mustRead} />
  </div>
)

UpdatesExtractLarge.propTypes = {
  highlights: PropTypes.array,
  mustRead: PropTypes.array,
}

export default UpdatesExtractLarge
