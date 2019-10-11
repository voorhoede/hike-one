import Parallax from '../parallax/parallax';
import CircleBorder from '../shapes/circle-border/circle-border';
import DiamondBorder from '../shapes/diamond-border/diamond-border';
import Triangle from '../icons/triangle';

export const TextRightSmall1Front = () => (
	<div className="fifty-fifty-shapes-1">
		<Parallax speed="1.25">
			<Triangle classes="shape-triangle-1" color="red" />
		</Parallax>
	</div>
);

export const TextLeftSmall1Back = () => (
	<div className="fifty-fifty-shapes-2">
		<Parallax speed="0.875">
			<DiamondBorder classes="shape-diamond-1" color="yellow" />
			<CircleBorder classes="shape-circle-1" color="green" />
		</Parallax>
	</div>
);

export const TextRight1Back = () => (
	<div className="fifty-fifty-shapes-3">
		<Parallax speed="0.875">
			<CircleBorder classes="shape-circle-1" color="blue" />
		</Parallax>
	</div>
);
