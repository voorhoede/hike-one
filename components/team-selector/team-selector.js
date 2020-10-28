import Link from 'next/link';

const TeamSelector = ({ pathname }) => (
	<nav className="team-selector container shadow">
		<Link href="/team/culture" scroll={false}>
			<a className={`team-selector-item ${pathname === '/team/culture' ? 'is-selected' : ''}`}>
				<h2 className="team-selector-item-title">Culture</h2>
			</a>
		</Link>
		<Link href="/team/people" scroll={false}>
			<a className={`team-selector-item ${pathname === '/team/people' ? 'is-selected' : ''}`}>
				<h2 className="team-selector-item-title">People</h2>
			</a>
		</Link>
	</nav>
);

export default TeamSelector;
