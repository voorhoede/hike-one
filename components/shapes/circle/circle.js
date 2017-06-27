const Circle = (props) => {
	return (
		<svg className={`${props.shadow == "true" ? 'shadow' : ''} circle`}
			 xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
			<g fill="none" fillRule="evenodd">
				<rect className="circle-bg" width="299.511" height="299.824" rx="4"/>
				<circle className="circle-front" cx="150" cy="150" r="100" />
			</g>
		</svg>
	);
};

export default Circle;
