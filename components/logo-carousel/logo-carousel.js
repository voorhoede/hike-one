import React from 'react'
import PropTypes from 'prop-types'
import { TweenLite, TimelineMax } from 'gsap'

class LogoCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.animate = this.animate.bind(this)
  }

  componentDidMount() {
    this.animate()
  }

  animate() {
    const { animationSpeed } = this.props
    const sliderContentWidth = this.sliderContent.getBoundingClientRect().width
    const carouselAnimation = new TimelineMax({ repeat: -1 })

    carouselAnimation
      .add(TweenLite.to(this.slider, 1, { left: -sliderContentWidth }))
      .duration(animationSpeed)
  }

  render() {
    const { companies, title } = this.props

    return (
      <div className="logo-carousel container clearfix">
        <h2 className="content">{title}</h2>

        <div className="marquee container-inner">
          <div ref={node => (this.slider = node)} className="marquee-slider">
            <ul ref={node => (this.sliderContent = node)} className="marquee-item list-no-style">
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
    )
  }
}

LogoCarousel.propTypes = {
  title: PropTypes.string.isRequired,
  companies: PropTypes.array.isRequired,
  animationSpeed: PropTypes.number.isRequired,
}

export default LogoCarousel
