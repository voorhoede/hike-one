import Parallax from '../parallax/parallax';

const Collage = ({ imageMedium, imageSmall, title = '', text = '', parallaxLayerFront, parallaxLayerBack }) => {
	return (
		<section className="collage clearfix container">
			{parallaxLayerBack}
			<div className="collage-image-container">
				<img className="collage-image-medium" src={imageMedium} alt="" />
				<Parallax speed="1.1">
					<img className="collage-image-small shadow-low-opacity" src={imageSmall} alt="" />
				</Parallax>
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
