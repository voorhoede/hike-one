import { h, Component } from 'preact';

import styles from './services-overview.less';
import ServicesItem from '../services-item/services-item';

export default class ServicesOverview extends Component {
    render() {
		const services = [
			{
				image: 'http://via.placeholder.com/75x75',
				title: 'Design',
				text:'Two or three sentences about our design services. Keep it general here and focus on the possibilities.',
				tags: 'wireframing, visual design, animations, …',
				linkLabel: '...and more',
				linkHref: '#'
			},
			{
				image: 'http://via.placeholder.com/75x75',
				title: 'Design',
				text:'Two or three sentences about our design services. Keep it general here and focus on the possibilities.',
				tags: 'wireframing, visual design, animations, …',
				linkLabel: '...and more',
				linkHref: '#'
			},
			{
				image: 'http://via.placeholder.com/75x75',
				title: 'Design',
				text:'Two or three sentences about our design services. Keep it general here and focus on the possibilities.',
				tags: 'wireframing, visual design, animations, …',
				linkLabel: '...and more',
				linkHref: '#'
			},
			{
				image: 'http://via.placeholder.com/75x75',
				title: 'Design',
				text:'Two or three sentences about our design services. Keep it general here and focus on the possibilities.',
				tags: 'wireframing, visual design, animations, …',
				linkLabel: '...and more',
				linkHref: '#'
			}
		];

        return (
            <section className={styles.section}>
                <h2 className="section-header">Our services</h2>
                <ul>
					{
						services.map((service) => <ServicesItem data={service}/>)
					}
                </ul>
            </section>
        );
    }
}
