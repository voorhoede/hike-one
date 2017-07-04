import React from 'react';

import Parallax from '../parallax/parallax';
import CircleBorder from '../shapes/circle-border/circle-border';
import Triangle from '../shapes/triangle/triangle';
import DiamondBorder from '../shapes/diamond-border/diamond-border';

class Shapes extends React.Component {
	backLayer() {
		return (
			<div>
				<CircleBorder classes="shape-circle-1" color="blue" />
				<DiamondBorder classes="shape-diamond-1" color="yellow"/>
			</div>
		);
	}

	frontLayer() {
		return (
			<Triangle classes="shape-triangle-1" color="red" shadow/>
		);
	}

	render() {
		return (
			<div className="services-overview-shapes">
				<Parallax
					backLayer={this.backLayer()}
					frontLayer={this.frontLayer()} />
			</div>
		);
	}
}

export default Shapes;
