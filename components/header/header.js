import React from 'react';
import Link from 'next/link';

import Hamburger from '../icons/hamburger/hamburger';
import Cross from '../icons/cross/cross';

import Menu from '../menu/menu';

class Header extends React.Component {
	constructor() {
		super();
		this.toggleMenu = this.toggleMenu.bind(this);
		this.state = {
			menuIsOpen: false,
			hamburger: false
		};
	}

	toggleMenu() {
		this.setState({
			menuIsOpen: !this.state.menuIsOpen,
			hamburger: !this.state.hamburger
		});

		document.body.classList.toggle('disable-scroll');
	}

	render() {
		return (
			<header className={`header ${this.state.menuIsOpen ? 'open' : ''}`}>
				<div className="container">
					<Link href="/" >
						<a className="header-logo">
							<img src="" alt=""/>
							<h1>Hike one</h1>
						</a>
					</Link>

					<button
						className="btn"
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
