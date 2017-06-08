import { h, Component } from 'preact';
import { Link } from 'preact-router';

import style from './services.less';
import Header from '../../components/header/header';
import ServicesIntro from '../../components/servicesIntro/servicesIntro';

export default class Services extends Component {
	render() {
		return (
			<div>
				<Header/>
				<main>
					<ServicesIntro/>
				</main>
			</div>
		)
	}
}
