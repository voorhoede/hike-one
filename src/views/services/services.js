import { h, Component } from 'preact';
import { Link } from 'preact-router';

import style from './services.less';
import Header from '../../components/header/header';
import ServicesIntro from '../../components/services-intro/services-intro';
import ServiceApproach from '../../components/services-approach/service-approach';
import ServicesOverview from '../../components/services-overview/services-overview';

export default class Services extends Component {
	render() {
		return (
			<main>
				<Header/>
				<article className={style.article}>
					<ServicesIntro/>
					<ServiceApproach/>
					<ServicesOverview/>
				</article>
			</main>
		)
	}
}
