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


import {TweenLite, Power3, Power0, Power1, TimelineLite, TimelineMax}  from 'gsap';


import Menu from '../menu/menu';
import SocialMedia from '../social-media/social-media';
class Header extends React.Component {
	constructor() {
		super();
		this.toggleMenu = this.toggleMenu.bind(this);
		this.state = {
			menuIsOpen: false,
			hamburger: false
		};
		this.disableScrollClass = 'disable-scroll';
	}

	componentWillUnmount() {
		document.body.classList.remove(this.disableScrollClass);
	}

	componentDidMount() {
		const windowWidth = document.body.clientWidth || document.documentElement.clientWidth || 0;
		const svgBgRect = this.menuBg.getBoundingClientRect();
		const svgBgHelperRect = this.menuBgRect.getBoundingClientRect();

		const scale = (windowWidth * 0.7) / svgBgHelperRect.width;

		const yDiff = svgBgHelperRect.top - svgBgRect.top;
		const yOffsetHelperRect = (yDiff / svgBgRect.height);
		const yOffset = -((svgBgRect.height * scale) * yOffsetHelperRect);

		const xDiff = (svgBgRect.left - svgBgHelperRect.right);
		const xOffsetHelperRect = (xDiff / svgBgRect.width);
		const xOffset = -((svgBgRect.width * scale) * xOffsetHelperRect + svgBgRect.width);

		this.tlMenu = new TimelineMax({paused: true});
		this.tlBackground = new TimelineMax({paused: true});

		this.tlBackground.add([
			new TweenLite.to(this.menuBg, 1, {x: 50}),
			new TweenLite.to(this.menuBg, 5, {x: 0})
		],'+=0', 'sequence');

		this.tlMenu
			.set(this.menu, {display: 'block'})
			.set(this.menuBgTransparent, {display: 'block'})
			.set(this.menuBg, {opacity: 1})
			.to(this.tlBackground, 0.4, {progress:1, ease: Power3.easeIn})
			.from(this.menuBgTransparent, 0.3, {opacity: 0}, 0)
			.to(this.menuBg, 0.3, {
				scale: scale ,
				right:xOffset,
				top:yOffset ,
				ease: Power3.easeInOut
			}, 0.05)
		 	.staggerFrom(this.menuList.childNodes, 0.2, {opacity: 0, x:30, y: 10, ease: Power3.easeInOut }, 0.05, '-=0.25')
			.staggerFrom(this.socialIcons.childNodes, 0.15, {x: 20, opacity: 0, ease: Power3.easeInOut}, 0.05,  '-=0.2');

	}

	toggleMenu() {
		document.body.classList.toggle(this.disableScrollClass);

		this.setState({menuIsOpen: !this.state.menuIsOpen});

		if (this.state.menuIsOpen) {
			this.tlMenu.reverse().timeScale(2);
		} else {
			this.tlMenu.play().timeScale(1);
		}
	}

	render() {
		return (
			<header className={`header ${this.state.menuIsOpen ? 'is-open' : ''}`}>
				<div className="container">
					<Link href="/" >
						<a className="header-logo">
							<Logo color={`${this.props.color ? this.props.color : "black"}
							 	${this.state.menuIsOpen ? 'white': ''}`} />
							<h1 className="a11y-sr-only">Hike one</h1>
						</a>
					</Link>
					<button
						className="menu-btn"
						ref={node => this.menuBtn = node}
						onClick={this.toggleMenu}>
						<Triangle classes="menu-btn-background menu-btn-background-basis" />
						<svg className="menu-btn-background menu-btn-background-hover"
							 xmlns="http://www.w3.org/2000/svg" viewBox="225.979 1.727 267.839 305.383">
							<polygon points="225.979,1.727 493.818,71.084 349.311,307.109 "/>
						</svg>

						<span className="menu-btn-icon">
							{ !this.state.menuIsOpen && <Hamburger /> }
							{ this.state.menuIsOpen && <Cross /> }
						</span>
					</button>

					<div className="menu" ref={node => this.menu = node}>
						<div ref={node => this.menuBgTransparent = node}
							className="menu-background-transparent"></div>
						<svg ref={node => this.menuBg = node}
							 className="menu-background"
							 xmlns="http://www.w3.org/2000/svg" viewBox="225.979 1.727 267.839 305.383">
							<polygon points="225.979,1.727 493.818,71.084 349.311,307.109 "/>
							<rect ref={node => this.menuBgRect = node}
								  className="menu-background-rect" x="253.643" y="71.084" fill="transparent" width="96" height="236.025"/>
						</svg>

						<div className="menu-inner">
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
