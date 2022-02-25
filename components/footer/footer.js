import { Component } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Logo from '../logo/logo';
import MailchimpForm from '../mailchimp/mailchimp-form';
import SocialMedia from '../social-media/social-media';
import Icon from '../icon/icon';

class Footer extends Component {
	constructor(props) {
		super(props);
		this.onResize = this.onResize.bind(this);
		this.handleTabClick = this.handleTabClick.bind(this);
		this.handleTabKeyDown = this.handleTabKeyDown.bind(this);
		this.resizeObserver = new ResizeObserver(this.onResize);
		this.currentYear = new Date().getFullYear();
		this.state = {
			selectedTab: 1,
		};
	}

	handleTabClick(e, newTab) {
		e.preventDefault();
		this.setState({
			selectedTab: newTab,
		});
		// focus panel
	}

	handleTabKeyDown(e, newTab) {
		let direction
		if (e.which === 40) {
			direction = 'down'
		}
		if (e.which === 37) {
			direction = newTab - 1
		}
		if (e.which === 39) {
			direction = newTab + 1
		}

		console.log('direction', direction)

		if (direction !== null) {
			e.preventDefault();

			if (direction === 'down') {
				// focus panel
			} else if (direction > 0 && direction < 4) {
				this.setState({
					selectedTab: direction,
				});
			}
		}
	}

	componentDidMount() {
		const { disableParallax } = this.props;
		this.mainContainer = document.querySelector('#__next');

		if (
			typeof window.requestAnimationFrame !== 'undefined' &&
			this.mainContainer &&
			!disableParallax
		) {
			this.resizeObserver.observe(this.footer);
		}
	}

	componentWillUnmount() {
		this.resizeObserver.disconnect();
		this.footer.classList.remove('is-fixed');
		this.mainContainer.style.paddingBottom = `0px`;
	}

	onResize(element) {
		const elementHeight = element[0].contentRect.bottom;

		if (window.innerHeight > elementHeight) {
			this.footer.classList.add('is-fixed');
			this.mainContainer.style.paddingBottom = `${elementHeight}px`;
		} else {
			this.footer.classList.remove('is-fixed');
			this.mainContainer.style.paddingBottom = `0px`;
		}
	}

	render() {
		const { careersText, form, showForm, industriesLinks, copyrightLinks } = this.props;
		const { selectedTab } = this.state;

		return (
			<footer ref={(node) => (this.footer = node)} className="footer">
				<div className="container-inner">
					<Link href="/">
						<a className="footer-logo">
							<Logo color="white" />
							<span className="a11y-sr-only">Hike one</span>
						</a>
					</Link>

					<div className="footer-main-content">
						<div className="footer-left">
							<div className="footer-links">
								<ul className="footer-links-column footer-link-list">
									<li className="footer-link-list-item">
										<Link href="/team/people">
											<a>Team</a>
										</Link>
									</li>
									<li>
										<Link href="/services-overview" as="/services">
											<a>Services</a>
										</Link>
									</li>
									<li className="footer-link-list-item">
										<Link href="/work">
											<a>Work</a>
										</Link>
									</li>
									<li className="footer-link-list-item">
										<Link href="/contact">
											<a>Contact</a>
										</Link>
									</li>
								</ul>
								<ul className="footer-links-column footer-link-list">
									<li className="footer-link-list-item">
										<Link href="/updates">
											<a>Updates</a>
										</Link>
									</li>
									<li className="footer-link-list-item">
										<Link href="/team/careers">
											<a>Careers</a>
										</Link>
									</li>
								</ul>
								<div className="footer-links-column">
									<h2 className="footer-link-list-title">Industries</h2>
									<ul className="footer-link-list">
										{industriesLinks.map(industriesLink => {
											return (
												<li
													key={industriesLink.page.slug}
													className="footer-link-list-item"
												>
													<Link href={`/topic/${industriesLink.page.slug}`}>
														<a>{industriesLink.title}</a>
													</Link>
												</li>
											)
										})}
									</ul>
								</div>
							</div>
							{showForm ? (
								<MailchimpForm
									title={form.title}
									description={form.description}
									listId={form.listId}
									buttonLabel={form.button}
									inputFields={form.extraInputFields}
									hasShadow={form.hasShadow}
								/>
							) : (
								<div className="footer-careers">
									<Link href="/team/careers">
										<a className="footer-careers__link">
											{careersText} <Icon icon="arrowRightCircle" />
										</a>
									</Link>
								</div>
							)}
						</div>

						<div className="footer-right">
							<div className="footer-contact">
								<h2 className="a11y-sr-only">Get in touch</h2>
								<a href="tel:+31-202044577" className="footer-contact-tel">
									+31 20 204 45 77
								</a>
								<a href="mailto:hello@hike.one" className="footer-contact-email">
									hello@hike.one
								</a>
							</div>
							<div className="footer-links">
								<h2 className="a11y-sr-only">Our offices</h2>

								<div className="footer-address-wrapper">
									<ul
										className="footer-address-tabs footer-link-list"
										role="tablist"
									>
										<li role="presentation">
											<a
												ref={this.tab1}
												href="section1"
												id="tab1"
												role="tab"
												className={selectedTab === 1 ? 'footer-address-tab-selected' : null}
												aria-selected={selectedTab === 1}
												tabIndex={selectedTab === 1 ? null : '-1'}
												aria-label="Amsterdam"
												onClick={(e) => this.handleTabClick(e, 1)}
												onKeyDown={(e) => this.handleTabKeyDown(e, 1)}
											>
												AMS
											</a>
										</li>
										<li role="presentation">
											<a
												ref={this.tab2}
												href="section2"
												id="tab2"
												role="tab"
												className={selectedTab === 2 ? 'footer-address-tab-selected' : null}
												aria-selected={selectedTab === 2}
												tabIndex={selectedTab === 2 ? null : '-1'}
												aria-label="Rotterdam"
												onClick={(e) => this.handleTabClick(e, 2)}
												onKeyDown={(e) => this.handleTabKeyDown(e, 1)}
											>
												RTM
											</a>
										</li>
										<li role="presentation">
											<a
												ref={this.tab3}
												href="section3"
												id="tab3"
												role="tab"
												className={selectedTab === 3 ? 'footer-address-tab-selected' : null}
												aria-selected={selectedTab === 3}
												tabIndex={selectedTab === 3 ? null : '-1'}
												aria-label="Eindhoven"
												onClick={(e) => this.handleTabClick(e, 3)}
												onKeyDown={(e) => this.handleTabKeyDown(e, 1)}
											>
												EHV
											</a>
										</li>
									</ul>
									{selectedTab === 1 && (
										<section
											id="section1"
											className="footer-address"
											role="tabpanel"
											tabIndex="-1"
											aria-labelledby="tab1"
										>
											<p>Koivistokade 70</p>
											<p>1013BB Amsterdam</p>
											<p>The Netherlands</p>
										</section>
									)}
									{selectedTab === 2 && (
										<section
											id="section2"
											className="footer-address"
											role="tabpanel"
											tabIndex="-1"
											aria-labelledby="tab2"
										>
											<p>Schiedamsedijk 40A (De Leuve)</p>
											<p>3011ED Rotterdam</p>
											<p>The Netherlands</p>
										</section>
									)}
									{selectedTab === 3 && (
										<section
											id="section3"
											className="footer-address"
											role="tabpanel"
											tabIndex="-1"
											aria-labelledby="tab3"
										>
											<p>Kastanjelaan 400 (Microlab)</p>
											<p>5616LZ Eindhoven</p>
											<p>The Netherlands</p>
										</section>
									)}
								</div>
							</div>
							<SocialMedia />
						</div>
					</div>

					<p className="footer-copyright">&copy; Hike One {this.currentYear}</p>
					{copyrightLinks.map(copyrightLink => {
						return (
							<Link
								className="footer-copyright"
								key={copyrightLink.page.slug}
								href={`/topic/${copyrightLink.page.slug}`}
							>
								<a className="footer-copyright">
									{copyrightLink.title}
								</a>
							</Link>
						)
					})}
				</div>
			</footer>
		);
	}
}

Footer.propTypes = {
	careersText: PropTypes.string.isRequired,
	disableParallax: PropTypes.bool,
	form: PropTypes.object,
	showForm: PropTypes.bool,
	industriesLinks: PropTypes.array,
	copyrightLinks: PropTypes.array,
};

export default Footer;
