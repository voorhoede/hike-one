import { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ResizeObserver from 'resize-observer-polyfill';

import ContextMenu from '../context-menu/context-menu';
import Hamburger from '../icons/hamburger/hamburger';
import Facebook from '../icons/facebook-circle';
import Instagram from '../icons/instagram-circle';
import LinkedIn from '../icons/linkedin-circle';
import Medium from '../icons/medium-circle';
import Twitter from '../icons/twitter-circle';
import Logo from '../logo/logo';
import { Power3, TimelineLite } from 'gsap';

class MenuBar extends Component {
	constructor(props) {
		super(props);
		this.handleScroll = this.handleScroll.bind(this);
		this.onResize = this.onResize.bind(this);
		this.setAnimationTimeline = this.setAnimationTimeline.bind(this);
		this.setInitialValues = this.setInitialValues.bind(this);
		this.toggleContextMenu = this.toggleContextMenu.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
		this.disableScrollClass = 'disable-scroll';
		this.state = {
			contextMenuIsOpen: false,
			menuIsOpen: false,
			scrolling: false,
		};

		this.resizeObserver = new ResizeObserver(this.onResize);
	}

	componentDidMount() {
		this.setInitialValues();
		this.setAnimationTimeline();
		this.resizeObserver.observe(this.header);
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		this.resizeObserver.disconnect();
		window.removeEventListener('scroll', this.handleScroll);
	}

	setInitialValues() {
		this.windowWidth = document.body.clientWidth || document.documentElement.clientWidth || 0;
		const svgBgRect = this.menuBg.getBoundingClientRect();
		const svgBgHelperRect = this.menuBgRect.getBoundingClientRect();

		// how much % should the background svg cover.
		// On smaller screens it should cover 100%. To accomplish this the value is set on 200%
		let bgCoverPercentage = {};
		if (window.matchMedia('(min-width: 1919px)').matches) {
			// large screens
			bgCoverPercentage = 0.47;
		} else if (window.matchMedia('(min-width: 767px)').matches) {
			// medium screens
			bgCoverPercentage = 0.7;
		} else {
			// small screens
			bgCoverPercentage = 2;
		}

		// calculate how large the scale of the background svg should be on this screensize
		this.scale = Math.round((this.windowWidth * bgCoverPercentage) / svgBgHelperRect.width);

		this.svgHeight = svgBgRect.height * this.scale;
		this.svgWidth = svgBgRect.width * this.scale;

		// calculate offset from top for background svg after scaling
		const yDiff = svgBgRect.top - svgBgHelperRect.top;
		this.yOffset = Math.round(yDiff * this.scale);

		// calculate offset from right for background svg after scaling
		const xDiff = svgBgHelperRect.right - svgBgRect.left;
		const xOffsetHelperRect = xDiff / svgBgRect.width;
		this.xOffset = Math.round(svgBgRect.width * this.scale * xOffsetHelperRect + svgBgRect.width);

		// calculate offset from right for background svg that is placed after animation is done
		const xDiff2 = svgBgHelperRect.right - svgBgRect.right;
		this.xOffset2 = Math.round(xDiff2 * this.scale);
	}

	setAnimationTimeline() {
		this.tlMenu = new TimelineLite();
		this.tlMenu
			.pause()
			.set(this.menuBg, { clearProps: 'all' })
			.set(this.menuList.childNodes, { clearProps: 'all' })
			.add('startAnimation')
			.to(this.menuBgTransparent, 0.25, { opacity: 0.4 }, 'startAnimation')
			.to(
				this.menuBg,
				0.25,
				{
					scale: this.scale,
					x: -this.xOffset,
					top: this.yOffset,
					ease: Power3.easeInOut,
				},
				'-=0.2'
			)
			.set(this.menuBg, { opacity: 0 }, '-=0.1')
			.set(
				this.menuBgSvgFinal,
				{
					height: this.svgHeight,
					width: this.svgWidth,
					right: this.xOffset2,
					y: this.yOffset,
				},
				'-=0.1'
			)
			.set(this.menuBgSvgFinal, { opacity: 1 }, '-=0.1')
			.staggerTo(
				this.menuList.childNodes,
				0.2,
				{
					opacity: 1,
					x: 0,
					y: 0,
					ease: Power3.easeInOut,
				},
				0.05,
				'-=0.25'
			)
			.staggerTo(
				this.socialIcons.childNodes,
				0.15,
				{
					x: 0,
					opacity: 1,
					ease: Power3.easeInOut,
				},
				0.05,
				'-=0.2'
			);
	}

	toggleMenu() {
		const { menuIsOpen } = this.state;
		document.body.classList.toggle(this.disableScrollClass);
		setTimeout(() => {
			if (this.header === null) return;

			this.header.classList.toggle('animation-is-finished');
			this.header.classList.toggle('is-open');
		}, 100);

		if (menuIsOpen) {
			this.hamburger.reverseAnimation();
			this.tlMenu.timeScale(1.75).reverse();
		} else {
			this.hamburger.playAnimation();
			this.tlMenu.timeScale(1).play();
		}

		this.setState({ menuIsOpen: !menuIsOpen });
	}

	toggleContextMenu(e) {
		e.preventDefault();
		const { contextMenuIsOpen } = this.state;

		this.setState({ contextMenuIsOpen: !contextMenuIsOpen });
	}

	onResize(entries) {
		const { menuIsOpen } = this.state;

		entries.forEach((entry) => {
			if (menuIsOpen && this.windowWidth !== entry.contentRect.width) {
				// close menu
				this.tlMenu.timeScale(5).reverse();
				// revert hamburger icon
				this.hamburger.reverseAnimation();
				document.body.classList.remove(this.disableScrollClass);
				this.setState({ menuIsOpen: false });
			}

			if (this.windowWidth !== entry.contentRect.width) {
				this.setInitialValues();
				this.setAnimationTimeline();
			}
		});
	}

	handleScroll() {
		const { scrolling } = this.state;
		const scrollingDisabled = document.body.classList.contains(this.disableScrollClass);

		if (window.scrollY < 25 && scrolling === true && !scrollingDisabled) {
			this.setState({ scrolling: false });
		} else if (window.scrollY >= 25 && scrolling !== true && !scrollingDisabled) {
			this.setState({ scrolling: true });
		}
	}

	render() {
		const { color } = this.props;
		const { contextMenuIsOpen, scrolling } = this.state;

		return (
			<header
				ref={(node) => (this.header = node)}
				className={`menu-bar ${color === 'white' ? 'menu-bar--white' : ''} ${
					scrolling ? 'menu-bar--scrolling' : ''
				}`}
			>
				<div className="header-logo-wrapper">
					<Link href="/">
						<a className="header-logo" onContextMenu={this.toggleContextMenu}>
							<Logo color={color ? color : 'black'} />
							<span className="a11y-sr-only">Hike one</span>
						</a>
					</Link>
					<ContextMenu isOpen={contextMenuIsOpen} />
				</div>

				<div className="menu-bar__contact">
					<Link href="/contact?utm_source=navigation&utm_medium=button&utm_campaign=contact">
						<a className="menu-bar__contact-link">Contact</a>
					</Link>
				</div>

				<button type="button" className="menu-btn" onClick={(e) => this.toggleMenu(e)}>
					<svg
						className="menu-btn-background"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 17 19"
					>
						<path d="M.446.011l16.287 4.156a.35.35 0 0 1 .214.523L8.16 18.832a.36.36 0 0 1-.634-.052L.026.483A.35.35 0 0 1 .223.026.361.361 0 0 1 .446.01z" />
					</svg>

					<span className="menu-btn-icon">
						<Hamburger ref={(node) => (this.hamburger = node)} />
					</span>
				</button>

				<div
					className="menu"
					ref={(node) => (this.menu = node)}
					onClick={(e) => this.toggleMenu(e)}
				>
					<div
						ref={(node) => (this.menuBgTransparent = node)}
						className="menu-background-transparent"
					/>

					<svg
						className="menu-background"
						ref={(node) => (this.menuBg = node)}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="226 1.7 268 305"
					>
						<polygon points="226, 1.7 494,71 349,307" />
					</svg>

					<svg
						className="menu-background-final"
						ref={(node) => (this.menuBgSvgFinal = node)}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="226 1.7 268 305"
					>
						<polygon points="226, 1.7 494,71 349,307" />
					</svg>

					<svg
						className="menu-background"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="225.979 1.727 267.839 305.383"
					>
						<polygon points="225.979,1.727 493.818,71.084 349.311,307.109 " />
						<rect
							ref={(node) => (this.menuBgRect = node)}
							className="menu-background-rect"
							x="253.643"
							y="71.084"
							fill="transparent"
							width="96"
							height="236.025"
						/>
					</svg>

					<div className="menu-inner" ref={(node) => (this.menuInner = node)}>
						<ul className="menu-list" ref={(node) => (this.menuList = node)}>
							<li className="menu-item-logo">
								<Link href="/">
									<a>
										<Logo color="white" />
									</a>
								</Link>
							</li>
							<li className="menu-item">
								<Link href="/team/culture">
									<a>Team</a>
								</Link>
							</li>
							<li className="menu-item">
								<Link href="/services">
									<a>Services</a>
								</Link>
							</li>
							<li className="menu-item">
								<Link href="/work">
									<a>Work</a>
								</Link>
							</li>
							<li className="menu-item">
								<Link href="/updates">
									<a>Updates</a>
								</Link>
							</li>
							<li className="menu-item menu-item-last">
								<Link href="/contact">
									<a>Contact</a>
								</Link>
							</li>
							<li>
								<div className="menu-social" ref={(node) => (this.socialIcons = node)}>
									<a
										href="https://www.facebook.com/HikeOne/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Facebook />
									</a>
									<a
										href="https://twitter.com/realhikeone"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Twitter />
									</a>
									<a
										href="https://www.linkedin.com/company/356831/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<LinkedIn />
									</a>
									<a href="https://medium.com/@HikeOne" target="_blank" rel="noopener noreferrer">
										<Medium />
									</a>
									<a
										href="https://www.instagram.com/hike.one/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Instagram />
									</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</header>
		);
	}
}

MenuBar.propTypes = {
	color: PropTypes.string,
};

export default MenuBar;
