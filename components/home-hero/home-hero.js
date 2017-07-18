
import React from 'react';
import ArrowDownTriple from '../icons/arrow-down-triple/arrow-down-triple';
class HomeHero extends React.Component {
	render() {
		const props = this.props;
		return ( 
			<div className="container">
				<div className="home-hero-overlay">
					<div className="container-inner home-hero" style={{backgroundImage: `url(${props.heroImage})`}}> 
					<h1 className="home-hero-heading">{props.title}</h1>
						<h2 className="home-hero-subheading">{props.subtitle}</h2>
						<div className="home-hero-icon-container">
							<ArrowDownTriple  />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default HomeHero;