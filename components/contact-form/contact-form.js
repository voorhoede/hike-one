import ButtonPrimary from '../buttons/button-primary/button-primary'
import ButtonClean from '../buttons/button-clean/button-clean'
import SelectDropdown from '../select-dropdown/select-dropdown';

class ContactForm extends React.Component {
	constructor(props) {
    super(props);
    
    this.state = { 
      isCollapsed: true,
      selectedItem: '',
      name: '',
      company: '',
      email: '',
      phoneNumber: null,
      message: '',

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
  
  handleChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value
    })
  }

	render() {
		const { dropDownOptions } = this.props;
    const { isCollapsed, selectedItem, name, company, email, phoneNumber, message } = this.state;
    const { toggleDropdown, handleClick } = this;
		const activeButtonClass = !isCollapsed ? 'active' : ''
		
		return (
			<div className="contact-form container">
        <SelectDropdown dropDownOptions={dropDownOptions} />
        
        <form className="form" onSubmit={this.handleSubmit}>

          <label className="label" htmlFor="name">My name is</label>
          <input type="text" id="name" className="input" name="name" value={name} onChange={this.handleChange} autoFocus="true" />
          
          <label className="label" htmlFor="email">My email is</label>
          <input type="email" id="email" className="input" name="email" value={email} onChange={this.handleChange} />
          
          <label className="label" htmlFor="message">My message is</label>
          <textarea id="message" className="input textarea" name="message" value={message} onChange={this.handleChange} />

          <ButtonPrimary onClick={this.handleSubmit} classes="submit-btn">Send</ButtonPrimary>
        </form>
      </div>
		);
	}
}

export default ContactForm;
