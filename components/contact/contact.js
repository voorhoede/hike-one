import React from 'react';
import ButtonPrimaryLink from '../buttons/button-primary/button-primary-link';

const Contact = ({title = '', button = '', children}) => {
	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front');

	return (
		<section className="contact">
			<div className="container-inner">
				<h3 className="content">{title}</h3>
				<ButtonPrimaryLink href="#" classes="btn-red btn-large content">
					{button}
				</ButtonPrimaryLink>
			</div>
			{ parallaxLayerFront }
		</section>
	);
};

export default Contact;
