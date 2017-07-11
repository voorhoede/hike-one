const ImageCombo = (props) => {
	return (
		<div className={`${props.classes ? props.classes : '' } image-combo` }>
			{ props.children }
		</div>
	);
};

export default ImageCombo;
