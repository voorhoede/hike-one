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
          title={item.title}
          date={item.createdAt}
          image={item.image.url}
          color={item.themeColor.hex}
          category={item.category.name}
          authors={item.authors}
          href={item.link}
          target={item.isExternalLink}
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
