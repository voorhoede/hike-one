import React from 'react';

import SecondaryButton from '../buttons/button-secondary/button-secondary';

class ContactUs extends React.Component {
	render() {
		return (
			<div className="contact-us">
				<h3>Where will your journey  lead us?</h3>

				<SecondaryButton noArrow="true" href="#" classes="reverse" value="Get in touch" />
			</div>
		);
	}
}

export default ContactUs;
