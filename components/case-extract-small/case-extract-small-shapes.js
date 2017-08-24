import Parallax from '../parallax/parallax';
import Triangle from '../shapes/triangle/triangle';

export const variation1Front = () => {
	return (
		<div className="case-extract-small-shapes">
			<Parallax speed="1.25" >
				<Triangle classes="shape-triangle-1" color="red" />
			</Parallax>
			<Parallax speed="1.5">
				<Triangle classes="shape-triangle-2" color="blue" />
			</Parallax>
		</div>
	);
};
