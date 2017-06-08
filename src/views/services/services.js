import { h, Component } from 'preact';
import { Link } from 'preact-router';

import style from './services.less';
import Header from '../../components/header/header';
import oneBigStatement from '../../components/one-big-statement/one-big-statement';

export default class Services extends Component {
	render() {
		return (
			<Header />
			<main>
				<h1>Services</h1>
				<p>This is the services component.</p>
				<oneBigStatement/>
			</main>
		)
	}
}
