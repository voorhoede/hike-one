import Parallax from '../parallax/parallax';
import Triangle from '../shapes/triangle/triangle';

const ShapesFront = () => {
	return (
		<div className="services-intro-shapes">
			<Parallax speed="1.25">
				<Triangle classes="shape-triangle-2" color="purple" />
				<Triangle classes="shape-triangle-4" color="yellow" />
			</Parallax>
			<Parallax speed="1.5">
				<Triangle classes="shape-triangle-1" color="red" />
				<Triangle classes="shape-triangle-3" color="blue" />
			</Parallax>
		</div>
	);
};

export default ShapesFront;
