import { h, Component } from 'preact';
import { Link } from 'preact-router';

import navigationStyle from './navigation.less';

export default class Navigation extends Component {
    render(props) {
        return (
            <ul className={props.header == "true" ? navigationStyle.headerNav : ""}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/case">Case</Link></li>
                <li><Link href="/services">Services</Link></li>
            </ul>
        )
    }
}
