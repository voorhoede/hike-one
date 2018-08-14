import ButtonClean from '../buttons/button-clean/button-clean'

class SelectDropdown extends React.Component {
	constructor(props) {
    super(props)
    
    this.state = { 
      isCollapsed: true,
    }
	}

  toggleDropdown = () => {
    const { isCollapsed } = this.state;
		this.setState({ isCollapsed: !isCollapsed })
  }

	handleClick = (item) => {
    this.toggleDropdown()
    
    this.props.handleClick(item)
	}

	render() {
    const { formTitle, dropwDownTitle, forms } = this.props.dropDownOptions
    const { selectedItem } = this.props
    const { isCollapsed } = this.state
    const { toggleDropdown, handleClick } = this
		const activeButtonClass = !isCollapsed ? 'active' : ''
		
		return (
      <div className="select-dropdown">
        <h2 className="input-label form-title">{formTitle}</h2>
        <div className="dropdown-header">
          <ButtonClean classes={`select-btn ${activeButtonClass}`} icon="arrowDown" onClick={toggleDropdown}>
          {selectedItem || dropwDownTitle}
          </ButtonClean>
        </div>
        
        { !isCollapsed && 
          <ul className="dropdown-list">
          { forms.map((item, index) => (
            <li className="list-item" key={index}>
              <ButtonClean classes="select-item" onClick={() => handleClick(item)}>{item.label}</ButtonClean>
            </li>
          ))}
          </ul>}
      </div>
		);
	}
}

export default SelectDropdown;
