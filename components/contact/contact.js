import React from 'react';

import SecondaryButton from '../buttons/button-secondary/button-secondary';

class Contact extends React.Component {
	render() {
		return (
			<div className="contact">
				<h3>Where will your journey  lead us?</h3>

				<SecondaryButton noArrow href="#" classes="btn-secondary-alt" value="Get in touch" />
			</div>
		);
	}
}

export default Contact;
