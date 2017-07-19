import Parallax from '../parallax/parallax';
import RectangleBorder from '../shapes/rectangle-border/rectangle-border';

export const BackLayer1 = () => {
	return (
		<div className="case-text-center-shapes">
			<Parallax speed="0.875">
				<RectangleBorder classes="shape-rectangle-1" color="purple"/>
			</Parallax>
		</div>
	);
};
