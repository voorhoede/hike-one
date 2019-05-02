import React from 'react'
import {Power2, TimelineMax}  from 'gsap'

class Hamburger extends React.Component {
  constructor(props) {
    super(props)
    this.playAnimation = this.playAnimation.bind(this)
    this.reverseAnimation = this.reverseAnimation.bind(this)
  }

  componentDidMount() {
    this.tlHamburger = new TimelineMax({paused: true})
    this.tlHamburger
      .set(this.hamburgerPath1, {transformOrigin: '10% 0'})
      .to(this.hamburgerPath1, 0.3, {
        x: '70%',
        rotation: 135,
        ease: Power2.easeInOut
      })
      .to(this.hamburgerPath2, 0.3, {
        scaleX: 0,
        x: '50%',
        ease: Power2.easeInOut
      }, 0)
      .to(this.hamburgerPath3, 0.3, {
        rotation: 45,
        attr: {y1: 17, y2: 17 , x1: 13, x2: 67},
        x: '-42%',
        ease: Power2.easeInOut
      }, 0)
  }

  playAnimation() {
    this.tlHamburger.play()
  }

  reverseAnimation() {
    this.tlHamburger.reverse()
  }

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
        <line ref={node => this.hamburgerPath1 = node} x1="13" y1="24" x2="67" y2="24" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
        <line ref={node => this.hamburgerPath2 = node} x1="19" y1="40" x2="57" y2="40" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
        <line ref={node => this.hamburgerPath3 = node} x1="24" y1="56" x2="48" y2="56" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/>
      </svg>
    )
  }
}

export default Hamburger
