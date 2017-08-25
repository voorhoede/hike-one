import React 	   from 'react';
import Link  	   from 'next/link';
class FooterLocations extends React.Component {
	constructor() {
		super();
		this.state = {
			location: 'ams'
		};
	}

	render() {
		return (
			<div className="footer-locations">
				<ul className="no-style footer-locations-list">
					<li>
						<button onClick={() => this.setState({location:'ams'})}
								className={this.state.location === 'ams' ? 'is-active' : ''}>
						Ams </button>
					</li>

					<li>
						<button onClick={() => this.setState({location:'rtm'})}
								className={this.state.location === 'rtm' ? 'is-active' : ''}>
						Rtm </button>
					</li>

					<li>
						<button onClick={() => this.setState({location:'ehv'})}
								className={this.state.location === 'ehv' ? 'is-active' : ''}>
						Ehv </button>
					</li>
				</ul>

				<div className="footer-locations-info">
					<div className={this.state.location === 'ams' ? 'is-active' : ''}>
						<a href="https://www.google.com/maps/place/UNITiD+B.V.+Amsterdam" target="_blank">
							<p>Rijnsburgstraat 9-11</p>
							<p>1059AT Amsterdam</p>
						</a>
					</div>

					<div className={this.state.location === 'rtm' ? 'is-active' : ''}>
						<a href="https://www.google.com/maps/place/UNITiD+B.V.+Rotterdam" target="_blank">
							<p>Schiedamsedijk 40a</p>
							<p>3011ED Rotterdam</p>
						</a>
					</div>

					<div className={this.state.location === 'ehv' ? 'is-active' : ''}>
						<a href="#eindhoven" target="_blank">
							<p>Rijnsburgstraat 9-11</p>
							<p>1059AT Amsterdam</p>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default FooterLocations;
