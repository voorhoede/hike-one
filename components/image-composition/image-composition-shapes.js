import Parallax from '../parallax/parallax';
import DiamondBorder from '../shapes/diamond-border/diamond-border';
import CircleBorder from '../shapes/circle-border/circle-border';
import Triangle from '../shapes/triangle/triangle';

export const variation1Front = () => (
	<div className="image-composition-shapes-1">
		<Parallax speed="1.5">
			<Triangle classes="shape-triangle-1" color="red" />
		</Parallax>
		<Parallax speed="1.25">
			<Triangle classes="shape-triangle-2" color="purple" />
		</Parallax>
	</div>
);

export const variation1Back = () => (
	<div className="image-composition-shapes-2">
		<Parallax speed="0.875">
			<CircleBorder classes="shape-triangle-3" color="purple" />
			<CircleBorder classes="shape-triangle-4" color="green" />
			<DiamondBorder classes="shape-triangle-5" color="yellow" />
		</Parallax>
	</div>
);