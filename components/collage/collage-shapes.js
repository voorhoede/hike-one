import Parallax from '../parallax/parallax';
import DiamondBorder from '../shapes/diamond-border/diamond-border';
import Triangle from '../icons/triangle';

export const variation1Front = () => (
	<div className="collage-shapes-1">
		<Parallax speed="1.25">
			<Triangle classes="shape-triangle-1" color="blue" />
		</Parallax>
	</div>
);

export const variation1Back = () => (
	<div className="collage-shapes-1">
		<Parallax speed="0.875">
			<DiamondBorder classes="shape-diamond-1" color="green" />
		</Parallax>
	</div>
);
