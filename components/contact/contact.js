import SecondaryButtonLink from '../buttons/button-secondary/button-secondary-link';

const Contact = ({title = '', button = '', parallaxLayerFront}) => (
	<section className="contact">
		<div className="container-inner">
			<h3 className="content">{title}</h3>
			<SecondaryButtonLink noArrow href="#" classes="btn-secondary-alt content" value={button} />
		</div>
		{ parallaxLayerFront }
	</section>
);


export default Contact;
