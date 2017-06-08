import { h, Component } from 'preact';

import styles from './services-contact.less';

export default class ServicesContact extends Component {
	render(props) {
		return (
			<div className={styles.contact}>
				<span>Contact</span>
			</div>
		);
	}
}
