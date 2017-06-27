import React from 'react';
import Link from 'next/link';

import SocialMedia from '../social-media/social-media';

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

					<SocialMedia />

				</div>
			</div>
		);
	}
}

export default Menu;
