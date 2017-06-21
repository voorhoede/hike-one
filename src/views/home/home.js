import { h, Component } from 'preact';
import { Link } from 'preact-router';

import style from './home.less';
import Header from '../../components/header/header';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<Header/>
				<h1>Home</h1>
				<p>This is the Home component.</p>

				<Link href="/services">Services page</Link>
			</div>
		);
	}
}
