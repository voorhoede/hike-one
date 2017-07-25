import PrimaryButtonLink from '../buttons/button-primary/button-primary-link';

const CTABlock = ({title = '', image, button = ''}) => (
	<section className="cta-block" style={{backgroundImage: `url(${image})`}}>
		<div className="container">
			<h2>{title}</h2>
			<PrimaryButtonLink href="#" value={button} />
		</div>
	</section>
);

export default CTABlock;
