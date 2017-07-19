
import React from 'react';
import ArrowDownTriple from '../icons/arrow-down-triple/arrow-down-triple';
class HomeIntro extends React.Component {
	render() {
		const props = this.props;
		return ( 
			<div className="container">
				<div className="home-intro-overlay">
					<div className="container-inner home-intro" style={{backgroundImage: `url(${props.heroImage})`}}> 
					<h1 className="home-intro-heading">{props.title}</h1>
						<h2 className="home-intro-subheading">{props.subtitle}</h2>
						<button className="btn-clean home-intro-icon-container">
							<ArrowDownTriple  />
						</button>
					</div>
				</div>
			</div>
		)
	}
}

export default HomeIntro;