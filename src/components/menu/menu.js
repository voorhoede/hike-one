import { h, Component } from 'preact';
import { Link } from 'preact-router';

import styles from './menu.less';

import Facebook  from '../icons/facebook/facebook';
import Twitter   from '../icons/twitter/twitter';
import Instagram from '../icons/instagram/instagram';
import LinkedIn  from '../icons/linkedin/linkedin';
import Medium    from '../icons/medium/medium';

export default class Menu extends Component {
	render() {
		return (
			<div className={styles.menu}>
				<div ref={ node => this.inner = node } className={styles.inner}>
					<ul className={styles.list}>
						<li><Link href="/team">Team</Link></li>
						<li><Link href="/services">Services</Link></li>
						<li><Link href="/work">Work</Link></li>
						<li><Link href="/contact">Contact</Link></li>
					</ul>
					<ul className={[styles.list, styles.sub].join(' ')}>
						<li><Link href="/updates">Updates</Link></li>
						<li><Link href="/playground">Playground</Link></li>
					</ul>
					<div className={styles.social}>
						<Link href="#"><Facebook  /></Link>
						<Link href="#"><Twitter   /></Link>
						<Link href="#"><Instagram /></Link>
						<Link href="#"><LinkedIn  /></Link>
						<Link href="#"><Medium    /></Link>
					</div>
				</div>
			</div>
		);
	}
}
