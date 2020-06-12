// import { Component } from 'react'
import PropTypes from 'prop-types';

const LogoCarousel = (props) => {
	const { companies, title } = props;

	return (
		<div className="logo-carousel container clearfix">
			<h2 className="content">{title}</h2>

			<div className="marquee container-inner">
				<div className="marquee-slider">
					<ul className="marquee-item list-no-style">
						{companies.map((company, index) => (
							<li key={index}>
								<img src={`${company.logo.url}?fm=png&fit=max&max-w=250`} alt={company.name} />
							</li>
						))}
					</ul>
					<ul className="marquee-item list-no-style">
						{companies.map((company, index) => (
							<li key={index}>
								<img src={`${company.logo.url}?fm=png&fit=max&max-w=250`} alt={company.name} />
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

LogoCarousel.propTypes = {
	title: PropTypes.string,
	companies: PropTypes.array,
};

export default LogoCarousel;
