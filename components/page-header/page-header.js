import ArrowDownTriple from '../icons/arrow-down-triple/arrow-down-triple';
const HomeIntro = ({heroImage, title = '', subtitle = '', parallaxLayerFront, parallaxLayerBack}) => {
	return (
		<div className="home-intro container">
			{parallaxLayerBack}
			<div className="home-intro-overlay">
				<div className="container-inner home-intro-inner" style={{backgroundImage: `url(${heroImage}?format=auto&width=200)`}}>
					<h1 className="home-intro-heading">{title}</h1>
					<h2 className="home-intro-subheading">{subtitle}</h2>
					<button className="btn-clean home-intro-icon-container">
						<ArrowDownTriple  />
					</button>
				</div>
			</div>
			{parallaxLayerFront}
		</div>
	);
};

export default HomeIntro;
