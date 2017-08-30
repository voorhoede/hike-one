import TrailDiamond from '../shapes/trail-diamond/trail-diamond';
import TrailTriangle from '../shapes/trail-triangle/trail-triangle';
import TrailDoubleDiamond from '../shapes/trail-double-diamond/trail-double-diamond';
import ButtonSecondaryLink from '../buttons/button-secondary/button-secondary-link';

const shapes = {
	diamond: <TrailDiamond />,
	triangle: <TrailTriangle />,
	doubleDiamond: <TrailDoubleDiamond />
};

const ServicesItemSmall = ({ shape, button = '', title = '', text='', company='' }) => (
	<section className={`services-item-small`}>
		<div className={`services-item-small-shape shadow`}>{ shapes[shape] }</div>
		<div className="services-item-small-content">
			<h3 className="services-item-small-heading">{ title }</h3>
			<p className="services-item-description">
				We use design to improve the interaction between people and services. We prototype and validate with users in a loop of continues improvement. 
			</p>
			<div className="service-item-small-image-container">	
				<img className="service-item-small-logo"
					src={`https://www.datocms-assets.com/2625/1502811013-1501144305-rectangle-3.png?&auto=format&fit=max&max-w=250`}
					alt='' />
			</div>
			<p className="service-item-small-subtitle">
				For PostNL we validated a new business idea using Lean Startup methods.
			</p>
			<ButtonSecondaryLink href="/services" icon="arrowRight" classes={`btn-red-border btn-wide`}>
				{ button }
			</ButtonSecondaryLink>
		</div>
	</section>
);

export default ServicesItemSmall;
