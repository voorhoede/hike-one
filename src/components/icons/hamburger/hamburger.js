import { h, Component } from 'preact';

import styles from './hamburger.less';

export default class Hamburger extends Component {

    componentDidUpdate() {
        const rect = this.burger.querySelectorAll('rect')

        if (this.props.open) {

            TweenLite.to(rect[0], .4, {opacity:    0, ease:Power1.easeInOut})
            TweenLite.to(rect[1], .4, {rotation:  45, transformOrigin: "center", ease:Power1.easeInOut})
            TweenLite.to(rect[2], .4, {rotation: -45, transformOrigin: "center", ease:Power1.easeInOut})
            TweenLite.to(rect[3], .4, {opacity:    0, ease:Power1.easeInOut})

        } else {

            TweenLite.to(rect[0], .4, {opacity:    1, ease:Power1.easeInOut})
            TweenLite.to(rect[1], .4, {rotation:   0, ease:Power1.easeInOut})
            TweenLite.to(rect[2], .4, {rotation:   0, ease:Power1.easeInOut})
            TweenLite.to(rect[3], .4, {opacity:    1, ease:Power1.easeInOut})

        }
    }

    render() {
        return (
            <div>
                <svg ref={ node => this.burger = node } className={[styles.svg, this.props.open ? styles.open : ''].join(' ')}  width="35" height="26" viewBox="0 0 35 26" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0"  width="35" height="4"  />
                    <rect x="0" y="11"  width="35" height="4" />
                    <rect x="0" y="11"  width="35" height="4" />
                    <rect x="0" y="22" width="35" height="4" />
                </svg>
            </div>
        );
    }
}
