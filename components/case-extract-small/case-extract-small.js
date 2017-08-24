import Icon from '../icon/icon';
import ButtonCleanLink from '../buttons/button-clean/button-clean-link';
import Link from 'next/link';

const CaseExtractSmall = ({ item, children}) => {
	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front');
	return (
		<div className={`case-extract-small`}>
			<Link href={`/case?slug=${item.slug}`} as={`/case/${item.slug}`}>
				<a>
					<div className="case-extract-small-image"
					style={{backgroundImage: `url(${item.headerBackgroundImage.url})`}}></div>
					<div className={`case-extract-small-text
						${item.color ? item.color: ''} shadow`}>
						<span>{item.companyName}</span>
						<h3>{item.title}</h3>
						<h4>{item.subtitle}</h4>
						<div className="case-extract-small-button">
							<Icon icon="arrowRightCircle"/>
						</div>
					</div>
				</a>
			</Link>
			{ parallaxLayerFront }
		</div>
	)
};


export default CaseExtractSmall;
