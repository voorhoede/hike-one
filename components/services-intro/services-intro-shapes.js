import React from 'react';

import CircleBorder from '../shapes/circle-border/circle-border';
import DiamondBorder from '../shapes/diamond-border/diamond-border';
import RectangleBorder from '../shapes/rectangle-border/rectangle-border';
import Triangle from '../shapes/triangle/triangle';

class Shapes extends React.Component {
	render() {
		return (
			<div className="services-intro-shapes">
				<div className="shapes-back">
					<RectangleBorder classes="services-intro-rectangle-1" color="red"/>
					<DiamondBorder classes="services-intro-diamond-1" color="yellow"/>
					<CircleBorder classes="services-intro-circle-1" color="green" />
				</div>
				<div className="shapes-front">
					<Triangle classes="services-intro-triangle-1" color="red" />
					<Triangle classes="services-intro-triangle-2" color="purple" />
					<Triangle classes="services-intro-triangle-3" color="blue" shadow/>
					<Triangle classes="services-intro-triangle-4" color="yellow" />
				</div>
			</div>
		);
	}
}

export default Shapes;
