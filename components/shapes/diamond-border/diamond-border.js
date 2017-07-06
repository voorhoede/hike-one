const diamondBorder= (props) => {
	return (
		<svg className={`${props.color ? props.color : ''} ${props.classes ? props.classes : ''} shape-diamond-border`}
			xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
			<path fill="none" fillRule="evenodd" stroke="#FFE044" strokeWidth="2" d="M15.342 2.606a3 3 0 0 0-4.243 0l-8.49 8.491a3 3 0 0 0 0 4.243l8.484 8.485a3 3 0 0 0 4.243 0l8.491-8.491a3 3 0 0 0 0-4.243l-8.485-8.485z"/>
		</svg>
	);
};

export default diamondBorder;
