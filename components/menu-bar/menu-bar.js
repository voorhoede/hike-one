import React from 'react';
import Link from 'next/link';

import Logo			from '../logo/logo';
import Triangle from '../shapes/triangle/triangle';
import Hamburger 	from '../icons/hamburger';
import Cross 		from '../icons/hamburger-close';


import Menu from '../menu/menu';

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

	toggleMenu() {
		this.setState({
			menuIsOpen: !this.state.menuIsOpen,
			hamburger: !this.state.hamburger
		});

		document.body.classList.toggle(this.disableScrollClass);
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
					{ this.state.menuIsOpen && <Menu/> }
				</div>
			</header>
		);
	}
}

export default Header;
