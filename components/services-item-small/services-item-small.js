import TrailDiamond from '../shapes/trail-diamond/trail-diamond';
import TrailTriangle from '../shapes/trail-triangle/trail-triangle';
import TrailDoubleDiamond from '../shapes/trail-double-diamond/trail-double-diamond';
import ButtonSecondaryLink from '../buttons/button-secondary/button-secondary-link';

const shapes = {
	diamond: <TrailDiamond />,
	triangle: <TrailTriangle />,
	doubleDiamond: <TrailDoubleDiamond />
};

const ServicesItemSmall = ({ shape, button = '', title = '', color }) => (
	<section className={`services-item-small services-item-small-${color}`}>
		<div className={`services-item-small-shape shadow`}>{ shapes[shape] }</div>
		<div className="services-item-small-content">
			<h3 className="services-item-small-heading">{ title }</h3>
			<ButtonSecondaryLink classes="btn-white" href="/services" icon="arrowRight">
				{ button }
			</ButtonSecondaryLink>
		</div>
	</section>
);

export default ServicesItemSmall;
