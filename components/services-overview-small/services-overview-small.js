import Link from 'next/link';
import TrailDiamond from '../shapes/trail-diamond/trail-diamond';
import TrailTriangle from '../shapes/trail-triangle/trail-triangle';
import Triangle from '../shapes/triangle/triangle';
import TrailDoubleDiamond from '../shapes/trail-double-diamond/trail-double-diamond';
import ButtonSecondaryLink from '../buttons/button-secondary/button-secondary-link';

const shapesList = ['diamond', 'doubleDiamond', 'triangle'];
const shapes = {
	diamond: <TrailDiamond />,
	triangle: <TrailTriangle />,
	doubleDiamond: <TrailDoubleDiamond />
};

const ServicesOverviewSmall = ({ services, title=''}) => (
	<div className="services-overview-small container clearfix">
		<div className="service-overview-small-triangle">
			<Triangle />
		</div>
		<div className="services-overview-small-header">
			{title}
		</div>
		<div className="container-inner">
		{
			Object.values(services)
				.map((item, index) => {
					item.shape = shapesList[index];
					return (
						<div key={index} className={`services-item-small`}>
							<div className={`services-item-small-shape shadow`}>{ shapes[item.shape] }</div>
							<div className="services-item-small-content">
								<h3 className="services-item-small-heading">{ item.title }</h3>
								<p className="services-item-description">{ item.text }</p>
								<div className="service-item-small-image-container">
									<img className="service-item-small-logo"
										src={item.referenceCompanyLogo.url}
										alt='' />
								</div>
								{ item.referenceCaseLink ?
									<Link href={`/case?slug=${item.referenceCaseLink.slug}`}
										  as={`/case/${item.referenceCaseLink.slug}`}>
										<a className="service-item-small-subtitle">
											{ item.referenceText }
										</a>
									</Link>
									:
									<p className="service-item-small-subtitle">
										{ item.referenceText }
									</p>
								}
								<ButtonSecondaryLink
									href={`/service?slug=${item.link.slug}`}
									hrefAs={`/service/${item.link.slug}`}
									icon="arrowRight" classes={`btn-red-border btn-wide`}>
									{ item.button }
								</ButtonSecondaryLink>
							</div>
						</div>
					);
				})
		}
		</div>
	</div>
);

export default ServicesOverviewSmall;
