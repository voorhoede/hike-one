const updatesHeader = ({title = ''}) => {
	return (
		<div className="updates-header container">
			<h1 className="updates-header-title">{title}</h1>	
			<div className="updates-header-bg"></div>
		</div>
	);
};

export default updatesHeader;
