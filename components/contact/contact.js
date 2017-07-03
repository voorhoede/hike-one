import React from 'react';

import SecondaryButton from '../buttons/button-secondary/button-secondary';

class Contact extends React.Component {
	render() {
		const props = this.props;
		return (
			<div className="contact">
				<h3>{props.title}</h3>

				<SecondaryButton noArrow href="#" classes="btn-secondary-alt" value={props.button} />
			</div>
		);
	}
}

export default Contact;
