import ServicesItemSmall from '../services-item-small/services-item-small';

const colors = ['blue', 'green', 'purple'];
const shapes = ['diamond', 'doubleDiamond', 'triangle'];

const ServicesOverviewSmall = ({ services }) => (
	<div className="services-item-small-container container clearfix">
		<div className="container-inner">
		{
			Object.values(services)
				.map((item, index) => {
					item.color = colors[index];
					item.shape = shapes[index];
					return <ServicesItemSmall {...item}  key={index} />;
				})
		}
		</div>
	</div>
);

export default ServicesOverviewSmall;
