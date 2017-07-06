const circleBorder= (props) => {
	return (
		<svg className={`${props.color ? props.color : ''} ${props.classes ? props.classes : ''} shape-circle-border`}
			xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33">
			<ellipse cx="345" cy="897.17" fill="none" fillRule="evenodd" stroke="#45D33C" strokeWidth="2" rx="15" ry="15.17" transform="translate(-329 -881)"/>
		</svg>
	);
};

export default circleBorder;





