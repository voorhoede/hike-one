import Parallax from '../parallax/parallax';
import DiamondBorder from '../shapes/diamond-border/diamond-border';
import CircleBorder from '../shapes/circle-border/circle-border';
import Triangle from '../shapes/triangle/triangle';

export const variation1Front = () => (
	<div className="image-composition-shapes-1">
		<Parallax speed="1.5">
			<Triangle classes="shape-triangle-1" color="green" />
		</Parallax>
		<Parallax speed="1.25">
			<Triangle classes="shape-triangle-2" color="yellow" />
		</Parallax>
	</div>
);

export const variation1Back = () => (
	<div className="image-composition-shapes-1">
		<Parallax speed="0.875">
			<CircleBorder classes="shape-circle-1" color="blue" />
			<CircleBorder classes="shape-circle-2" color="red" />
			<CircleBorder classes="shape-circle-3" color="blue" />
			<CircleBorder classes="shape-circle-4" color="red" />
			<DiamondBorder classes="shape-diamond-1" color="yellow" />
		</Parallax>
	</div>
);