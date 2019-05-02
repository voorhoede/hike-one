import React from 'react';
import {TweenLite, TimelineLite, TimelineMax}  from 'gsap';

class LogoCarousel extends React.Component {
  constructor(props) {
    super();
    this.animationSpeed = props.animationSpeed;
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    const sliderContentWidth = this.sliderContent.getBoundingClientRect().width;
    const carouselAnimation = new TimelineMax({repeat:-1});

    carouselAnimation.add(TweenLite.to(this.slider, 1, {ease:Linear.easeNone, left:-sliderContentWidth}))
             .duration(this.animationSpeed);
  }

  render() {
    return(
      <div className="logo-carousel container clearfix">
        <h2 className="content">{ this.props.title }</h2>

        <div className="marquee container-inner">
          <div ref={node => this.slider = node} className="marquee-slider">
            <ul ref={node => this.sliderContent = node} className="marquee-item list-no-style">
              { this.props.companies.map((company, index) =>
                <li key={index}>
                  <img
                    src={`${company.logo.url}?fm=png&fit=max&max-w=250`}
                    alt={company.name} />
                </li> )}
            </ul>
            <ul className="marquee-item list-no-style">
              { this.props.companies.map((company, index) =>
                <li key={index}>
                  <img
                    src={`${company.logo.url}?fm=png&fit=max&max-w=250`}
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
