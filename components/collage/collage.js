const Collage = ({ imageMedium, imageSmall, title = '', text = '', parallaxLayerFront, parallaxLayerBack }) => {
	return (
		<section className="collage clearfix container">
			{parallaxLayerBack}
			<div className="collage-image-container">
				<img className="collage-image-medium" src={imageMedium} alt="" />
				<img className="collage-image-small shadow" src={imageSmall} alt="" />
			</div>
			<div className="collage-text-container">
				<h2 className="collage-text-title">{title}</h2>
				<p className="collage-text-description">{text}</p>
			</div>
			{parallaxLayerFront}
		</section>
	);
};

export default Collage;
