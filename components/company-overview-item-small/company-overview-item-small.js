import PropTypes from 'prop-types';
import Link from 'next/link';

const CompanyOverviewItemSmall = ({
	companyLogo = '',
	referenceCaseLink = '',
	referenceSlug = '',
	text = '',
}) => (
	<div className={`company-item-small`}>
		<div className="company-item-small-image-container">
			<img src={companyLogo} alt="" />
		</div>
		{referenceCaseLink ? (
			<Link href="/case/[slug]" as={`/case/${referenceSlug}`}>
				<a className="company-item-small-subtitle">{text}</a>
			</Link>
		) : (
			<p className="company-item-small-subtitle">{text}</p>
		)}
	</div>
);

CompanyOverviewItemSmall.propTypes = {
	companyLogo: PropTypes.string,
	referenceCaseLink: PropTypes.string,
	referenceSlug: PropTypes.string,
	text: PropTypes.string,
};

export default CompanyOverviewItemSmall;
