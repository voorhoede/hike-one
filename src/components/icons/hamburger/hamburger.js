import { h, Component } from 'preact';

import styles from './hamburger.less';

export default class Hamburger extends Component {
    render() {
        return (
            <svg className={[styles.svg, this.props.open ? styles.open : ''].join(' ')} xmlns="http://www.w3.org/2000/svg" width="34" height="26" viewBox="0 0 34 26">
                <path d="M2.268 2.765h29.634M2.268 13.353h29.634M2.268 23.941h29.634"/>
            </svg>
        );
    }
}
