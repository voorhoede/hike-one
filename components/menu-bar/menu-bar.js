import React from 'react';
import Link from 'next/link';

import Logo			from '../logo/logo';
import Hamburger 	from '../icons/hamburger/hamburger';
import Cross 		from '../icons/cross/cross';
import Triangle from '../shapes/triangle/triangle';

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
					<Triangle classes={`shape-triangle-1 triangle-fixed 
										${this.state.menuIsOpen ? 'menu-triangle-enlarged' : ''}`} />
					{ this.state.menuIsOpen && <Menu/> }
				</div>
			</header>
		);
	}
}

export default Header;
