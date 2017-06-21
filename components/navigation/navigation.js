import React from 'react';
import Link from 'next/link';

class Navigation extends React.Component {
    render() {
        return (
            <ul className="navigation">
				<li><Link href="/"><a href="/">Home</a></Link></li>
				<li><Link href="/case"><a href="/case">Case</a></Link></li>
				<li><Link href="/services"><a href="/services">Services</a></Link></li>
            </ul>
        );
    }
}

export default Navigation;
