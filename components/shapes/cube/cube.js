const Cube = (props) => {
	return (
		<svg className={`${props.shadow == "true" ? 'shadow' : ''} cube`}
			 xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
			<g fill="none" fillRule="evenodd">
				<rect className="cube-bg" width="299.511" height="299.824" rx="4"/>
				<rect className="cube-front" width="192.347" height="192.548" x="53.1" y="53.638" rx="4" transform="rotate(90 149.274 149.912)"/>
			</g>
		</svg>
	);
};

export default Cube;
