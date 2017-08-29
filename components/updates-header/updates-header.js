const updatesHeader = ({title = '', children}) => {
	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front');
	const parallaxLayerBack = childrenArray.find(child => child.props.position === 'back');
	return (
		<div className="updates-header container">
			{parallaxLayerBack}	
			<div className="updates-header-container">
				<h1 className="updates-header-title">{title}</h1>	
				<div className="updates-header-bg"></div>
			</div>
			{parallaxLayerFront}
		</div>
	);
};

export default updatesHeader;
