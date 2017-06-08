import { h, Component } from 'preact';

import styles from './footer.less';

export default class Footer extends Component {
	render(props) {
		return (
			<footer className={styles.footer}>
				<span>Footer</span>
			</footer>
		);
	}
}
