import React from 'react';
import Link from 'next/link';

import Facebook  from '../icons/facebook/facebook';
import Twitter   from '../icons/twitter/twitter';
import Instagram from '../icons/instagram/instagram';
import LinkedIn  from '../icons/linkedin/linkedin';
import Medium    from '../icons/medium/medium';

class Menu extends React.Component {
	render() {
		return (
			<div className="menu">
				<div className="menu-inner">
					<ul className="menu-list">
						<li><Link href="/team"><a>Team</a></Link></li>
						<li><Link href="/services"><a>Services</a></Link></li>
						<li><Link href="/work"><a>Work</a></Link></li>
						<li><Link href="/contact"><a>Contact</a></Link></li>
					</ul>
					<ul className="menu-list menu-list-sub">
						<li><Link href="/updates"><a>Updates</a></Link></li>
						<li><Link href="/playground"><a>Playground</a></Link></li>
					</ul>
					<div className="menu-social">
						<Link href="#"><a><Facebook /></a></Link>
						<Link href="#"><a><Twitter /></a></Link>
						<Link href="#"><a><Instagram /></a></Link>
						<Link href="#"><a><LinkedIn /></a></Link>
						<Link href="#"><a><Medium /></a></Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Menu;
