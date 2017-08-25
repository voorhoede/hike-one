import Icon from '../icon/icon';
import Link from 'next/link';

const CaseExtractSmall = ({
	slug = '',
	color = '',
	companyname = '',
	title= '',
	subtitle = '',
	image = '',
	children }) => {

	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front');
	return (
		<div className={`case-extract-small`}>
			<Link href={`/case?slug=${slug}`} as={`/case/${slug}`}>
				<a>
					<div className="case-extract-small-image"
					style={{backgroundImage: `url(${image.url})`}}></div>
					<div className={`case-extract-small-text ${color} shadow`}>
						<span>{companyname}</span>
						<h3>{title}</h3>
						<h4>{subtitle}</h4>
						<div className="case-extract-small-button">
							<Icon icon="arrowRightCircle"/>
						</div>
					</div>
				</a>
			</Link>
			{ parallaxLayerFront }
		</div>
	);
};


export default CaseExtractSmall;
