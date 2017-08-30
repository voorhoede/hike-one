import Parallax from '../parallax/parallax';
import DiamondBorder from '../shapes/diamond-border/diamond-border';
import Triangle from '../shapes/triangle/triangle';
import CircleBorder from '../shapes/circle-border/circle-border';

export const variation2Front = () => (
	<div className="updates-header-shapes">
		<Parallax speed="1.25">
			<Triangle classes="shape-triangle-1" color="blue" />
		</Parallax>
		<Parallax speed="1.5">
			<Triangle classes="shape-triangle-2" color="yellow" />
			<Triangle classes="shape-triangle-3" color="green" />
			<Triangle classes="shape-triangle-4" color="purple" />
		</Parallax>
	</div>
);

export const variation1Back = () => (
	<div className="updates-header-shapes">
		<Parallax speed="0.875">
			<DiamondBorder classes="shape-diamond-1" color="purple"/>
			<CircleBorder  classes="shape-circle-1" color="blue"/>
		</Parallax>
	</div>
);