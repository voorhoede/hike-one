export const TrailDiamond = () => (
	<svg
		className="animated-shape diamond"
		xmlns="http://www.w3.org/2000/svg"
		width="400"
		height="400"
		viewBox="0 0 400 400"
	>
		<rect className="shape-bg" fill="#fe595b" width="400" height="400" rx="12" ry="12" />
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
);

export const TrailDoubleDiamond = () => (
	<svg
		className="animated-shape double-diamond"
		xmlns="http://www.w3.org/2000/svg"
		width="400"
		height="400"
		viewBox="0 0 400 400"
	>
		<rect className="shape-bg" fill="#45d33c" width="400" height="400" rx="12" ry="12" />
		<path
			className="shape-back"
			fill="#FFE044"
			d="M137.21 113.73c4.61-4.611 12.36-4.611 16.97 0l77.78 77.783c4.611 4.61 4.61 12.36 0 16.97l-77.783 77.78c-4.61 4.611-12.36 4.611-16.97 0l-77.78-77.783c-4.612-4.61-4.611-12.36 0-16.97l77.782-77.78z"
		/>
		<path
			className="shape-front"
			fill="#FE595B"
			d="M245.81 113.726c4.611-4.61 12.36-4.61 16.971 0l77.78 77.784c4.611 4.61 4.611 12.36 0 16.97l-77.783 77.78c-4.61 4.611-12.36 4.611-16.97 0l-77.78-77.783c-4.611-4.61-4.611-12.36 0-16.97l77.783-77.78z"
		/>
	</svg>
);

export const TrailTriangle = () => (
	<svg
		className="animated-shape triangle"
		xmlns="http://www.w3.org/2000/svg"
		width="400"
		height="400"
		viewBox="0 0 400 400"
	>
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
);
