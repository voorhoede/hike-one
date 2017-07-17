
import React from 'react';

class HomeHero extends React.Component {
	render() {
		const props = this.props;
		return( 
			<div className="container">
				<div className="container-inner home-hero" style={{backgroundImage: `url(${props.heroImage})`}}> 
				<h1 className="home-hero-heading">{props.title}</h1>
				</div>
			</div>
		)
	}
}

export default HomeHero;