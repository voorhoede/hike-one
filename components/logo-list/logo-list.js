import Link from 'next/link'

const LogoList = ({logos}) => (
	<ul className="logo-list list-no-style container">
		{ logos.map((logo, index) =>
			<li key={index}>
				<Link href="#">
					<a>
						<img src={logo.url} alt="" />
					</a>
				</Link>
			</li> )}
	</ul>
);


export default LogoList;
