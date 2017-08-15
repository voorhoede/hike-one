import Parallax from '../parallax/parallax';
import RectangleBorder from '../shapes/rectangle-border/rectangle-border';
import DiamondBorder from '../shapes/diamond-border/diamond-border';
import CircleBorder from '../shapes/circle-border/circle-border';
import Triangle from '../shapes/triangle/triangle';

export const variation1Front = () => (
	<div className="image-composition-shapes-1">
		<Parallax speed="1.5">
			<Triangle classes="shape-triangle-1" color="red" />
		</Parallax>
	</div>
);

export const variation2Front = () => (
	<div className="image-composition-shapes-2">
		<Parallax speed="1.25">
			<Triangle classes="shape-triangle-2" color="purple" />
		</Parallax>
	</div>
);

export const variation1Back = () => (
	<div className="image-composition-shapes-3">
		<Parallax speed="1.25">
			<CircleBorder classes="shape-triangle-3" color="purple" />
		</Parallax>
	</div>
);

export const variation2Back = () => (
	<div className="image-composition-shapes-4">
		<Parallax speed="0.875">
			<CircleBorder classes="shape-triangle-4" color="green" />
		</Parallax>
	</div>
);

export const variation3Back = () => (
	<div className="image-composition-shapes-5">
		<Parallax speed="0.875">
			<DiamondBorder classes="shape-triangle-5" color="yellow" />
		</Parallax>
	</div>
);