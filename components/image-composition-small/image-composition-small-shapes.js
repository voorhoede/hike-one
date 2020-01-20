import Parallax from '../parallax/parallax';
import { CircleBorder, DiamondBorder, Triangle } from '../shapes';

export const variation1Front = () => (
	<div className="image-composition-small-shapes-1">
		<Parallax speed="1.5">
			<Triangle classes="shape-triangle-1" color="red" />
		</Parallax>
		<Parallax speed="1.25">
			<Triangle classes="shape-triangle-2" color="purple" />
		</Parallax>
	</div>
);

export const variation1Back = () => (
	<div className="image-composition-small-shapes-1">
		<Parallax speed="0.875">
			<CircleBorder classes="shape-circle-3" color="purple" />
			<CircleBorder classes="shape-circle-4" color="green" />
			<DiamondBorder classes="shape-diamond-5" color="yellow" />
		</Parallax>
	</div>
);
