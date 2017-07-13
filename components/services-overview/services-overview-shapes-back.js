import Parallax from '../parallax/parallax';
import CircleBorder from '../shapes/circle-border/circle-border';
import DiamondBorder from '../shapes/diamond-border/diamond-border';

const ShapesBack = () => {
	return (
		<div className="services-intro-shapes parallax-layer">
			<Parallax speed="0.25">
				<CircleBorder classes="shape-circle-1" color="blue" />
				<DiamondBorder classes="shape-diamond-1" color="yellow"/>
			</Parallax>
		</div>
	);
};

export default ShapesBack;
