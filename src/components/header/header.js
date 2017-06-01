import { h, Component } from 'preact';
import style from './header.less';

export default class Header extends Component {
	render() {
		return (
			<header className={style.header}>
				<h1>Hike one</h1>
			</header>
		);
	}
}
