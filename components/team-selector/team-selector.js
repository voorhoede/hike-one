import Link from 'next/link';
import { useRouter } from 'next/router';

const TeamSelector = () => {
	const { pathname } = useRouter();

	return (
		<nav className="team-selector container shadow">
			<Link href="/team/careers" scroll={false}>
				<a className={`team-selector-item ${pathname === '/team/careers' ? 'is-selected' : ''}`}>
					<h2 className="team-selector-item-title">Careers</h2>
				</a>
			</Link>
			<Link href="/team/people" scroll={false}>
				<a className={`team-selector-item ${pathname === '/team/people' ? 'is-selected' : ''}`}>
					<h2 className="team-selector-item-title">People</h2>
				</a>
			</Link>
		</nav>
	);
};

export default TeamSelector;
