import { h, Component } from 'preact';

import approachStyles from './service-approach.less';

export default class ServiceApproach extends Component {
    render() {
        return (
            <div className={approachStyles.approach}>
                <div className={approachStyles.text}>
                    <h2>Our approach</h2>
                    <p>Two or three sentences about the approach that we take in most projects. It should show that by using this approach, we are able to deliver the right results every time.</p>
                </div>
                <img className={approachStyles.image} src="http://via.placeholder.com/350x110" alt=""/>
            </div>
        )
    }
}
