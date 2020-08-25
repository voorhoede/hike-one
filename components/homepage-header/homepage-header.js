import PropTypes from 'prop-types';

const HomepageHeader = ({ title, subtitle }) => {
	return (
		<header className="homepage-header">
			<div className="homepage-header__content-wrapper container">
				<div className="homepage-header__title">
					<svg
						className="homepage-header__triangle"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 96 109"
					>
						<path d="M2.502.064l91.42 23.673a2 2 0 0 1 1.205 2.98L45.803 107.28a2 2 0 0 1-3.56-.296L.146 2.75A2 2 0 0 1 2.502.064z" />
					</svg>
					<h1>We guide you to new and better digital products</h1>
				</div>
				<div className="homepage-header__cta">
					<p>
						We are a Digital Product Design Agency in the Netherlands. When we team up, you get
						digital products that people love to use.
					</p>
					<a className="btn-primary">See our work</a>
				</div>
			</div>
		</header>
	);
};

HomepageHeader.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
};

export default HomepageHeader;
