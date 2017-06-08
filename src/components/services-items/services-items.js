import { h, Component } from 'preact';
import { Link } from 'preact-router';

import itemsStyles from './services-items.less';

export default class ServicesItems extends Component {
    render(props) {
        return (
            <li className={itemsStyles.li}>
                <img src={props.image} alt=""/>
                <div className={itemsStyles.info}>
                    <h3>{props.title}</h3>
                    <p className={itemsStyles.text}>{props.text}</p>
                    <p className={itemsStyles.tags}>AKA: {props.tags}</p>
                    <Link href={props.linkDest}>{props.linkText}</Link>
                </div>
            </li>
        )
    }
}
