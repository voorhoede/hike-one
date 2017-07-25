import ServicesItemSmall from '../services-item-small/services-item-small';

const ServicesOverviewSmall = ({ services }) => {
	return (
		<div className="container clearfix">
			<div className="container-inner">
			{
				Object.values(services)
					.map((item, index) => (
						<ServicesItemSmall {...item}  key={index} />
				))
			}
			</div>
		</div>
	);

};

export default ServicesOverviewSmall;
