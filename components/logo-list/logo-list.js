import React from 'react';
import Link from 'next/link'

class LogoList extends React.Component {
    render() {
        return (
            <ul className="logo-list list-no-style container">
                {this.props.logos.map((logo, i) => <li key={i}><Link href={logo.link}><a><img src={logo.image} alt="" /></a></Link></li>)}
            </ul>
        );
    }
}

export default LogoList;
