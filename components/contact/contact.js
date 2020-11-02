import React from 'react';
import PropTypes from 'prop-types';
import ButtonPrimaryLink from '../buttons/button-primary/button-primary-link';

const Contact = ({ title = '', button = '', link = '', target = '_self', children }) => {
	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find((child) => child.props.position === 'front');

	return (
		<section className="contact">
			<div className="container-inner">
				<h3 className="content">{title}</h3>
				<ButtonPrimaryLink
					href={`${link ? link : '/contact'}`}
					target={target}
					classes="btn-large content"
				>
					{button}
				</ButtonPrimaryLink>
			</div>
			{parallaxLayerFront}
		</section>
	);
};

Contact.propTypes = {
	title: PropTypes.string,
	button: PropTypes.string,
	link: PropTypes.string,
	target: PropTypes.string,
	children: PropTypes.node,
};

export default Contact;
