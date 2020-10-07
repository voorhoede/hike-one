import PropTypes from 'prop-types';
import Link from 'next/link';
import Icon from '../icon/icon';
import ButtonSecondaryLink from '../buttons/button-secondary/button-secondary-link';
import setImageParameters from '../_helpers/setImageParameters';

const CaseExtract = ({
	headerImage = '',
	title = '',
	subtitle = '',
	slug = '',
	companyName = '',
	color = '',
}) => {
	const style = {
		__html: `<style>
			.case-extract-image-container {
				background-image: url('${setImageParameters(headerImage, { w: 600 })}')
			}
			@media (min-width: 768px) {
				.case-extract-image-container {
					background-image: url('${setImageParameters(headerImage, { w: 1200 })}')
				}
			}
		</style>`,
	};

	return (
		<section className="case-extract container">
			<div dangerouslySetInnerHTML={style} />
			<Link href="/case/[slug]" as={`/case/${slug}`}>
				<a>
					<div className="case-extract-inner clearfix">
						<div className="case-extract-image-container" />
						<div
							className="case-extract-text-container shadow"
							style={{ backgroundColor: `${color}` }}
						>
							<span>{companyName}</span>
							<h3>{title}</h3>
							<h4>{subtitle}</h4>
							<div className="case-extract-button-container">
								<span className="case-extract-button">
									<Icon icon="arrowRightCircle" />
								</span>
							</div>
						</div>
					</div>
				</a>
			</Link>

			<div className="case-extract-link-container">
				<ButtonSecondaryLink
					href="/work"
					classes="case-extract-link btn-red-border"
					icon="arrowRight"
				>
					Explore all work
				</ButtonSecondaryLink>
			</div>
		</section>
	);
};

CaseExtract.propTypes = {
	headerImage: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	slug: PropTypes.string,
	companyName: PropTypes.string,
	color: PropTypes.string,
};

export default CaseExtract;
