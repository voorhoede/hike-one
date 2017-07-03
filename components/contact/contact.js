import React from 'react';

import SecondaryButton from '../buttons/button-secondary/button-secondary';
import Shapes from '../contact/contact-shapes';

class Contact extends React.Component {
	render() {
		const props = this.props;
		return (
			<div className="contact">
				<div className="container-inner">
					<h3 className="content">{props.title}</h3>
					<SecondaryButton noArrow href="#" classes="btn-secondary-alt content" value={props.button} />
				</div>
				<Shapes />
			</div>
		);
	}
}

export default Contact;
