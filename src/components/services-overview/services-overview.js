import { h, Component } from 'preact';

import overviewStyles from './services-overview.less';
import ServicesItems from '../services-items/services-items';

export default class ServicesOverview extends Component {
    render() {
        return (
            <div className={overviewStyles.list}>
                <h2>Our services</h2>
                <ul>
                    <ServicesItems
                    image="http://via.placeholder.com/50x50"
                    title="Design"
                    text="Two or three sentences about our design services. Keep it general here and focus on the possibilities."
                    tags="wireframing, visual design, animations, …"
                    linkText="...and more"
                    linkDest="#"
                     />
                </ul>
            </div>
        )
    }
}
