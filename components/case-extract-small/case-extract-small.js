import PropTypes from 'prop-types';
import Link from 'next/link';
import Icon from '../icon/icon';
import setImageParameters from '../_helpers/setImageParameters';

const CaseExtractSmall = ({
	slug = '',
	color = '',
	companyName = '',
	title = '',
	subtitle = '',
	image = {},
}) => (
	<div className="case-extract-small">
		<Link href="/case/[slug]" as={`/case/${slug}`}>
			<a>
				<div
					className="case-extract-small-image"
					style={{
						backgroundImage: `url('${setImageParameters(image.url, {
							w: 700,
						})}')`,
					}}
				>
					<div className="case-extract-small-overlay" />
				</div>
				<div className="case-extract-small-bg">
					<div className="case-extract-small-bg-inner" style={{ backgroundColor: color }} />
				</div>
				<div className="case-extract-small-text">
					<span>{companyName}</span>
					<h3>{title}</h3>
					<h4>{subtitle}</h4>
				</div>
				<div className="case-extract-small-button">
					<Icon icon="arrowRightCircle" />
				</div>
			</a>
		</Link>
	</div>
);

CaseExtractSmall.propTypes = {
	slug: PropTypes.string,
	color: PropTypes.string,
	companyName: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	image: PropTypes.object,
};

export default CaseExtractSmall;
