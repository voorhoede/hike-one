const Diamond = (props) => {
	return (
		<svg className={`${props.shadow == "true" ? 'shadow' : ''} diamond`}
			 xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
			<g fill="none" fillRule="evenodd">
				<rect className="bg" width="299.848" height="299.973" rx="4"/>
				<rect className="front" width="144.23" height="144.29" x="77.607" y="79.804" rx="4" transform="rotate(45 149.722 151.95)"/>
			</g>
		</svg>
	);
};

export default Diamond;
