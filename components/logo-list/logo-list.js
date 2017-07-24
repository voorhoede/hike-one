import Link from 'next/link'

const LogoList = ({logos}) => {
	return (
		<ul className="logo-list list-no-style container">
			{ logos.map((logo, index) =>
				<li key={index}>
					<Link href={logo.link}>
						<a><img src={logo.image} alt="" /></a>
					</Link>
				</li> )}
		</ul>
	);
};

export default LogoList;
