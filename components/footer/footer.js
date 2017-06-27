import React 	   from 'react';
import Link  	   from 'next/link';

import Logo 	   from '../logo/logo';
import SocialMedia from '../social-media/social-media';

import ArrowRight  from '../icons/arrow-right/arrow-right';

class Footer extends React.Component {

	toggleLocationInfo(target) {
		document.querySelector('.locations .active').classList.remove('active')
		document.querySelector(`.locations [data-target='${target}']`).classList.add('active')

		document.querySelector('.locations-info .active').classList.remove('active')
		document.querySelector(`.locations-info .${target}`).classList.add('active')
	}

	render() {
		return (
			<footer className="footer">
				<div className="container">
					<Link href="/" >
						<a className="header-logo">
							<Logo color="full-white"/>
							<h1 className="a11y-sr-only">Hike one</h1>
						</a>
					</Link>

					<div className="footer-main-content">
						<div className="left">
							<div className="core-lists">
								<ul className="no-style core-items">
									<li><Link href="#"><a>Design</a></Link></li>
									<li><Link href="#"><a>Research</a></Link></li>
									<li><Link href="#"><a>Strategy</a></Link></li>
									<li><Link href="#"><a>Training</a></Link></li>
								</ul>

								<ul className="no-style sub-core-items">
									<li><Link href="#"><a>Team</a></Link></li>
									<li><Link href="#"><a>Services</a></Link></li>
									<li><Link href="#"><a>Work</a></Link></li>
									<li><Link href="#"><a>Contact</a></Link></li>
									<li><Link href="#"><a>Updates</a></Link></li>
									<li><Link href="#"><a>Playground</a></Link></li>
								</ul>
							</div>

							<Link href="#"><a className="join-us-button">Up for a new challenge yourself? Join us! <ArrowRight /> </a></Link>
						</div>

						<div className="right">
							<div className="phone-and-email">
								<div className="phone-number">+31 20 204 45 77</div>
								<Link href="mailto:hello@hike.one"><a className="email-adress">hello@hike.one</a></Link>
							</div>

							<div>
								<ul className="no-style locations">
									<li><button onClick={this.toggleLocationInfo.bind(this, 'ams')} className="active" data-target="ams">Ams</button></li>

									<li><button onClick={this.toggleLocationInfo.bind(this, 'rtm')} data-target="rtm">Rtm</button></li>

									<li><button onClick={this.toggleLocationInfo.bind(this, 'ein')} data-target="ein">Ein</button></li>
								</ul>

								<div className="locations-info">
									<div className="ams active">
										<p>Rijnsburgstraat 9-11</p>
										<p>1059AT Amsterdam</p>
									</div>

									<div className="rtm">
										<p>Schiedamsedijk 40a</p>
										<p>3011ED Rotterdam</p>
									</div>

									<div className="ein">
										<p>Rijnsburgstraat 9-11</p>
										<p>1059AT Amsterdam</p>
									</div>
								</div>
							</div>

							<SocialMedia />
						</div>
					</div>

					<p className="copyright">@ Hike One 2017</p>
				</div>
			</footer>
		);
	}
}

export default Footer;
