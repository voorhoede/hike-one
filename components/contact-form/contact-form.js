import ButtonPrimary from '../buttons/button-primary/button-primary'
import SelectDropdown from '../select-dropdown/select-dropdown'
import TextCenter from '../text-center/text-center'
import InputField from '../input-field/input-field'
import CallToAction from '../call-to-action/call-to-action'
import scrollToElement from '../_helpers/scrollToElement'

class ContactForm extends React.Component {
	constructor(props) {
    super(props);
    
    this.state = { 
      selectedItem: '',
      itemType: '',
      name: '',
      company: '',
      email: '',
      phoneNumber: '',
      message: '',
      validateMessage: false,
      isSent: false,
    };
  }

	handleClick = ({ label, type }) => {
    this.setState({ selectedItem: label, itemType: type });
  }
  
  handleChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value
    })
  }

  setMessageSubject = () => {
    const { name,company, itemType } = this.state

    const personalMessageSubject = `${name} would like to say hi` 
    
    const businessMessageSubject = (company.length > 0) ? 
    `${name} from ${company} would like to talk about a project together` : 
    `${name} would like to talk about a project together`

    return (itemType === 'personal') ? personalMessageSubject : businessMessageSubject
  }

  handleSubmit = () => {
    const { name, email, message, company, phoneNumber, itemType } = this.state
    const { personalEmailEndpoint, businessEmailEndpoint } = this.props

    const isEmailValid = /(.+)@(.+){2,}\.(.+){2,}/.test(email)
    const messageSubject = this.setMessageSubject()
    let sendFormDataTo = personalEmailEndpoint

    if ((name.length < 1) || !isEmailValid || (message.length < 2)) {
      return false
    }

    let formData = { _subject: messageSubject, name, email, message, }

    if (itemType === 'business') {
      formData = { ...formData, company, phoneNumber, }
      sendFormDataTo = businessEmailEndpoint
    }

    return fetch(`https://formspree.io/bruna@voorhoede.nl`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => {
      this.clearForm()
      this.setState({ isSent: true })
      scrollToElement('message-sent')
    })
  }

  shouldValidateMessage = () => {
    this.setState({ validateMessage: true })
  }

  clearForm = () => {
    this.setState({
      name: '',
      email: '',
      phoneNumber: '',
      company: '',
      message: '',
      validateMessage: false,
      selectedItem: '',
      itemType: '',
    })
  }

	render() {
		const { dropDownOptions, formTitle } = this.props;
    const { selectedItem, name, company, email, phoneNumber, message, validateMessage, itemType, isSent } = this.state;
    const { handleClick, handleChange, shouldValidateMessage, handleSubmit } = this
    const messageInputClass = validateMessage ? 'should-validate' : ''
    
    if (!isSent) {
      return (
        <div className='contact-form container'>
          <h2 className='form-title'>{formTitle}</h2>
          
          <SelectDropdown 
            dropDownOptions={dropDownOptions} 
            handleClick={handleClick} 
            selectedItem={selectedItem}
          />
          
          {(itemType === 'personal' || itemType === 'business') && 
          <div>
            <form className='form' onSubmit={handleSubmit}>
              <InputField
                name='name'
                label='My name is'
                type='text'
                onChange={handleChange}
                value={name}
              />

              { (itemType === 'business') &&
              <InputField
                name='company'
                label='My company is'
                type='text'
                onChange={handleChange}
                value={company}
              />
              }

              <InputField
                name='email'
                label='My email is'
                type='email'
                onChange={handleChange}
                value={email}
              />

              { (itemType === 'business') &&
              <InputField
                name='phoneNumber'
                label='My phone number is'
                type='tel'
                onChange={handleChange}
                value={phoneNumber}
              />
              }

          <div className='input-field message-input'>
            <label className='label' htmlFor='message'>My message is</label>
            
            <textarea 
              id='message'
              className={`input textarea ${messageInputClass}`}
              name='message'
              value={message}
              onChange={handleChange}
              required
              onBlur={shouldValidateMessage}
            />
          </div>
        </form>
          
        <ButtonPrimary 
          classes='submit-btn btn-primary btn-large' 
          onClick={handleSubmit}>
          Send message
        </ButtonPrimary>
      </div>}

      {(itemType === 'job-application') &&
      <div className='work-with-us'>
        <TextCenter
          classes={`text-center-font-large jobs-text`}
          text='Are you creative, smart, experimental, curious and result-driven? Join our team!'>
        </TextCenter>

        <CallToAction title='See all opportunities' url='https://hikeone.homerun.co/' />
      </div>}
    </div>
    )}
    
    return (
      <div className='message-sent container'>
        <TextCenter
          classes={`text-center-font-large text-center-spacing-small`}
          text='<p>Message received!</p><p>We will get back to you shortly</p>'>
        </TextCenter>
      </div>
    )
	}
}

export default ContactForm
