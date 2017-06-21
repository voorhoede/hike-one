import { h, Component } from 'preact';
import { Link } from 'preact-router';

import Menu from '../menu/menu';

import styles from './header.less';

export default class Header extends Component {
	constructor() {
		super();
		this.toggleMenu = this.toggleMenu.bind(this);
		this.state = {
			menuIsOpen: false
		};
	}

	toggleMenu() {
		this.setState({
			menuIsOpen: !this.state.menuIsOpen
		});

		document.body.classList.toggle('disable-scroll')
	}

	render() {
		// { !this.state.menuIsOpen && <span>open</span> }
		// { this.state.menuIsOpen && <span>close</span> }
		return (
			<header className={[styles.header, this.state.menuIsOpen ? styles.open : ''].join(' ')}>
				<div className={styles.container}>
				<Link href="/" className={styles.logo}>
					<img src="" alt=""/>
					<h1>Hike one</h1>
				</Link>

				<button
					className={styles.btn}
					onClick={this.toggleMenu}>
					<svg width="35" height="22" viewBox="0 0 35 22" xmlns="http://www.w3.org/2000/svg">
						<rect x="0" y="0" width="35" height="4"  />
						<rect x="0" y="9" width="35" height="4" />
						<rect x="0" y="18" width="35" height="4" />
					</svg>
				</button>

				{ this.state.menuIsOpen && <Menu/> }
				</div>
			</header>
		);
	}
}
