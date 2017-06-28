const DoubleDiamond = (props) => {
	return (
		<div className="shape">
			<svg className="double-diamond" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 399 399">
				if (props.shadow == "true"){
				    <defs>
				        <filter id="double-diamond" width="160%" height="160%" x="-30%" y="-20%" filterUnits="objectBoundingBox">
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
			    <g fill="none" fillRule="evenodd" filter={props.shadow == 'true' ? 'url(#double-diamond)' : ''} transform="translate(50 20)">
			        <rect className="double-diamond-bg" width="299.511" height="299.824" fill="#45D33C" rx="4"/>
			        <g transform="translate(33 71)">
			            <rect className="back-diamond" width="109.818" height="110.183" x="23.053" y="23.337" fill="#FFE044" rx="4" transform="rotate(45 77.961 78.429)"/>
			            <rect className="front-diamond" width="109.818" height="110.183" x="100.772" y="23.271" fill="#FE595B" rx="4" transform="rotate(45 155.68 78.362)"/>
			        </g>
			    </g>
			</svg>
		</div>
	);
};

export default DoubleDiamond;
