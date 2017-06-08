import { h, Component } from 'preact';

import styles from './service-approach.less';

export default class ServiceApproach extends Component {
    render() {
        return (
            <section className={styles.section}>
                <div className={styles.text}>
                    <h2>Our approach</h2>
                    <p>Two or three sentences about the approach that we take in most projects. It should show that by using this approach, we are able to deliver the right results every time.</p>
                </div>
                <img src="http://via.placeholder.com/350x110" alt=""/>
            </section>
        );
    }
}
