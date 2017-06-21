import { h, Component } from 'preact';
import { Link } from 'preact-router';

import styles from './services-intro.less';

export default class ServicesIntro extends Component {
    render() {
        return (
            <section className={styles.intro}>
                <h2 className="section-header">One big statement about who we are and what we do.</h2>
                <p>Two or three sentences elaborating on the what, how and why and our culture. The product/innovation manager should already be able to determine whether we can help him/her.</p>
                <Link className={styles.button} href="#">More about our story ></Link>
            </section>
        )
    }
}
