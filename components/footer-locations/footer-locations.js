import React 	   from 'react';

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
						<button onClick={() => this.setState({location:'ein'})}
								className={this.state.location === 'ein' ? 'is-active' : ''}>
						Ein </button>
					</li>
				</ul>

				<div className="footer-locations-info">
					<div className={this.state.location === 'ams' ? 'is-active' : ''}>
						<p>Rijnsburgstraat 9-11</p>
						<p>1059AT Amsterdam</p>
					</div>

					<div className={this.state.location === 'rtm' ? 'is-active' : ''}>
						<p>Schiedamsedijk 40a</p>
						<p>3011ED Rotterdam</p>
					</div>

					<div className={this.state.location === 'ein' ? 'is-active' : ''}>
						<p>Rijnsburgstraat 9-11</p>
						<p>1059AT Amsterdam</p>
					</div>
				</div>
			</div>
		);
	}
}

export default FooterLocations;
