import Parallax from '../parallax/parallax';
import Triangle from '../shapes/triangle/triangle';

const ShapesFront = () => (
	<div className="services-approach-shapes parallax-layer">
		<Parallax speed="1.25">
			<Triangle classes="shape-triangle-1" color="green" />
		</Parallax>
	</div>
);


export default ShapesFront;
