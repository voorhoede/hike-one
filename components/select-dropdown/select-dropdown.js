import React from 'react'
import PropTypes from 'prop-types'
import { ButtonClean } from '../'

class SelectDropdown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isCollapsed: true,
    }
  }

  toggleDropdown = () => {
    const { isCollapsed } = this.state
    this.setState({ isCollapsed: !isCollapsed })
  }

  handleClick = (id, title) => {
    this.toggleDropdown()
    this.props.handleClick(id, title)
  }

  render() {
    const { selectedItem, label, options } = this.props
    const { isCollapsed } = this.state
    const activeButtonClass = !isCollapsed ? 'active' : ''

    return (
      <div className="select-dropdown">
        <div className="dropdown-header">
          <ButtonClean
            classes={`select-btn ${activeButtonClass}`}
            icon="arrowDown"
            onClick={this.toggleDropdown}>
            {selectedItem || label}
          </ButtonClean>
        </div>

        {!isCollapsed && (
          <ul className="dropdown-list">
            {options.map(option => (
              <li className="list-item" key={option.id}>
                <ButtonClean
                  classes="select-item"
                  onClick={() => this.handleClick(option.id, option.title)}>
                  {option.title}
                </ButtonClean>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

SelectDropdown.propTypes = {
  selectedItem: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default SelectDropdown
