import Link from 'next/link'
import setImageParams from '../_helpers/setImageParameters';

const LogoList = ({companies}) => {
	const imageParameters = { fit: 'max', fm: 'png', q: '90' }

	return(
	<ul className="logo-list list-no-style container">
		{ companies.map((company, index) =>
			<li key={index}>
				<Link href={company.website}>
					<a>
						<img
							src={`${setImageParams(company.logo.url, { ...imageParameters, 'max-w': 250} )}`}
							alt={company.name} />
					</a>
				</Link>
			</li> )}
	</ul>
)};


export default LogoList;
