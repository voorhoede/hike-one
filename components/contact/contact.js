import React from 'react';
import ButtonPrimaryLink from '../buttons/button-primary/button-primary-link';

const Contact = ({title = '', button = '', link = false, target = '',  children}) => {
	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front');

	return (
		<section className="contact">
			<div className="container-inner">
				<h3 className="content">{title}</h3>
				<ButtonPrimaryLink
					href={`${link ? link : '/contact'}`}
					target={target}
					classes="btn-large content" >
					{button}
				</ButtonPrimaryLink>
			</div>
			{ parallaxLayerFront }
		</section>
	);
};

export default Contact;
