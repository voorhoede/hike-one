import { h, Component } from 'preact';
import { Link } from 'preact-router';

import styles from './menu.less';

export default class Menu extends Component {
	componentDidMount() {
		console.log(this);
		console.log(this.inner);
		TweenLite.to(this.inner, 2, {top: 100, ease:Linear.easeNone, onComplete: this.complete})
	}

	complete() {
		console.log("i am done");
	}

	render() {
		return (
			<div className={styles.menu}>
				<div ref={ i => this.inner = i } className={styles.inner}>
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
						<Link href="#"><img src="assets/icons/facebook.svg" alt="Facebook" /></Link>
						<Link href="#"><img src="assets/icons/twitter.svg" alt="Twitter" /></Link>
						<Link href="#"><img src="assets/icons/instagram.svg" alt="Instagram" /></Link>
						<Link href="#"><img src="assets/icons/linkedin.svg" alt="LinkedIn" /></Link>
						<Link href="#"><img src="assets/icons/medium.svg" alt="Medium" /></Link>
					</div>
				</div>
			</div>
		);
	}
}
