import React from 'react'

const MailchimpForm = () => (
  <div id="mc_embed_signup" className="mailchimp-form">
    <form
      action='https://unitid.us9.list-manage.com/subscribe/post?u=9fcf53aac8cfc03a445bd4e2f&amp;id=5088a72738'
      method="POST"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate" target="_blank"
      noValidate="">

      <div id="mc_embed_signup_scroll" className="form">
        <div className="mc-field-group input-field">
          <label htmlFor="mce-FNAME" className="label">First Name</label>
          <input type="text" name="FNAME" className="input" id="mce-FNAME" />
        </div>

        <div className="mc-field-group input-field">
          <label htmlFor="mce-LNAME" className="label">Last Name </label>
          <input type="text" name="LNAME" className="input" id="mce-LNAME" />
        </div>

        <div className="mc-field-group input-field input-field-full-width">
          <label htmlFor="mce-EMAIL" className="label">Email Address <span className="asterisk">*</span></label>
          <input type="email" name="EMAIL" className="required email input" id="mce-EMAIL" />
        </div>

        <div id="mce-responses" className="clear">
          <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
          <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
        </div>
        {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_9fcf53aac8cfc03a445bd4e2f_5088a72738" value="" tabIndex="-1" /></div>
        <div className="clear btn-right-aligned"><input type="submit" value="Get the free toolkit" name="subscribe" id="mc-embedded-subscribe" className="button btn-primary submit-btn btn-large" /></div>
      </div>
    </form>
  </div>
)

export default MailchimpForm
