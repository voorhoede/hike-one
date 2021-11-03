import PropTypes from 'prop-types';

const Circle = ({ shadow = false }) => (
	<div className="shape">
		<svg className="shape-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 399 400">
			{shadow && (
				<defs>
					<filter
						id="shape-circle-shadow"
						width="160%"
						height="160%"
						x="-30%"
						y="-20%"
						filterUnits="objectBoundingBox"
					>
						<feOffset dy="30" in="SourceAlpha" result="shadowOffsetOuter1" />
						<feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="25" />
						<feColorMatrix
							in="shadowBlurOuter1"
							result="shadowMatrixOuter1"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
						/>
						<feMerge>
							<feMergeNode in="shadowMatrixOuter1" />
							<feMergeNode in="SourceGraphic" />
						</feMerge>
					</filter>
				</defs>
			)}
			<g
				filter={shadow ? 'url(#shape-circle-shadow)' : ''}
				fill="none"
				fillRule="evenodd"
				transform="translate(50 20)"
			>
				<rect className="shape-circle-bg" width="299.511" height="299.824" rx="4" />
				<circle className="shape-circle-front" cx="150" cy="150" r="100" />
			</g>
		</svg>
	</div>
);

Circle.propTypes = {
	shadow: PropTypes.bool,
};

export default Circle;
