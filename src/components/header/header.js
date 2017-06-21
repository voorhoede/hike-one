import { h, Component } from 'preact';
import { Link } from 'preact-router';

import Menu from '../menu/menu';
import Hamburger from '../icons/hamburger/hamburger';

import styles from './header.less';

export default class Header extends Component {
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

		document.body.classList.toggle('disable-scroll')
	}

	render() {
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
					<Hamburger open={this.state.hamburger} />
				</button>

				{ this.state.menuIsOpen && <Menu/> }
				</div>
			</header>
		);
	}
}
