import Link from 'next/link';
import ButtonSecondaryMock from '../buttons/button-secondary/button-secondary-mock';

const ServiceCard = ({ item = {}, Component = null, onMouseOver = null, onMouseLeave = null }) => {
	const { button, iconColor, link, text, title } = item;

	return (
		<div className="service-card">
			<div className="service-card__icon">
				<div className={`service-card__icon-square ${iconColor.color}`}></div>
				<Component />
			</div>
			<div className="service-card__content">
				<ServiceCardTitle
					link={link}
					title={title}
					onMouseOver={() => onMouseOver(link.slug)}
					onMouseLeave={() => onMouseLeave(link.slug)}
				/>
				<p className="service-card__content-text">{text}</p>
				<ButtonSecondaryMock icon="arrowRight" classes="btn-red-border btn-wide">
					{button}
				</ButtonSecondaryMock>
			</div>
		</div>
	);
};

const ServiceCardTitle = ({ link = {}, title = '', onMouseOver = null, onMouseLeave = null }) => (
	<React.Fragment>
		{link && link.slug ? (
			<Link href="/service/[slug]" as={`/service/${link.slug}`}>
				<a id={link.slug} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
					<h3 className="service-card__content-title">{title}</h3>
				</a>
			</Link>
		) : (
			<h3 className="service-card__content-title">{title}</h3>
		)}
	</React.Fragment>
);

export default ServiceCard;
