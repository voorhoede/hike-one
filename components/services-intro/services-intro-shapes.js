import React from 'react';

import Parallax from '../parallax/parallax';
import CircleBorder from '../shapes/circle-border/circle-border';
import DiamondBorder from '../shapes/diamond-border/diamond-border';
import RectangleBorder from '../shapes/rectangle-border/rectangle-border';
import Triangle from '../shapes/triangle/triangle';

class Shapes extends React.Component {
	constructor() {
		super();
	}

	backLayer() {
		return (
			<div>
				<RectangleBorder classes="services-intro-rectangle-1" color="red"/>
				<DiamondBorder classes="services-intro-diamond-1" color="yellow"/>
				<CircleBorder classes="services-intro-circle-1" color="green" />
			</div>
		);
	}

	frontLayer() {
		return (
			<div>
				<Triangle classes="services-intro-triangle-1" color="red" />
				<Triangle classes="services-intro-triangle-2" color="purple" />
				<Triangle classes="services-intro-triangle-3" color="blue" shadow/>
				<Triangle classes="services-intro-triangle-4" color="yellow" />
			</div>
		);
	}

	render() {
		return (
			<div className="services-intro-shapes">
				<Parallax
					backLayer={this.backLayer()}
					frontLayer={this.frontLayer()} />
			</div>
		);
	}
}

export default Shapes;
