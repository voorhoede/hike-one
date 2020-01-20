export const TrailDiamond = () => (
	<div className="shape">
		<svg className="shape-trail-diamond" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
			<rect className="shape-bg" fill="#fe595b" width="400" height="400" rx="30" ry="30" />
			<rect
				className="shape-front"
				fill="#00aae9"
				width="192"
				height="192"
				x="103"
				y="103"
				rx="12"
				ry="12"
				transform="matrix(0.7071 0.7071 -0.7071 0.7071 199.9481 -82.8642)"
			/>
		</svg>
	</div>
);

export const TrailDoubleDiamond = () => (
	<div className="shape">
		<svg
			className="shape-trail-double-diamond"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 400 400"
		>
			<rect className="shape-bg" fill="#45d33c" width="400" height="400" rx="12" ry="12" />
			<rect
				className="shape-back"
				fill="#FFE044"
				width="134"
				height="134"
				x="78.7"
				y="133"
				rx="12"
				ry="12"
				transform="matrix(0.7071 0.7071 -0.7071 0.7071 184.0894 -44.4479)"
			/>
			<rect
				className="shape-front"
				fill="#FE595B"
				width="134"
				height="134"
				x="187.3"
				y="133"
				rx="12"
				ry="12"
				transform="matrix(0.7071 0.7071 -0.7071 0.7071 215.8987 -121.2424)"
			/>
		</svg>
	</div>
);

export const TrailTriangle = () => (
	<div className="shape">
		<svg className="shape-trail-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
			<rect className="shape-bg" fill="#FFE044" width="400" height="400" rx="12" ry="12" />
			<path
				className="shape-front"
				fill="#8314BB"
				d="M331.5,716.7l-267.6-0.3c-1,0-1.9-0.9-1.9-1.9c0-0.4,0.1-0.6,0.3-1l135.6-215.4c0.5-0.9,1.6-1.1,2.6-0.6c0.3,0.1,0.5,0.4,0.6,0.6l136.6,215.7c0.5,0.9,0.3,2-0.6,2.6C336.9,716.5,331.7,716.7,331.5,716.7L331.5,716.7z"
			/>
			<path
				className="shape-back"
				fill="#8314BB"
				d="M331.5,309.7l-267.6-0.3c-1,0-1.9-0.9-1.9-1.9c0-0.4,0.1-0.6,0.3-1L197.9,91.2c0.5-0.9,1.6-1.1,2.6-0.6c0.3,0.1,0.5,0.4,0.6,0.6l136.6,215.7c0.5,0.9,0.3,2-0.6,2.6C336.9,309.6,331.7,309.7,331.5,309.7L331.5,309.7z"
			/>
		</svg>
	</div>
);
