import React from 'react'

const MailchimpForm = ({ title='', description='', listId, buttonLabel, hasShadow }) => (
  <div id="mc_embed_signup" className={`mailchimp-form ${ hasShadow ? 'shadow' : '' }`}>
    <p className="form-title">{title}</p>
    <span className="form-description">{description}</span>

    <form
      action={`https://unitid.us9.list-manage.com/subscribe/post?u=9fcf53aac8cfc03a445bd4e2f&amp;id=${listId}`}
      method="POST"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate" target="_blank"
      noValidate=""
    >
      <div className="mc-field-group input-field input-field-full-width">
        <label htmlFor="mce-EMAIL" className="label">Email Address <span className="asterisk">*</span></label>
        <input type="email" name="EMAIL" className="required email input" id="mce-EMAIL" />
      </div>

      <div id="mce-responses" className="clear">
        <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
        <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
      </div>

      {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <input type="text" name="b_9fcf53aac8cfc03a445bd4e2f_5088a72738" value="" tabIndex="-1" />
      </div>

      <div className="clear">
        <input
          type="submit"
          value={buttonLabel}
          name="subscribe"
          id="mc-embedded-subscribe"
          className="button btn-primary submit-btn btn-large btn-right-aligned"
        />
      </div>
    </form>
  </div>
)

export default MailchimpForm
