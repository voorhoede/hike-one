import ArrowDownTriple from '../icons/arrow-down-triple/arrow-down-triple';
import ButtonTertiary from '../buttons/button-tertiary/button-tertiary';

const HomeIntro = ({heroImage, title = '', subtitle = '', parallaxLayerFront, parallaxLayerBack}) => (
	<div className="home-intro container">
		{parallaxLayerBack}
		<div className="home-intro-overlay">
			<div className="container-inner home-intro-inner" style={{backgroundImage: `url(${heroImage})`}}>
				<h1 className="home-intro-heading">{title}</h1>

				<ButtonTertiary value={subtitle}>
					<ArrowDownTriple  />
				</ButtonTertiary>
			</div>
		</div>
		{parallaxLayerFront}
	</div>
);


export default HomeIntro;
