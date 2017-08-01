import Parallax from '../parallax/parallax';
import RectangleBorder from '../shapes/rectangle-border/rectangle-border';
import DiamondBorder from '../shapes/diamond-border/diamond-border';
import CircleBorder from '../shapes/circle-border/circle-border';
import Triangle from '../shapes/triangle/triangle';

export const variation1Back = () => (
	<div className="text-center-shapes-1" >
		<Parallax speed="0.875">
			<RectangleBorder classes="shape-rectangle-1" color="purple"/>
		</Parallax>
	</div>
);

export const variation2Back = () => (
	<div className="text-center-shapes-2">
		<Parallax speed="0.875">
			<DiamondBorder classes="shape-diamond-1" color="yellow"/>
			<CircleBorder  classes="shape-circle-1" color="green"/>
			<CircleBorder  classes="shape-circle-2" color="purple" />
		</Parallax>
	</div>
);


export const variation2Front = () => (
	<div className="text-center-shapes-2">
		<Parallax speed="0.875">
			<Parallax speed="1.25">
				<Triangle classes="shape-triangle-1" color="red" />
			</Parallax>
		</Parallax>
	</div>
);


export const variation3Front = () => (
	<div className="text-center-shapes-3">
		<Parallax speed="1.25">
			<Triangle classes="shape-triangle-1" color="red" />
		</Parallax>
	</div>
);
