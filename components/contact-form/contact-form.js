import ButtonPrimary from '../buttons/button-primary/button-primary'
import ButtonClean from '../buttons/button-clean/button-clean'
import SelectDropdown from '../select-dropdown/select-dropdown';

class ContactForm extends React.Component {
	constructor(props) {
    super(props);
    
    this.state = { 
      selectedItem: '',
      name: '',
      company: '',
      email: '',
      phoneNumber: null,
      message: '',
      messageError: null,
      nameError: null,
      emailError: null,
      isFormVisible: false,
      isExtraFormVisible: false,
      isJobCardVisible: false,
    };

    this.handleClick = this.handleClick.bind(this);
	}

	handleClick({ label, formType }) {
    this.setState({ selectedItem: label });
    this.resetFormVisibility()
    
    if (formType === 'personal') {
      this.setState({ isFormVisible: true })
    }

    if (formType === 'company') {
      this.setState({
        isFormVisible: true,
        isExtraFormVisible: true,
      })
    }

    if (formType === 'job-application') {
      this.setState({
        isJobCardVisible: true,
      })
    }
  }

  resetFormVisibility = () => {
    this.setState({
      isFormVisible: false,
      isJobCardVisible: false,
      isExtraFormVisible: false,
    })
  }
  
  handleChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value
    })
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    })

    this.validateEmail()
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { name, email, message } = this.state

    const userEmail = {
      name,
      email,
      message
    }

    console.log(userEmail)
  }

	render() {
		const { dropDownOptions } = this.props;
    const { selectedItem, name, company, email, phoneNumber, message, nameError, emailError, messageError, isFormVisible, isJobCardVisible, isExtraFormVisible } = this.state;
    const { handleClick, handleChange, handleEmailChange, handleSubmit } = this
		
		return (
			<div className="contact-form container">
        <SelectDropdown dropDownOptions={dropDownOptions} handleClick={handleClick} selectedItem={selectedItem} />
        
        { isFormVisible && 
        <div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-field">
              <label className="label" htmlFor="name">My name is</label>
              <input type="text" id="name" className="input" name="name" value={name} onChange={handleChange} autoFocus="true" />
              <span className="input-error">{nameError}</span>
            </div>
            
            <div className="input-field">
              <label className="label" htmlFor="email">My email is</label>
              <input type="email" id="email" className="input" name="email" value={email} onChange={handleChange} />
              <span className="input-error">{emailError}</span>
            </div>

            { isExtraFormVisible &&
            <div class="extra-input-fields">
              <div className="input-field">
                <label className="label" htmlFor="phone-number">My phone number is</label>
                <input type="tel" id="phone-number" className="input" name="phone-number" value={phoneNumber} onChange={handleChange} />
              </div>
              
              <div className="input-field">
                <label className="label" htmlFor="company">My company is</label>
                <input type="text" id="company" className="input" name="company" value={company} onChange={handleChange} />
              </div>
            </div>}

            <div className="input-field message-input">
              <label className="label" htmlFor="message">My message is</label>
              <textarea id="message" className="input textarea" name="message" value={message} onChange={handleChange} />
            </div>
          </form>

          <ButtonPrimary onClick={handleSubmit} classes="submit-btn">Send</ButtonPrimary>
        </div>}
        { isJobCardVisible && 
          <div>To do...</div>
        }
      </div>
		);
	}
}

export default ContactForm;
