const Circle = (props) => {
	return (
		<div className="shape">
			<svg className="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 399 400">
			 	{ props.shadow &&
					<defs>
						<filter id="circle" width="160%" height="160%" x="-30%" y="-20%" filterUnits="objectBoundingBox">
							<feOffset dy="30" in="SourceAlpha" result="shadowOffsetOuter1"/>
							<feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="25"/>
							<feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
							<feMerge>
								<feMergeNode in="shadowMatrixOuter1"/>
								<feMergeNode in="SourceGraphic"/>
							</feMerge>
						</filter>
					</defs>
			 	}
				<g filter={props.shadow ? 'url(#circle)' : ''}
				   fill="none"  fillRule="evenodd" transform="translate(50 20)">
					<rect className="circle-bg" width="299.511" height="299.824" rx="4"/>
					<circle className="circle-front" cx="150" cy="150" r="100" />
				</g>
			</svg>
		</div>
	);
};

export default Circle;
