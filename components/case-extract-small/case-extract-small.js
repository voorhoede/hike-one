import React from 'react'
import Icon from '../icon/icon';
import Link from 'next/link';
import setImageParameters from '../_helpers/setImageParameters';

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
		<div className="case-extract-small">
			<Link href={`/case?slug=${slug}`} as={`/case/${slug}`}>
				<a className="">
					<div className="case-extract-small-image"
					style={{backgroundImage: `url(${setImageParameters(image.url, {w:700, fm: 'pjpg', q: 85})})`}}>
						<div className="case-extract-small-overlay"></div>
					</div>
					<div className="case-extract-small-bg">
						<div className="case-extract-small-bg-inner" style={{backgroundColor: color}}></div>
					</div>
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
