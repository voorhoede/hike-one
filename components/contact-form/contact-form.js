import ButtonPrimary from '../buttons/button-primary/button-primary'
import ButtonClean from '../buttons/button-clean/button-clean'

class ContactForm extends React.Component {
	constructor(props) {
    super(props);
    
    this.state = { 
      isCollapsed: true,
      selectedItem: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
	}

  toggleDropdown() {
    const { isCollapsed } = this.state;
		this.setState({ isCollapsed: !isCollapsed });
  }

	handleClick(item) {
    this.setState({ selectedItem: item });
    this.toggleDropdown()
	}

	render() {
		const { formTitle, dropwDownTitle, dropdownArray } = this.props;
    const { isCollapsed, selectedItem } = this.state;
    const { toggleDropdown, handleClick } = this;
		// const hideItem = isCollapsed ? 'hide': 'show';
		// const mustReadShortFade = isCollapsed ? 'must-read-short-fade' : ' ';
		// const buttonIcon = isCollapsed ? 'arrowDown' : 'arrowUp'
		const activeButtonClass = !isCollapsed ? 'active' : ''
		
		return (
			<div className="contact-form">
        <div className="select-dropdown">
          <h2 className="input-label form-title">{formTitle}</h2>
          <div className="dropdown-header">
            <ButtonClean classes={`select-btn vertical-spring ${activeButtonClass}`} icon="arrowDown" onClick={toggleDropdown}>
            {selectedItem || dropwDownTitle}
            </ButtonClean>
          </div>
          
          { !isCollapsed && 
            <ul className="dropdown-list">
            { dropdownArray.map((item, index) => (
              <li className="list-item" key={index}>
                <ButtonClean classes="select-item" onClick={() => handleClick(item)}>{item}</ButtonClean>
              </li>
            ))}
            </ul>}
        </div>
      </div>
		);
	}
}

export default ContactForm;
