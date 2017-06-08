import { h, Component } from 'preact';
import { Link } from 'preact-router';

import headerStyle from './header.less';
import Navigation from '../navigation/navigation';

export default class Header extends Component {
	render() {
		return (
			<header className={headerStyle.header}>
				<Link href="/" className={headerStyle.logo}>
					<img src="" alt=""/>
					<h1>Hike one</h1>
				</Link>
				<Navigation header="true" />
			</header>
		);
	}
}
