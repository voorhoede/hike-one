import Parallax from '../parallax/parallax';
import CircleBorder from '../shapes/circle-border/circle-border';
import DiamondBorder from '../shapes/diamond-border/diamond-border';
import RectangleBorder from '../shapes/rectangle-border/rectangle-border';

const ShapesBack = ({}) => {
	return (
		<div className="services-intro-shapes parallax-layer">
			<Parallax speed="0.875">
				<RectangleBorder classes="shape-rectangle-1" color="purple"/>
				<DiamondBorder classes="shape-diamond-1" color="yellow"/>
				<CircleBorder classes="shape-circle-1" color="green" />
			</Parallax>
		</div>
	);
};

export default ShapesBack;
