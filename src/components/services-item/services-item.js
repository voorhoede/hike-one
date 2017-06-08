import { h, Component } from 'preact';
import { Link } from 'preact-router';

import styles from './services-item.less';

export default class ServicesItem extends Component {
    render(props) {
    	const data = props.data;

        return (
            <li className={styles.li}>
                <img src={data.image} alt=""/>
                <div className={data.info}>
                    <h3>{data.title}</h3>
                    <p className={styles.text}>{data.text}</p>
                    <p className={styles.tags}>AKA: {data.tags}</p>
                    <Link href={data.linkHref}>{data.linkLabel}</Link>
                </div>
            </li>
        );
    }
}
