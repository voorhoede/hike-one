import { h, Component } from 'preact';
import { Link } from 'preact-router';

import styles from './menu.less';

export default class Menu extends Component {
	render() {
		return (
			<div className={styles.menu}>
				<div className={styles.inner}>
					<ul>
						<li><Link href="/team">Team</Link></li>
						<li><Link href="/services">Services</Link></li>
						<li><Link href="/work">Work</Link></li>
						<li><Link href="/contact">Contact</Link></li>
					</ul>

					<ul>
						<li><Link href="/updates">Updates</Link></li>
						<li><Link href="/playground">playground</Link></li>
					</ul>
				</div>
			</div>
		);
	}
}
