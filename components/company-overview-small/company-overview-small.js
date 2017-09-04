import Link from 'next/link';

const CompanyOverviewSmall = ({ services, title=''}) => (
	<div className="company-overview-small container clearfix">
		{ Object.values(services).map((item, index) => (
			<div key={index} className={`company-item-small`}>
				<div className="company-item-small-image-container">
					<img src={item.referenceCompanyLogo.url}
						alt='' />
				</div>
				{ item.referenceCaseLink ?
					<Link href={`/case?slug=${item.referenceCaseLink.slug}`}
							as={`/case/${item.referenceCaseLink.slug}`}>
						<a className="company-item-small-subtitle">
							{ item.referenceText }
						</a>
					</Link>
					:
					<p className="company-item-small-subtitle">
						{ item.referenceText }
					</p>
				}
			</div>
		))}
	</div>
);

export default CompanyOverviewSmall;
