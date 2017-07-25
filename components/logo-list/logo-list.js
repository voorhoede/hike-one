import Link from 'next/link'

const LogoList = ({logos}) => {
	return (
		<ul className="logo-list list-no-style container">
			{ logos.map((logo, index) =>
				<li key={index}>
					<Link href="#">
						<img src={logo.url} alt="" />
					</Link>
				</li> )}
		</ul>
	);
};

export default LogoList;
