const Cube = (props) => {
	return (
		<div className="shape">
			<svg className="cube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 399 399">
				if (props.shadow == "true"){
				    <defs>
				        <filter id="cube" width="160%" height="160%" x="-30%" y="-20%" filterUnits="objectBoundingBox">
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
			    <g fill="none" fillRule="evenodd" filter={props.shadow == "true" ? 'url(#cube)' : ''} transform="translate(50 20)">
			        <rect className="cube-bg" width="299.511" height="299.824" fill="#FFE044" rx="4"/>
			        <rect className="cube-front" width="192.347" height="192.548" x="53.1" y="53.638" fill="#8415BC" rx="4" transform="rotate(90 149.274 149.912)"/>
			    </g>
			</svg>
		</div>
	);
};

export default Cube;
