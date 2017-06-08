import { h, Component } from 'preact';
import { Link } from 'preact-router';

import styles from './services-item.less';

export default class ServicesItem extends Component {
    render(props) {
    	const data = props.data;

        return (
            <li className={styles.li}>
                <img className={styles.image} alt=""/>
                <div className={styles.info}>
                    <h3 className={styles.heading}>{data.title}</h3>
                    <p className={styles.text}>{data.text}</p>
                    <p className={styles.tags}>AKA: {data.tags}</p>
                    <Link href={data.linkHref} className={styles.button}>{data.linkLabel}</Link>
                </div>
            </li>
        );
    }
}
