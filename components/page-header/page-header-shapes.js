import CircleBorder from '../shapes/circle-border/circle-border';
import DiamondBorder from '../shapes/diamond-border/diamond-border';
import Triangle from '../shapes/triangle/triangle';
import Parallax from '../parallax/parallax';

export const variation1Front = () => (
	<div className="home-intro-shapes">
		<Parallax speed="1.25">
			<Triangle classes="shape-triangle-1" color="yellow" />
			<Triangle classes="shape-triangle-2" color="yellow" />
		</Parallax>
		<Parallax speed="1.5">
			<Triangle classes="shape-triangle-3" color="green" />
			<Triangle classes="shape-triangle-4" color="purple" />
			<Triangle classes="shape-triangle-5" color="red" />
			<Triangle classes="shape-triangle-6" color="blue" />
		</Parallax>
	</div>
);

export const variation2Front = () => (
	<div className="home-intro-shapes">
		<Parallax speed="1.25">
			<Triangle classes="shape-triangle-1" color="blue" />
		</Parallax>
		<Parallax speed="1.5">
			<Triangle classes="shape-triangle-2" color="yellow" />
			<Triangle classes="shape-triangle-3" color="purple" />
		</Parallax>
	</div>
);

export const variation1Back = () => (
	<div className="home-intro-shapes">
		<Parallax speed="1.2">
			<CircleBorder classes="shape-circle-1" color="green" />
			<DiamondBorder classes="shape-diamond-1" color="yellow" />
		</Parallax>
	</div>
);
