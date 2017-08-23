import React from 'react';
import Link from 'next/link';

import Logo			from '../logo/logo';
import Triangle from '../shapes/triangle/triangle';
import Hamburger 	from '../icons/hamburger';
import Cross 		from '../icons/hamburger-close';

import Facebook   from '../icons/facebook-circle';
import Twitter 	  from '../icons/twitter-circle';
import Instagram  from '../icons/instagram-circle';
import LinkedIn   from '../icons/linkedin-circle';
import Medium 	  from '../icons/medium-circle';

import {TweenLite, Power3, TimelineLite}  from 'gsap';

class Header extends React.Component {
	constructor() {
		super();
		this.toggleMenu = this.toggleMenu.bind(this);
		this.setInitialValues = this.setInitialValues.bind(this);
		this.setAnimationTimeline = this.setAnimationTimeline.bind(this);
		this.onResize = this.onResize.bind(this);
		this.state = {
			hamburger: false,
			menuIsOpen: false
		};
		this.disableScrollClass = 'disable-scroll';
	}

	componentDidMount() {
		this.setInitialValues();
		this.setAnimationTimeline();
		window.addEventListener('resize', this.onResize);
	}

	componentWillUnmount() {
		document.body.classList.remove(this.disableScrollClass);
		window.removeEventListener('resize', this.onResize);
	}

	setInitialValues() {
		const windowWidth = document.body.clientWidth || document.documentElement.clientWidth || 0;
		const svgBgRect = this.menuBg.getBoundingClientRect();
		const svgBgHelperRect = this.menuBgRect.getBoundingClientRect();

		// how much % should the background svg cover.
		// On smaller screens it should cover 100%. To accomplish this the value is set on 200%
		const bgCoverPercentage = window.matchMedia("(max-width: 767px)").matches ? 2 : 0.7;

		// calculate how large the scale of the background svg should be on this screensize
		this.scale = Math.round((windowWidth * bgCoverPercentage) / svgBgHelperRect.width);

		this.svgHeight = svgBgRect.height * this.scale;
		this.svgWidth = svgBgRect.width * this.scale;

		// calculate offset from top for background svg after scaling
		const yDiff = svgBgRect.top - svgBgHelperRect.top;
		this.yOffset = Math.round(yDiff * this.scale);

		// calculate offset from right for background svg after scaling
		const xDiff = ( svgBgHelperRect.right - svgBgRect.left);
		const xOffsetHelperRect = (xDiff / svgBgRect.width);
		this.xOffset = Math.round((svgBgRect.width * this.scale) * xOffsetHelperRect + svgBgRect.width);

		// calculate offset from right for background svg that is placed after animation is done
		const xDiff2 = (svgBgHelperRect.right - svgBgRect.right);
		this.xOffset2 = Math.round(xDiff2 * this.scale);
	}

	setAnimationTimeline() {
		this.tlMenu = new TimelineLite({paused: true});
		this.tlMenu
			.set(this.menu, {clearProps:'all'})
			.set(this.menuInner, {clearProps: 'all'})
			.set(this.menuList.childNodes, {clearProps: 'all'})
			.set(this.socialIcons.childNodes, {clearProps: 'all'})
			.set(this.menuBgTransparent, {clearProps:'all'})
			.set(this.menuBg, {clearProps:'all'})
			.set(this.menuBtnBg, {clearProps: 'all'})
			.set(this.menuBgSvgFinal, {clearProps: 'all'})
			.set(this.header, {clearProps:'all'})
			.set(this.menu, {display: 'block'})
			.set(this.menuInner, {right: 0})
			.set(this.menuBgTransparent, {display: 'block'})
			.set(this.menuBg, {opacity: 1})
			.set(this.menuBtnBg, {opacity: 0})
			.set(this.menuList.childNodes, {opacity: 0})
			.set(this.socialIcons.childNodes, {opacity: 0})
			.set(this.header, {className:'-=animation-is-finished'})
			.set(this.header, {className:'+=is-open'})
			.from(this.menuBgTransparent, 0.25, {opacity: 0}, 0)
			.to(this.menuBg, 0.25, {
				scale: this.scale,
				x: -this.xOffset,
				top: this.yOffset,
				ease: Power3.easeInOut
			}, 0.05)
			.set(this.menuBg, {opacity: 0}, '-=0.1')
			.set(this.menuBgSvgFinal, {
				height: this.svgHeight,
				width: this.svgWidth,
				right: this.xOffset2,
				y: this.yOffset,
			}, '-=0.1')
			.staggerFrom(this.menuList.childNodes, 0.2, {
				opacity: 0,
				x: 30,
				y: window.matchMedia("(max-width: 767px)").matches ? 0 : 10,
				ease: Power3.easeInOut
			}, 0.05, '-=0.25')
			.staggerFrom(this.socialIcons.childNodes, 0.15, {
				x: 20,
				opacity: 0,
				ease: Power3.easeInOut
			}, 0.05, '-=0.2')
			.set(this.header, {className:'+=animation-is-finished'});
	}
	toggleMenu() {
		document.body.classList.toggle(this.disableScrollClass);

		if (this.state.menuIsOpen) {
			this.tlMenu
				.timeScale(2)
				.reverse();
		} else {
			this.tlMenu
				.timeScale(1)
				.play();
		}

		this.setState({menuIsOpen : !this.state.menuIsOpen});
	}

	onResize() {
		if (this.state.menuIsOpen) {
			// close menu
			this.tlMenu
				.timeScale(10)
				.reverse();
			document.body.classList.remove(this.disableScrollClass);
			this.setState({menuIsOpen: false});
		}

		// add debounce for resize so it fires only add the end of resize
		clearTimeout(this.resizeTimer);
		this.resizeTimer = setTimeout(() => {
			this.setInitialValues();
			this.setAnimationTimeline();
		}, 250);
	}

	render() {
		return (
			<header ref={node => this.header = node}
				className="header">
				<div className="container">
					<Link href="/" >
						<a className="header-logo">
							<Logo color={`${this.props.color ? this.props.color : "black"}`} />
							<h1 className="a11y-sr-only">Hike one</h1>
						</a>
					</Link>
					<button
						className="menu-btn"
						ref={node => this.menuBtn = node}
						onClick={this.toggleMenu}>
						<span ref={node => this.menuBtnBg = node}>
							<Triangle classes="menu-btn-background menu-btn-background-basis" />
							<svg className="menu-btn-background menu-btn-background-hover"
								 xmlns="http://www.w3.org/2000/svg" viewBox="225.979 1.727 267.839 305.383">
								<polygon points="225.979,1.727 493.818,71.084 349.311,307.109 "/>
							</svg>
						</span>

						<span className="menu-btn-icon">
							{ !this.state.menuIsOpen && <Hamburger /> }
							{ this.state.menuIsOpen && <Cross /> }
						</span>
					</button>

					<div className="menu" ref={node => this.menu = node}>
						<div ref={node => this.menuBgTransparent = node}
							className="menu-background-transparent"></div>

							<svg className="menu-background" ref={node => this.menuBg = node}
								 xmlns="http://www.w3.org/2000/svg" viewBox="226 1.7 268 305">
								<polygon points="226, 1.7 494,71 349,307"/>
							</svg>

							<svg className="menu-background-final" ref={node => this.menuBgSvgFinal = node}
								 xmlns="http://www.w3.org/2000/svg" viewBox="226 1.7 268 305">
								<polygon points="226, 1.7 494,71 349,307"/>
							</svg>

							<svg className="menu-background" xmlns="http://www.w3.org/2000/svg" viewBox="225.979 1.727 267.839 305.383">
								<polygon points="225.979,1.727 493.818,71.084 349.311,307.109 "/>
								<rect ref={node => this.menuBgRect = node}
									  className="menu-background-rect" x="253.643" y="71.084" fill="transparent" width="96" height="236.025"/>
							</svg>

						<div className="menu-inner" ref={node => this.menuInner = node}>
							<ul className="menu-list" ref={node => this.menuList = node}>
								<li className="menu-item-red"><Link href="/team"><a>Team</a></Link></li>
								<li className="menu-item-green"><Link href="/services"><a >Services</a></Link></li>
								<li className="menu-item-blue"><Link href="/work"><a>Work</a></Link></li>
								<li className="menu-item-yellow menu-item-last"><Link href="/contact"><a>Contact</a></Link></li>
								<li className="menu-item-sub"><Link href="/updates"><a>Updates</a></Link></li>
								<li className="menu-item-sub"><Link href="/playground"><a>Playground</a></Link></li>
								<li>
									<div className="menu-social" ref={node => this.socialIcons = node}>
										<Link href="#"><a><Facebook /></a></Link>
										<Link href="#"><a><Twitter /></a></Link>
										<Link href="#"><a><Instagram /></a></Link>
										<Link href="#"><a><LinkedIn /></a></Link>
										<Link href="#"><a><Medium /></a></Link>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
