import ArrowRight from '../icons/arrow-right/arrow-right';
import ButtonTertiary from '../buttons/button-tertiary/button-tertiary';

const CaseExtract = ({ headerImage ,title = '', subtitle = '', type = '', link}) => (
	<a href={link.target}>
		<section className="case-extract clearfix container">
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
			<div className="case-extract-link">
				<div className="case-extract-link-text">
					<span>{link.text}</span>
					<div className="case-extract-link-button">
						<ArrowRight/>
					</div>
				</div>
			</div>
		</section>
	</a>
);


export default CaseExtract;
