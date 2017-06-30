import React from 'react';

import Parallax from '../parallax/parallax';
import Triangle from '../shapes/triangle/triangle';

class Shapes extends React.Component {
	frontLayer() {
		return (
			<Triangle classes="services-approach-triangle-1" color="green" />
		);
	}

	render() {
		return (
			<div className="services-approach-shapes">
				<Parallax frontLayer={this.frontLayer()} />
			</div>
		);
	}
}

export default Shapes;
