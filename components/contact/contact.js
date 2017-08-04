import React from 'react';
import SecondaryButtonLink from '../buttons/button-secondary/button-secondary-link';

const Contact = ({title = '', button = '', children}) => {
	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front');

	return (
		<section className="contact">
			<div className="container-inner">
				<h3 className="content">{title}</h3>
				<SecondaryButtonLink noArrow href="#" classes="btn-secondary-alt content">
					{button}
				</SecondaryButtonLink>
			</div>
			{ parallaxLayerFront }
		</section>
	);
};

export default Contact;
