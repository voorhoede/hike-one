import ServicesItemSmall from '../services-item-small/services-item-small';
import TextCenter from '../text-center/text-center';

const colors = ['blue', 'green', 'purple'];
const shapes = ['diamond', 'doubleDiamond', 'triangle'];

const ServicesOverviewSmall = ({ services, title='' }) => (
	<div className="services-item-small-container container clearfix">
		<TextCenter
			classes="text-center-font-title text-center-spacing-small"
			title={title} />
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
