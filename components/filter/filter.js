import React from 'react'
import PropTypes from 'prop-types'

const Filter = ({ filter = [], onFilter = null }) => {
  const isFilterVisuallyActive = filter.every(item => item.isActive)

  return (
    <ul className="filter container">
      {filter.map((item, index) => {
        const activeClass = item.isActive && !isFilterVisuallyActive ? 'filter-item-button--active' : ''
        return (
          <li className="filter-item" key={index}>
            <button
              className={`filter-item-button ${activeClass}`}
              onClick={() => {
                onFilter(filter, index, item.isActive && !isFilterVisuallyActive)
              }}>
              {item.value}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

Filter.propTypes = {
  filter: PropTypes.array,
  onFilter: PropTypes.func,
}

export default Filter
