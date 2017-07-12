import ButtonTertiary from '../buttons/button-tertiary/button-tertiary';

const CaseIntro = ({image, title, subtitle}) => {
	return (
		<section className="case-intro" style={{backgroundImage: `url(${image})`}}>
			<div className="container">
				<h1 className="case-intro-title">{title}</h1>
				<p className="case-intro-subtitle">{subtitle}</p>
				<ButtonTertiary />
			</div>
		</section>
	);
};
export default CaseIntro;
