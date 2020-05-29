import { Component } from 'react';
import { Power2, TimelineLite } from 'gsap';

class Hamburger extends Component {
	constructor(props) {
		super(props);
		this.playAnimation = this.playAnimation.bind(this);
		this.reverseAnimation = this.reverseAnimation.bind(this);
	}

	componentDidMount() {
		this.tlHamburger = new TimelineLite();
		this.tlHamburger
			.pause()
			.set(this.hamburgerPath1, { transformOrigin: '50% 50%' })
			.set(this.hamburgerPath2, { transformOrigin: '50% 50%' })
			.set(this.hamburgerPath3, { transformOrigin: '50% 50%' })
			.to(
				this.hamburgerPath1,
				0.3,
				{
					rotation: 135,
					attr: { x1: 24, y1: 13, x2: 77, y2: 13 },
					ease: Power2.easeInOut,
				},
				0
			)
			.to(
				this.hamburgerPath2,
				0.3,
				{
					scaleX: 0,
					ease: Power2.easeInOut,
				},
				0
			)
			.to(
				this.hamburgerPath3,
				0.3,
				{
					attr: { x1: 21, y1: 21, x2: 58, y2: 58 },
					ease: Power2.easeInOut,
				},
				0
			);
	}

	playAnimation() {
		this.tlHamburger.play();
	}

	reverseAnimation() {
		this.tlHamburger.reverse();
	}

	render() {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
				<line
					ref={(node) => (this.hamburgerPath1 = node)}
					x1="13"
					y1="24"
					x2="67"
					y2="24"
					fill="none"
					stroke="#000"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="4"
				/>
				<line
					ref={(node) => (this.hamburgerPath2 = node)}
					x1="19"
					y1="40"
					x2="57"
					y2="40"
					fill="none"
					stroke="#000"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="4"
				/>
				<line
					ref={(node) => (this.hamburgerPath3 = node)}
					x1="24"
					y1="56"
					x2="48"
					y2="56"
					fill="none"
					stroke="#000"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="4"
				/>
			</svg>
		);
	}
}

export default Hamburger;
