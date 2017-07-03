import React from 'react';

import Parallax from '../parallax/parallax';
import Triangle from '../shapes/triangle/triangle';

class Shapes extends React.Component {
	frontLayer() {
		return (
			<div>
				<Triangle classes="shape-triangle-1" color="blue" shadow/>
				<Triangle classes="shape-triangle-2" color="red" />
				<Triangle classes="shape-triangle-3" color="purple" />
				<Triangle classes="shape-triangle-4" color="yellow" />
			</div>
		);
	}

	render() {
		return (
			<div className="contact-shapes">
				<Parallax
					frontLayer={this.frontLayer()} />
			</div>
		);
	}
}

export default Shapes;
