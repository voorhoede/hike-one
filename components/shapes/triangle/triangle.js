const Triangle = (props) => {
	return (
		<svg className={`${props.color ? props.color : ''} ${props.classes ? props.classes : ''} shape-triangle`}
			 xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="415" height="455" viewBox="0 0 415 455">
			{ props.shadow &&
				<defs>
					<filter id="shape-triangle" width="182.4%" height="172.4%" x="-41.2%" y="-27.2%" filterUnits="objectBoundingBox">
						<feOffset dy="30" in="SourceAlpha" result="shadowOffsetOuter1"/>
						<feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="35"/>
						<feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
						<feMerge>
							<feMergeNode in="shadowMatrixOuter1"/>
							<feMergeNode in="SourceGraphic"/>
						</feMerge>
					</filter>
				</defs>
			}
			<g filter={props.shadow ? 'url(#shape-triangle)' : ''}
			   fill="none" fillRule="evenodd" transform="translate(-106 -734)">
				<path className="shape-"
					d="M170.912 767.496l287.176 74.364a2 2 0 0 1 1.204 2.98l-154.94 253.066a2 2 0 0 1-3.56-.295L168.556 770.18a2 2 0 0 1 2.356-2.685z"/>
			</g>
		</svg>
	);
};

export default Triangle;
