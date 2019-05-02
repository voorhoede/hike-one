import React from 'react'

const filter = ({filter, onFilter}) => {
  const isFilterVisuallyActive = filter.every(item => item.isActive)

    return (
    <ul className='filter container'>
      { filter.map((item, index) => {
        const activeClass = (item.isActive && !isFilterVisuallyActive) ? 'filter-item-button--active' : ''
        return (
          <li className='filter-item' key={index}>
              <button
                className={`filter-item-button ${activeClass}`}
                onClick={() => {
                  onFilter(filter, index, (item.isActive && !isFilterVisuallyActive))
                }}
              >
                {item.value}
              </button>
          </li>
        )
      })}
    </ul>
  )
}

export default filter
