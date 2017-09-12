import React from 'react';

class LogoCarousel extends React.Component {
	constructor() {
		super();
		this.animate = this.animate.bind(this);
	}

	componentDidMount() {
		window.addEventListener('load', this.animate);
	}

	animate() {
		var slider = document.querySelector('[data-marquee-slider]');
		var sliderContent = slider.querySelector('[data-marquee-content]');
		var sliderContentWidth = sliderContent.getBoundingClientRect().width;
		var sliderSpeed = slider.dataset.marqueeSlider + 's';

		// Set up css animation
		var cssAnimation = document.createElement('style');
		cssAnimation.type = 'text/css';
		cssAnimation.innerHTML = '@keyframes slide {'+
			'0% { left: 0; } '+
			'100% { left: -' + sliderContentWidth + 'px; }'+
			'}';
		document.head.appendChild(cssAnimation);

		// Overwrite animation-duration
		slider.style.animationDuration = sliderSpeed;
	}

	render() {
		return(
			<div className="logo-carousel container clearfix">
				<h2 className="content">{ this.props.title }</h2>

				<div className="marquee container-inner">
					<div className="marquee__slider" data-marquee-slider={this.props.animationSpeed}>
						<ul className="marquee__item list-no-style" data-marquee-content>
							{ this.props.companies.map((company, index) =>
								<li key={index}>
									<img
										src={`${company.logo.url}&auto=format&fm=png&fit=max&max-w=250`}
										alt={company.name} />
								</li> )}
						</ul>
						<ul className="marquee__item list-no-style">
							{ this.props.companies.map((company, index) =>
								<li key={index}>
									<img
										src={`${company.logo.url}&auto=format&fm=png&fit=max&max-w=250`}
										alt={company.name} />
								</li> )}
						</ul>
					</div>
				</div>
			</div>
		);
	}

}

export default LogoCarousel;
