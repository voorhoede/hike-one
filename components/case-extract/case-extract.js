import ArrowRight from '../icons/arrow-right/arrow-right';
import ButtonTertiary from '../buttons/button-tertiary/button-tertiary';
import Link from 'next/link';

const CaseExtract = ({ headerImage ,title = '', subtitle = '', type = '', link}) => (

	<section className="case-extract container">
		<Link href={link}>
			<a>
				<div className="case-extract-inner clearfix">
					<div className="case-extract-image-container" style={{backgroundImage: `url(${headerImage})`}}></div>
					<div className="case-extract-text-container shadow">
						<span>{type}</span>
						<h3>{title}</h3>
						<h4>{subtitle}</h4>
						<div className="case-extract-button-container">
							<ButtonTertiary classes="btn-white btn-icon-round">
								<ArrowRight/>
							</ButtonTertiary>
						</div>
					</div>
				</div>
			</a>
		</Link>

		<div className="case-extract-link-container">
			<Link href="#">
				<a className="case-extract-link clearfix">
					<span>Explore all work</span>
					<div className="case-extract-link-icon">
						<ArrowRight/>
					</div>
				</a>
			</Link>
		</div>
	</section>
);


export default CaseExtract;
