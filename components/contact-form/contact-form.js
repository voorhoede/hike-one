import React from 'react'
import scrollToElement from '../_helpers/scrollToElement'

import {
  ButtonPrimary,
  CallToAction,
  InputField,
  SelectDropdown,
  TextCenter
} from '../'


class ContactForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedItemId: '',
      currentForm: null,
      _gotcha: '', // avoids spam by fooling scrapers
      isSent: false,
      formData: {},
    }
  }

  handleClick = (id, label) => {
    this.setState({
      selectedItemId: id,
      selectedItemLabel: label,
      currentForm: this.props.form.forms.find(form => form.id === id),
    })
  }

  handleChange = e => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value,
      }
    })
  }

  formatEmailSubject = () => {
    const subject = this.state.currentForm.emailMessageSubject

    return subject
      .split(' ')
      .map(word => {
        if (word.indexOf('[') !== -1) {
          const name = word.substring(1, word.length -1)

          return this.state.formData[name]
        }

        return word
      })
      .join(' ')
  }

  getFormData = () => {
    const emailSubject = this.formatEmailSubject()
    const formData = { _subject: emailSubject, _format: "plain", ...this.state.formData }

    return formData
  }

  isFormValid = () => {
    const { currentForm, _gotcha } = this.state
    const isValid = currentForm.formFields
      .filter(field => field.required)
      .map(field => field.name)
      .map(name => {
        if (name === 'email') {
          return /(.+)@(.+){2,}\.(.+){2,}/.test(this.state.formData[name])
        }

        return this.state.formData[name].length >= 2
      })
      .indexOf(false) === -1

    const isSpam = _gotcha.length > 0

    return isValid && !isSpam
  }

  handleSubmit = e => {
    e.preventDefault()

    if (!this.isFormValid()) {
      return false
    }

    const formData = this.getFormData()
    const { formspreeEndpoint } = this.state.currentForm

    return fetch(`https://formspree.io/${formspreeEndpoint}`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(() => {
      this.clearForm()

      this.setState({ isSent: true })
      scrollToElement('message-sent')
    })
  }

  clearForm = () => {
    this.setState({
      selectedItemId: '',
      currentForm: null,
      _gotcha: '', // avoids spam by fooling scrapers
      formData: {},
    })
  }

  render() {
    const { _gotcha, isSent, currentForm, selectedItemId, selectedItemLabel } = this.state
    const { form } = this.props
    const { title, selectInputLabel, thankYouMessage } = form
    const forms = [...form.forms, { title: 'Working at Hike One', id: 'job-application' }]

    if (!isSent) {
      return (
        <div className='contact-form container'>
          <h2 className='form-title'>{title}</h2>

          <SelectDropdown
            label={selectInputLabel}
            options={[...forms]}
            handleClick={this.handleClick}
            selectedItem={selectedItemLabel}
          />

          {(selectedItemId === 'job-application') && (
            <div className='work-with-us'>
              <TextCenter
                classes='text-center-font-large work-with-us-text'
                text='Are you creative, smart, experimental, curious and result-driven? Join our team!'
              />

              <CallToAction buttonText='See all opportunities' url='https://hikeone.homerun.co/' isExternalLink={true} />
            </div>
          )}

          {currentForm && (
            <div>
              <TextCenter
                classes='text-center-text'
                text={`<p>Send us a line using the form below, <a href="mailto:hello@hike.one?subject=Let's talk about ${selectedItemLabel}">or e-mail us directly</a></p>`}
              />

              <form className='form' onSubmit={this.handleSubmit}>
                {currentForm.formFields.map((field, index) => (
                  <InputField
                    key={field.id}
                    name={field.name}
                    label={field.label}
                    type={field.inputType}
                    onChange={this.handleChange}
                    value={this.state[field.name]}
                    isRequired={field.required}
                    autoFocus={index === 0}
                    formLength={currentForm.formFields.length}
                  />
                ))}

                <input type="hidden" name="_gotcha" value={_gotcha} style={{ display: 'none' }} onChange={this.handleChange} />
              </form>
              <ButtonPrimary classes='submit-btn btn-primary btn-large' onClick={this.handleSubmit}>
                {currentForm.submitButtonLabel}
              </ButtonPrimary>
            </div>
          )}
        </div>
      )
    }

    return (
      <div className='message-sent container'>
        <TextCenter
          classes='text-center-font-large text-center-spacing-small'
          text={thankYouMessage}
        />
      </div>
    )
  }
}

export default ContactForm
