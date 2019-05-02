import React from 'react'
import setImageParams from '../_helpers/setImageParameters'

const LogoList = ({ companies }) => {
	const imageParameters = { fit: 'max', fm: 'png', q: 85 }

	return (
		<ul className="logo-list list-no-style container">
			{companies.map((company, index) =>
				<li key={index}>
					{company.website ? (
						<a href={company.website} target="_blank">
							<img
								src={`${setImageParams(company.logo.url, { ...imageParameters, 'max-w': 250} )}`}
								alt={company.name}
							/>
						</a>
					) : (
						<img
							src={`${setImageParams(company.logo.url, { ...imageParameters, 'max-w': 250} )}`}
							alt={company.name}
						/>
					)}
				</li>
			)}
		</ul>
	)
}

export default LogoList
