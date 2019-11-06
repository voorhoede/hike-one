import React, { Component } from 'react'
import PropTypes from 'prop-types'
import scrollToElement from '../_helpers/scrollToElement'

import {
  ButtonPrimary,
  CallToAction,
  InputField,
  SelectDropdown,
  TextCenter
} from '../'


class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.formatEmailSubject = this.formatEmailSubject.bind(this)
    this.getFormData = this.getFormData.bind(this)
    this.isFormValid = this.isFormValid.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearForm = this.clearForm.bind(this)
    this.state = {
      selectedItemId: '',
      currentForm: null,
      _gotcha: '', // avoids spam by fooling scrapers
      isSent: false,
      formData: {},
    }
  }

  handleClick(id, label) {
    this.setState({
      selectedItemId: id,
      selectedItemLabel: label,
      currentForm: this.props.form.forms.find(form => form.id === id),
    })
  }

  handleChange(e) {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value,
      }
    })
  }

  formatEmailSubject() {
    const { currentForm, formData } = this.state

    return currentForm.emailMessageSubject
      .split(' ')
      .map(word => {
        if (word.indexOf('[') !== -1) {
          const name = word.substring(1, word.length -1)
          return formData[name]
        }
        return word
      })
      .join(' ')
  }

  getFormData() {
    const { formData } = this.state
    const emailSubject = this.formatEmailSubject()

    return { _subject: emailSubject, _format: 'plain', ...formData }
  }

  isFormValid() {
    const { currentForm, formData, _gotcha } = this.state
    const isValid = currentForm.formFields
      .filter(field => field.required)
      .map(field => field.name)
      .map(name => {
        if (name === 'email') {
          return /(.+)@(.+){2,}\.(.+){2,}/.test(formData[name])
        }

        return formData[name].length >= 2
      })
      .indexOf(false) === -1

    const isSpam = _gotcha.length > 0

    return isValid && !isSpam
  }

  handleSubmit(e) {
    e.preventDefault()

    if (!this.isFormValid) {
      return
    }

    const { currentForm } = this.state
    const formData = this.getFormData()

    return fetch(`https://formspree.io/${currentForm.formspreeEndpoint}`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((e) => {
      switch (e.status) {
        case (200): {
          this.clearForm()

          this.setState({ isSent: true })
          scrollToElement('message-sent')
          break
        }
        case (403): {
          console.error('In order to submit via AJAX, in this form\'s reCAPTCHA must be disabled.', e)
          break
        }
        default: {
          console.error('Something went wrong: ', e)
        }
      }
    })
    .catch((e) => console.error(e))
  }

  clearForm() {
    this.setState({
      selectedItemId: '',
      currentForm: null,
      _gotcha: '', // avoids spam by fooling scrapers
      formData: {},
    })
  }

  componentDidMount() {
    const { form, singleForm } = this.props;

    if (singleForm) {
      this.setState({
        selectedItemId: form.forms[0].id,
        selectedItemLabel: form.forms[0].label,
        currentForm: form.forms[0],
      })
    }
  }

  render() {
    const { _gotcha, isSent, currentForm, selectedItemId, selectedItemLabel } = this.state
    const { form, singleForm } = this.props
    const { title, selectInputLabel, thankYouMessage } = form
    const forms = singleForm ? form.forms : [...form.forms, { title: 'Working at Hike One', id: 'job-application' }]

    if (!isSent) {
      return (
        <div className='contact-form container'>
          <h2 className='form-title'>{title}</h2>

          {( singleForm !== true) && (
            <SelectDropdown
              label={selectInputLabel}
              options={[...forms]}
              handleClick={this.handleClick}
              selectedItem={selectedItemLabel}
            />
          )}

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
            <React.Fragment>
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
                    autoFocus={index === 0 && !singleForm}
                    formLength={currentForm.formFields.length}
                  />
                ))}

                <input type="hidden" name="_gotcha" value={_gotcha} style={{ display: 'none' }} onChange={this.handleChange} />
              </form>
              <ButtonPrimary classes='submit-btn btn-primary btn-large' onClick={this.handleSubmit}>
                {currentForm.submitButtonLabel}
              </ButtonPrimary>
            </React.Fragment>
          )}
        </div>
      )
    }

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

            <CallToAction
              buttonText='See all opportunities'
              url='https://hikeone.homerun.co/'
              isExternalLink={true}
            />
          </div>
        )}

        {currentForm && !isSent && (
          <React.Fragment>
            <TextCenter
              classes='text-center-text'
              text={`<p>Send us a line using the form below, <a href="mailto:hello@hike.one?subject=Let's talk about ${selectedItemLabel}">or e-mail us directly</a>.</p>`}
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
          </React.Fragment>
        )}

        { isSent && (
          <div className='message-sent container'>
            <TextCenter
              classes='text-center-font-large text-center-spacing-small'
              text={thankYouMessage}
            />
          </div>
        )}
      </div>
    )
  }
}

ContactForm.propTypes = {
  form: PropTypes.object,
  singleForm: PropTypes.bool
}

export default ContactForm
