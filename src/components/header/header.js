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
	}

	render() {
		return (
			<header className={styles.header}>
				<Link href="/" className={styles.logo}>
					<img src="" alt=""/>
					<h1>Hike one</h1>
				</Link>

				<button
					className={styles.btn}
					onClick={this.toggleMenu}>
					{ !this.state.menuIsOpen && <span>open</span> }
					{ this.state.menuIsOpen && <span>close</span> }
				</button>

				{ this.state.menuIsOpen && <Menu/> }
			</header>
		);
	}
}
