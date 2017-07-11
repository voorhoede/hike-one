import React from 'react';

import Parallax from '../parallax/parallax';
import Triangle from '../shapes/triangle/triangle';

class Shapes extends React.Component {
	render() {
		return (
			<div className="services-approach-shapes">
				<Parallax speed="-0.3">
					<Triangle classes="shape-triangle-1" color="green" />
				</Parallax>
			</div>
		);
	}
}

export default Shapes;
