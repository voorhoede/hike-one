import { h, Component } from 'preact';
import { Link } from 'preact-router';

export default class oneBigStatement extends Component {
    render() {
        return `
            <h2>One big statement about who we are and what we do.</h2>
            <p>Two or three sentences elaborating on the what, how and why and our culture. The product/innovation manager should already be able to determine whether we can help him/her.</p>
            <Link href="#">More about our story</Link>
        `
    }
}
