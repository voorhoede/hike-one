import Icon from '../icon/icon';
import ButtonSecondaryLink from '../buttons/button-secondary/button-secondary';
import Link from 'next/link';

const CaseExtract = ({ headerImage ,title = '', subtitle = '', slug= ''}) => (

	<section className="case-extract container">
		<Link href={`/case?slug=${slug}`} as={`/case/${slug}`} prefetch>
			<a>
				<div className="case-extract-inner clearfix">
					<div className="case-extract-image-container" style={{backgroundImage: `url(${headerImage})`}}></div>
					<div className="case-extract-text-container shadow">
						<span>Case</span>
						<h3>{title}</h3>
						<h4>{subtitle}</h4>
						<div className="case-extract-button-container">
							<span className="case-extract-button">
								<Icon icon="arrowRightCircle"/>
							</span>
						</div>
					</div>
				</div>
			</a>
		</Link>

		<div className="case-extract-link-container">
			<ButtonSecondaryLink href="/work" classes="case-extract-link btn-red-border" icon="arrowRight">
				Explore all work
			</ButtonSecondaryLink>
		</div>
	</section>
);


export default CaseExtract;
