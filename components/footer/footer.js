import React 	   from 'react';
import Link  	   from 'next/link';

import Logo 	   from '../logo/logo';
import FooterLocations from '../footer-locations/footer-locations';
import SocialMedia from '../social-media/social-media';
import Icon from '../icon/icon';

class Footer extends React.Component {
	constructor() {
		super();
		this.ticking = false;
		this.onResize = this.onResize.bind(this);
		this.setFixedState = this.setFixedState.bind(this);
	}

	componentDidMount() {
		this.mainContainer = document.querySelector('.js-main');

		if (typeof window.requestAnimationFrame !== 'undefined' && this.mainContainer) {
			this.footerHeight = this.footer.getBoundingClientRect().height;
			this.setFixedState();
			window.addEventListener('resize', this.onResize);
		}
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.onResize);
	}

	setFixedState() {
		if (window.innerHeight > this.footerHeight) {
			this.footer.classList.add('is-fixed');
			this.mainContainer.style.paddingBottom = `${this.footerHeight}px`;
		} else {
			this.footer.classList.remove('is-fixed');
			this.mainContainer.style.paddingBottom = `0px`;
		}
	}

	onResize() {
		if (!this.ticking) {
			window.requestAnimationFrame(() => {
				this.setFixedState();
				this.ticking = false;
			});
		}

		this.ticking = true;
	}

	render() {
		return (
			<footer ref={node => this.footer = node} className="footer">
				<div className="container-inner">
					<Link href="/">
						<a className="footer-logo">
							<Logo color="white"/>
							<h1 className="a11y-sr-only">Hike one</h1>
						</a>
					</Link>

					<div className="footer-main-content">
						<div className="footer-left">
							<div className="footer-links">
								<ul className="footer-link-list">
									<li><Link href="/team"><a>Team</a></Link></li>
									<li><Link href="/services"><a>Services</a></Link></li>
									<li><Link href="/work"><a>Work</a></Link></li>
									<li><Link href="/contact"><a>Contact</a></Link></li>
									<li><Link href="/updates"><a>Updates</a></Link></li>
									<li><Link href="/playground"><a>Playground</a></Link></li>
								</ul>
							</div>
							<a className="footer-join-link" href="https://hikeone.homerun.co/" target="_blank">
								Up for a new challenge yourself? Join us! <Icon icon="arrowRightCircle" />
							</a>
						</div>

						<div className="footer-right">
							<div className="footer-contact">
								<a href="tel:31 20 204 45 77" className="footer-contact-tel">+31 20 204 45 77</a>
								<a href="mailto:hello@hike.one" className="footer-contact-email">hello@hike.one</a>
							</div>

							<FooterLocations />
							<SocialMedia />
						</div>
					</div>

					<p className="footer-copyright">@ Hike One 2017</p>
				</div>
			</footer>
		);
	}
}

export default Footer;
