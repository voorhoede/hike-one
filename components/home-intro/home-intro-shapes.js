import Parallax from '../parallax/parallax';
import DiamondBorder from '../shapes/diamond-border/diamond-border';
import CircleBorder from '../shapes/circle-border/circle-border';
import Triangle from '../shapes/triangle/triangle';

export const FrontLayer1 = () => {
	return (
		<div className="home-intro-shapes">
			<Parallax speed="1.25">
				<Triangle classes="shape-triangle-1" color="green" />
			</Parallax>
			<Parallax speed="1.5">
				<Triangle classes="shape-triangle-2" color="yellow" />
				<Triangle classes="shape-triangle-3" color="purple" />
			</Parallax>
		</div>
	);
};

export const BackLayer1 = () => {
	return (
		<div className="home-intro-shapes">
			<Parallax speed="0.875">
				<DiamondBorder classes="shape-diamond-1" color="purple"/>
			</Parallax>
		</div>
	);
};
