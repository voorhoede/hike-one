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
		this.state = {
			menuIsOpen: false,
			hamburger: false
		};

		this.disableScrollClass = 'disable-scroll';

	}

	componentWillUnmount() {
		document.body.classList.remove(this.disableScrollClass)
	}

	toggleMenu() {
		this.setState({
			menuIsOpen: !this.state.menuIsOpen,
			hamburger: !this.state.hamburger
		});

		document.body.classList.toggle(this.disableScrollClass);

		this.extraPadding(this.state.menuIsOpen) // to prevent content shift with overflow hidden
	}

	extraPadding(state) {
		const main = document.querySelector("main")
		const hamburger = this.refs.hamburger
		if (state) {
			main.style.paddingRight = '0px'
			hamburger.style.marginRight = '0px'
			return
		}
		// https://stackoverflow.com/questions/13382516/getting-scroll-bar-width-using-javascript
		const outer = document.createElement("div");
	    outer.style.visibility = "hidden";
	    outer.style.width = "100px";
	    outer.style.msOverflowStyle = "scrollbar";

	    document.body.appendChild(outer);

	    const widthNoScroll = outer.offsetWidth;
	    // force scrollbars
	    outer.style.overflow = "scroll";

	    // add innerdiv
	    const inner = document.createElement("div");
	    inner.style.width = "100%";
	    outer.appendChild(inner);

	    const widthWithScroll = inner.offsetWidth;

	    outer.parentNode.removeChild(outer);

	    main.style.paddingRight = widthNoScroll - widthWithScroll + 'px'
		hamburger.style.marginRight = widthNoScroll - widthWithScroll + 'px'
	}

	render() {
		return (
			<header className={`header ${this.state.menuIsOpen ? 'open' : ''}`}>
				<div className="container">
					<Link href="/" >
						<a className="header-logo">
							<Logo color="black"/>
							<h1 className="a11y-sr-only">Hike one</h1>
						</a>
					</Link>

					<button
						className="btn"
						ref="hamburger"
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
