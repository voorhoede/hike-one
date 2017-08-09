import Icon from '../icon/icon';
import ButtonCleanLink from '../buttons/button-clean/button-clean-link';
import Link from 'next/link';

const CaseExtract = ({ headerImage ,title = '', subtitle = '', link}) => (

	<section className="case-extract container">
		<Link href={link}>
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
			<ButtonCleanLink href="#" classes="case-extract-link btn-red" icon="arrowRight">
				Explore all work
			</ButtonCleanLink>
		</div>
	</section>
);


export default CaseExtract;
