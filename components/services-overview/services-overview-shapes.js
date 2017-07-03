import React from 'react';

import Parallax from '../parallax/parallax';
import CircleBorder from '../shapes/circle-border/circle-border';
import Triangle from '../shapes/triangle/triangle';

class Shapes extends React.Component {
	backLayer() {
		return (
			<CircleBorder classes="services-overview-circle-1" color="blue" />
		);
	}

	frontLayer() {
		return (
			<Triangle classes="services-overview-triangle-1" color="red" shadow/>
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
