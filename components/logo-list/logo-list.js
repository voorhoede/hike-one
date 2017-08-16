import Link from 'next/link'

const LogoList = ({companies}) => (
	<ul className="logo-list list-no-style container">
		{ companies.map((company, index) =>
			<li key={index}>
				<Link href={company.website}>
					<a>
						<img
							src={`${company.logo.url}&auto=format&fit=max&max-w=250`}
							alt={company.name} />
					</a>
				</Link>
			</li> )}
	</ul>
);


export default LogoList;
