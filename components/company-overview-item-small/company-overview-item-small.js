import Link from 'next/link';

const CompanyOverviewItemSmall = ({
	companyLogo = '',
	referenceCaseLink = '',
	referenceSlug = '',
	text = '',
	index = '' }) => {

	return(
		<div className={`company-item-small`}>
			<div className="company-item-small-image-container">
				<img src={companyLogo}
					alt='' />
			</div>
			{ referenceCaseLink ?
				<Link href={`/case?slug=${referenceSlug}`}
						as={`/case/${referenceSlug}`}>
					<a className="company-item-small-subtitle">
						{ text }
					</a>
				</Link>
				:
				<p className="company-item-small-subtitle">
					{ text }
				</p>
			}
		</div>
	)
};

export default CompanyOverviewItemSmall;