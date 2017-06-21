import React from 'react';
import Link from 'next/link';

class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<Link href="/" >
					<a href="/">
						<img src="" alt=""/>
						<h1>Hike one</h1>
					</a>
				</Link>
			</header>
		);
	}
}

export default Header;
