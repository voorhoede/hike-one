import React from 'react';

import Parallax from '../parallax/parallax';
import CircleBorder from '../shapes/circle-border/circle-border';
import Triangle from '../shapes/triangle/triangle';
import DiamondBorder from '../shapes/diamond-border/diamond-border';

class Shapes extends React.Component {
	render() {
		return (
			<div className="services-overview-shapes">

				<Parallax speed="0.3">
					<CircleBorder classes="shape-circle-1" color="blue" />
					<DiamondBorder classes="shape-diamond-1" color="yellow"/>
				</Parallax>

				<Parallax speed="-0.3">
					<Triangle classes="shape-triangle-1" color="red" shadow />
				</Parallax>

			</div>
		);
	}
}

export default Shapes;
