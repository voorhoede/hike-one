import { h, Component } from 'preact';
import { Link } from 'preact-router';

import styles from './header.less';

export default class Header extends Component {
	render() {
		return (
			<header className={styles.header}>
				<Link href="/" className={styles.logo}>
					<img src="" alt=""/>
					<h1>Hike one</h1>
				</Link>
			</header>
		);
	}
}
