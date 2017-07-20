import Parallax from '../parallax/parallax';
import DiamondBorder from '../shapes/diamond-border/diamond-border';
import Triangle from '../shapes/triangle/triangle';

export const FrontLayer1 = () => {
	return (
		<div className="services-overview-small-shapes">
			<Parallax speed="1.25">
				<Triangle classes="shape-triangle-1" color="blue" />
			</Parallax>
		</div>
	);
};

export const BackLayer1 = () => {
	return (
		<div className="services-overview-small-shapes">
			<Parallax speed="0.875">
				<DiamondBorder classes="shape-diamond-1" color="green"/>
			</Parallax>
		</div>
	);
};
