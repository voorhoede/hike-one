import React from 'react';
import Link from 'next/link';

class Navigation extends React.Component {
    render() {
        return (
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/case">Case</Link></li>
                <li><Link href="/services">Services</Link></li>
            </ul>
        );
    }
}

export default Navigation;
