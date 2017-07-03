import React from 'react';

import Parallax from '../parallax/parallax';
import CircleBorder from '../shapes/circle-border/circle-border';
import DiamondBorder from '../shapes/diamond-border/diamond-border';
import RectangleBorder from '../shapes/rectangle-border/rectangle-border';
import Triangle from '../shapes/triangle/triangle';

class Shapes extends React.Component {
	backLayer() {
		return (
			<div>
				<RectangleBorder classes="shape-rectangle-1" color="purple"/>
				<DiamondBorder classes="shape-diamond-1" color="yellow"/>
				<CircleBorder classes="shape-circle-1" color="green" />
			</div>
		);
	}

	frontLayer() {
		return (
			<div>
				<Triangle classes="shape-triangle-1" color="red" />
				<Triangle classes="shape-triangle-2" color="purple" />
				<Triangle classes="shape-triangle-3" color="blue" shadow/>
				<Triangle classes="shape-triangle-4" color="yellow" />
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
