import ButtonTertiary from '../buttons/button-tertiary/button-tertiary';

const CaseExtract = ({ headerImage ,title = '', subtitle = '', type = '' }) => {
	return (
		<section className="case-extract clearfix container">
			<div className="case-extract-image-container" style={{backgroundImage: `url(${headerImage})`}}></div>	
			<div className="case-extract-text-container shadow">
				<span>{type}</span>
				<h3>{title}</h3>
				<h4>{subtitle}</h4>
				<div className="case-extract-button-container">
					<ButtonTertiary classes="btn-white" />
				</div>
			</div>
		</section>
	);
};

export default CaseExtract;
