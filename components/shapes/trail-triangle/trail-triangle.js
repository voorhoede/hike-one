import React from 'react'

const TrailTraingle = ({shadow}) => (
	<div className="shape">
		<svg className="shape-trail-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 399 399">
			{ shadow &&
			<defs>
				<filter id="shape-trail-triangle-shadow" width="160%" height="160%" x="-30%" y="-20%" filterUnits="objectBoundingBox">
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
			<g fill="none" fillRule="evenodd">
				<rect className="shape-trail-triangle-bg" filter={shadow == "true" ? 'url(#shape-trail-triangle-shadow)' : ''}
					  width="299.511" height="299.824" fill="#FFE044" rx="4" transform="translate(50 20)"/>
				<path className="shape-trail-triangle-front" fill="#8415BC" d="M304.768 249.844l-213.275-.18a1.494 1.494 0 0 1-1.276-2.27L198.31 75.718a1.494 1.494 0 0 1 2.552-.004L309.78 247.57c.43.704.21 1.623-.494 2.054-.236.144-4.242.22-4.518.22z"/>
			</g>
		</svg>
	</div>
);


export default TrailTraingle;
