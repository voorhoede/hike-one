import React from 'react'
import MailchimpInput from './mailchimp-input'

const MailchimpForm = ({ title='', description='', inputFields, listId, buttonLabel, hasShadow }) => (
  <div className={`mailchimp-form ${ hasShadow ? 'shadow' : '' }`} id="cta">
    <p className="form-title">{title}</p>
    <span className="form-description">{description}</span>

    <form
      action={`https://unitid.us9.list-manage.com/subscribe/post?u=9fcf53aac8cfc03a445bd4e2f&ampid=${listId}`}
      method="POST"
      name="mc-embedded-subscribe-form"
      className="form"
      target="_blank"
      rel="noopener noreferrer">
      {inputFields.map((input, index) => (
        <MailchimpInput
          label={input.label}
          name={input.inputType}
          required={input.required}
          key={index}
        />
      ))}

      <MailchimpInput
        label="Email"
        name="email"
        required={true}
        classes={!(inputFields.length % 2) ? 'input-field-full-width' : ''}
      />

      {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <input type="text" name="b_9fcf53aac8cfc03a445bd4e2f_5088a72738" value="" tabIndex="-1" />
      </div>

      <input
        type="submit"
        value={buttonLabel}
        name="subscribe"
        className="button btn-primary submit-btn btn-large btn-right-aligned"
      />
    </form>
  </div>
)

export default MailchimpForm
