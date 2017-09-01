const pageHeaderSmall = ({title = '', children, classes = ''}) => {
	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front');
	const parallaxLayerBack = childrenArray.find(child => child.props.position === 'back');
	return (
		<div className={`page-header-small container ${classes}`}>
			{parallaxLayerBack}
			<div className="page-header-small-container">
				<h1 className="page-header-small-title">{title}</h1>
			</div>
			{parallaxLayerFront}
		</div>
	);
};

export default pageHeaderSmall;
