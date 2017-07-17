
import React from 'react';
import ArrowDown from '../icons/arrow-down-round/arrow-down-round';
class HomeHero extends React.Component {
	render() {
		const props = this.props;
		return( 
			<div className="container">
				<div className="container-inner home-hero" style={{backgroundImage: `url(${props.heroImage})`}}> 
					<h1 className="home-hero-heading">{props.title}</h1>
					<h2 className="home-hero-subheading">{props.subtitle}</h2>
					<div className="home-hero-icon-container">
						<ArrowDown  />
					</div>
				</div>
			</div>
		)
	}
}

export default HomeHero;