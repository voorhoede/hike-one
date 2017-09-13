import React from 'react';
import {TweenLite, TimelineLite, TimelineMax}  from 'gsap';

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
		var sliderSpeed = slider.dataset.marqueeSlider;

		var carouselAnimation = new TimelineMax({repeat:-1});
		carouselAnimation.add(TweenLite.to(slider, 1, {ease:Linear.easeNone, left:-sliderContentWidth}))
						 .duration(sliderSpeed);
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
										src={`${company.logo.url}&fm=png&fit=max&max-w=250`}
										alt={company.name} />
								</li> )}
						</ul>
						<ul className="marquee__item list-no-style">
							{ this.props.companies.map((company, index) =>
								<li key={index}>
									<img
										src={`${company.logo.url}&fm=png&fit=max&max-w=250`}
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
