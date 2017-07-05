import React from 'react';
import Link from 'next/link';

import Logo			from '../logo/logo';
import Hamburger 	from '../icons/hamburger/hamburger';
import Cross 		from '../icons/cross/cross';

import Menu from '../menu/menu';

class Header extends React.Component {
	constructor() {
		super();
		this.toggleMenu = this.toggleMenu.bind(this);
		this.onScroll = this.onScroll.bind(this);
		this.setHamburgerColor = this.setHamburgerColor.bind(this);
		this.state = {
			menuIsOpen: false,
			hamburger: false
		};
		this.ticking = false;
		this.disableScrollClass = 'disable-scroll';
		this.isFixedClass = 'footer-fixed';
		this.isWhiteClass = 'white';
	}

	componentDidMount() {
		this.mainContainer = document.querySelector('.js-main');
		this.lastElement = document.querySelector('.js-bottom-element');
		this.btnHeight = this.menuBtn.getBoundingClientRect().height;

		if(window.requestAnimationFrame !== 'undefined' && this.lastElement && this.mainContainer) {
			window.addEventListener('scroll', this.onScroll);
		}
	}

	componentUnMount() {
		document.body.classList.remove(this.disableScrollClass);
		window.removeEventListener('scroll', this.onScroll);
	}

	onScroll() {
		if (!this.ticking) {
			window.requestAnimationFrame(() => {
				this.setHamburgerColor();
				this.ticking = false;
			});
		}

		this.ticking = true;
	}

	setHamburgerColor() {
		this.lastElementRect = this.lastElement.getBoundingClientRect();

		// only make hamburger white when last scrollable element reaches top of window
		// and when footer is fixed
		if ((this.lastElementRect.top) <= this.btnHeight &&
			this.mainContainer.classList.contains(this.isFixedClass) ) {
			this.menuBtn.classList.add(this.isWhiteClass);
		} else {
			this.menuBtn.classList.remove(this.isWhiteClass);
		}
	}

	toggleMenu() {
		this.setState({
			menuIsOpen: !this.state.menuIsOpen,
			hamburger: !this.state.hamburger
		});

		document.body.classList.toggle(this.disableScrollClass);
	}

	render() {
		return (
			<header className={`header ${this.state.menuIsOpen ? 'open' : ''}`}>
				<div className="container">
					<Link href="/" >
						<a className="header-logo">
							<Logo color={this.props.color ? this.props.color : "black"}/>
							<h1 className="a11y-sr-only">Hike one</h1>
						</a>
					</Link>

					<button
						className="btn"
						ref={node => this.menuBtn = node}
						onClick={this.toggleMenu}>
						{ !this.state.menuIsOpen && <Hamburger /> }
						{ this.state.menuIsOpen && <Cross /> }
					</button>

					{ this.state.menuIsOpen && <Menu/> }
				</div>
			</header>
		);
	}
}

export default Header;
