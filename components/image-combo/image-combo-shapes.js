import Parallax from '../parallax/parallax';
import Triangle from '../icons/triangle';

export const WithText1Front = () => (
	<div className="image-combo-shapes-1">
		<Parallax speed="1.25">
			<Triangle classes="shape-triangle-1" color="red" />
			<Triangle classes="shape-triangle-2" color="green" />
		</Parallax>
	</div>
);

export const WithoutText1Front = () => (
	<div className="image-combo-shapes-2">
		<Parallax speed="1.25">
			<Triangle classes="shape-triangle-1" color="yellow" />
			<Triangle classes="shape-triangle-2" color="purple" />
		</Parallax>
	</div>
);
