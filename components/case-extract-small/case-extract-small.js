import Icon from '../icon/icon';
import Link from 'next/link';
import getContrastYIQ from '../_helpers/getContrastYIQ';

const CaseExtractSmall = ({
	slug = '',
	color = '',
	companyName = '',
	title= '',
	subtitle = '',
	image = '',
	children }) => {

	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front');

	return (
		<div className={`case-extract-small
			${ getContrastYIQ(color) === 'black' ? 'case-extract-text-dark' : '' }`}>
			<Link href={`/case?slug=${slug}`} as={`/case/${slug}`}>
				<a className="">
					<div className="case-extract-small-image"
					style={{backgroundImage: `url(${image.url})`}}></div>
					
					<div className="case-extract-small-bg shadow"
						 style={{backgroundColor: color}}></div>
					
					<div className="case-extract-small-text">
						<span>{companyName}</span>
						<h3>{title}</h3>
						<h4>{subtitle}</h4>
					</div>

					<div className="case-extract-small-button">
						<Icon icon="arrowRightCircle"/>
					</div>
				</a>
			</Link>
			{ parallaxLayerFront }
		</div>
	);
};


export default CaseExtractSmall;
