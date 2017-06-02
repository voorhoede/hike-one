import { h, Component } from 'preact';
import { Link } from 'preact-router';

import style from './case.less';
import Header from '../../components/header/header';

export default class Case extends Component {
	render() {
		return (
			<div class={style.case}>
				<Header />
				<h1>Case</h1>
				<p>This is the Case page.</p>

				<Link href="/"> Homepage </Link>
			</div>
		);
	}
}
