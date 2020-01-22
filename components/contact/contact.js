import PropTypes from 'prop-types';
import ButtonPrimaryLink from '../buttons/button-primary/button-primary-link';

const Contact = ({ title = '', button = '', link = '', target = '_self' }) => (
	<section className="contact">
		<div className="container-inner">
			<h3>{title}</h3>
			<ButtonPrimaryLink href={`${link ? link : '/contact'}`} target={target} classes="btn-large">
				{button}
			</ButtonPrimaryLink>
		</div>
	</section>
);

Contact.propTypes = {
	title: PropTypes.string,
	button: PropTypes.string,
	link: PropTypes.string,
	target: PropTypes.string,
};

export default Contact;
