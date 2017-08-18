import React from 'react';
import Link from 'next/link';

import Logo			from '../logo/logo';
import Triangle from '../shapes/triangle/triangle';
import Hamburger 	from '../icons/hamburger';
import Cross 		from '../icons/hamburger-close';
import {TweenLite, Power3, Power0, TimelineLite, TimelineMax}  from 'gsap';


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
		this.menuIsOpen = false;
	}

	componentWillUnmount() {
		document.body.classList.remove(this.disableScrollClass);
	}

	componentDidMount() {
		const windowWidth = document.body.clientWidth || document.documentElement.clientWidth || 0;
		const svgBgRect = this.menuBackground.getBoundingClientRect();
		const svgBgHelperRect = this.menuBackgroundRect.getBoundingClientRect();

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
			new TweenLite.to(this.menuBackground, 1, {x: 50}),
			new TweenLite.to(this.menuBackground, 5, {x: 0})
		],'+=0', 'sequence');

		this.tlMenu
			.to(this.tlBackground, 0.3, {progress:1, ease: Power3.easeIn})
			.to(this.menuBackground, 0.3, {
				scale: scale ,
				right:xOffset,
				top:yOffset ,
				ease: Power3.easeInOut
			}, 0.05);
	}

	toggleMenu() {
		document.body.classList.toggle(this.disableScrollClass);

		if (this.menuIsOpen) {
			this.tlMenu.seek(0);
		} else {
			this.tlMenu.play();
		}
		this.menuIsOpen = !this.menuIsOpen;
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
						<Triangle classes="menu-btn-background" />
						<span className="menu-btn-icon">
							{ !this.state.menuIsOpen && <Hamburger /> }
							{ this.state.menuIsOpen && <Cross /> }
						</span>
					</button>

						<div className="menu">

							<svg ref={node => this.menuBackground = node}
								className="menu-background menu-background-2 shape-triangle"
								xmlns="http://www.w3.org/2000/svg" viewBox="225.979 1.727 267.839 305.383">
								<polygon points="225.979,1.727 493.818,71.084 349.311,307.109 "/>
								<rect ref={node => this.menuBackgroundRect = node}
									className="menu-background-rect" x="253.643" y="71.084" fill="transparent" width="96" height="236.025"/>
							</svg>


							<div className="menu-inner">
								<ul className="menu-list" ref={node => this.menuList1 = node}>
									<li className="menu-item-red"><Link href="/team"><a>Team</a></Link></li>
									<li className="menu-item-green"><Link href="/services"><a >Services</a></Link></li>
									<li className="menu-item-blue"><Link href="/work"><a>Work</a></Link></li>
									<li className="menu-item-yellow menu-item-last"><Link href="/contact"><a>Contact</a></Link></li>
									<li className="menu-item-sub"><Link href="/updates"><a>Updates</a></Link></li>
									<li className="menu-item-sub"><Link href="/playground"><a>Playground</a></Link></li>
									<li><SocialMedia /></li>
								</ul>
							</div>
						</div>

				</div>
			</header>
		);
	}
}

export default Header;
