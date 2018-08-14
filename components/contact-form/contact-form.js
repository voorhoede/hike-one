import ButtonPrimary from '../buttons/button-primary/button-primary'
import ButtonClean from '../buttons/button-clean/button-clean'
import SelectDropdown from '../select-dropdown/select-dropdown'
import Link from 'next/link'

class ContactForm extends React.Component {
	constructor(props) {
    super(props);
    
    this.state = { 
      selectedItem: '',
      itemType: '',
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
	}

	handleClick = ({ label, type }) => {
    this.setState({ selectedItem: label, itemType: type });
    this.resetFormVisibility()
    
    if (type === 'personal') {
      this.setState({ isFormVisible: true })
    }

    if (type === 'company') {
      this.setState({
        isFormVisible: true,
        isExtraFormVisible: true,
      })
    }

    if (type === 'job-application') {
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

    const { name, email, message, company, phoneNumber, itemType } = this.state

    const personalInfo = {
      name,
      email,
      message
    }

    const companyInfo = {
      company,
      phoneNumber
    }

    if (itemType === 'personal') {
      return console.log(personalInfo)
    }

    if (itemType === 'company') {
      return console.log({ ...personalInfo, ...companyInfo })
    }

    console.log('job applicant')
  }

  goToHomerun = () => {

  }

	render() {
		const { dropDownOptions, formTitle } = this.props;
    const { selectedItem, name, company, email, phoneNumber, message, nameError, emailError, messageError, isFormVisible, isJobCardVisible, isExtraFormVisible } = this.state;
    const { handleClick, handleChange, handleEmailChange, handleSubmit } = this
		
		return (
			<div className="contact-form container">
        <h2 className="label form-title">{formTitle}</h2>
        <SelectDropdown dropDownOptions={dropDownOptions} handleClick={handleClick} selectedItem={selectedItem} />
        
        { isFormVisible && 
        <div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-field">
              <label className="label" htmlFor="name">My name is</label>
              <input type="text" id="name" className="input" name="name" value={name} onChange={handleChange} autoFocus="true" required />
              <span className="input-error">{nameError}</span>
            </div>
            
            <div className="input-field">
              <label className="label" htmlFor="email">My email is</label>
              <input type="email" id="email" className="input" name="email" value={email} onChange={handleChange} required />
              <span className="input-error">{emailError}</span>
            </div>

            { isExtraFormVisible &&
            <div className="extra-input-fields">
              <div className="input-field">
                <label className="label" htmlFor="phone-number">My phone number is</label>
                <input type="tel" id="phone-number" className="input" name="phoneNumber" value={phoneNumber} onChange={handleChange} required />
              </div>
              
              <div className="input-field">
                <label className="label" htmlFor="company">My company is</label>
                <input type="text" id="company" className="input" name="company" value={company} onChange={handleChange} required />
              </div>
            </div>}

            <div className="input-field message-input">
              <label className="label" htmlFor="message">My message is</label>
              <textarea id="message" className="input textarea" name="message" value={message} onChange={handleChange} required />
            </div>
          </form>

          <ButtonPrimary onClick={handleSubmit} classes="submit-btn">Send</ButtonPrimary>
        </div>}
        { isJobCardVisible && 
        <div>To do...
          <Link href="/join-the-team">
            <ButtonPrimary>Join the team!</ButtonPrimary>
          </Link>
        </div>
        }
      </div>
		);
	}
}

export default ContactForm;
