import{ h, Component } from 'preact';
import { Link } from 'preact-router';

import style from './services.less';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import ServicesIntro from '../../components/services-intro/services-intro';
import ServiceApproach from '../../components/services-approach/service-approach';
import ServicesOverview from '../../components/services-overview/services-overview';
import ServicesContact from '../../components/services-contact/services-contact';

export default class Services extends Component {
	render() {
		return (
			<div>
				<Header/>
				<main>
					<article className={style.article}>
						<ServicesIntro/>
						<ServiceApproach/>
						<ServicesOverview/>
					</article>
					<ServicesContact/>
				</main>
				<Footer/>
			</div>
		);
	}
}
