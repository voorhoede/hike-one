import { Component } from 'react';
import PropTypes from 'prop-types';
import { TimelineLite } from 'gsap';

import ServiceCard from '../service-card/service-card';
import TextCenter from '../text-center/text-center';
import { TrailDiamond, TrailDoubleDiamond, TrailTriangle } from './services-cards-shapes';

const shapes = [TrailDiamond, TrailDoubleDiamond, TrailTriangle];

class ServicesCards extends Component {
	constructor(props) {
		super(props);
		this.onMouseOver = this.onMouseOver.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
		this.setLeftTimeline = this.setLeftTimeline.bind(this);
		this.setCenterTimeline = this.setCenterTimeline.bind(this);
		this.setRightTimeline = this.setRightTimeline.bind(this);
	}

	componentDidMount() {
		this.setLeftTimeline();
		this.setCenterTimeline();
		this.setRightTimeline();
	}

	setLeftTimeline() {
		this.tlLeft = new TimelineLite();
		this.tlLeft.pause().to('.animated-shape.diamond .shape-front', 0.3, {
			attr: {
				width: '+=32',
				height: '+=32',
				x: '-=14',
				y: '-=14',
				rx: '+=103',
				ry: '+=103',
			},
		});
	}

	setCenterTimeline() {
		this.tlCenter = new TimelineLite();
		this.tlCenter
			.pause()
			.to('.animated-shape.double-diamond .shape-back', 0.4, {
				x: '+=110',
				rotation: '-=90',
				transformOrigin: 'center',
			})
			.to(
				'.animated-shape.double-diamond .shape-front',
				0.4,
				{
					x: '-=110',
					rotation: '+=90',
					transformOrigin: 'center',
				},
				'-=0.4'
			);
	}

	setRightTimeline() {
		this.tlRight = new TimelineLite();
		this.tlRight
			.pause()
			.to('.animated-shape.triangle .shape-back', 0.3, {
				y: '-=312',
				scale: '-=0.5',
				transformOrigin: 'center',
			})
			.to(
				'.animated-shape.triangle .shape-front',
				0.3,
				{
					y: '-=408',
					transformOrigin: 'center',
				},
				'-=0.3'
			);
	}

	onMouseOver(item) {
		switch (item) {
			case 'new-product-design':
				this.tlLeft.timeScale(1).play();
				break;
			case 'ux-design':
				this.tlCenter.timeScale(1).play();
				break;
			case 'training-and-academy':
				this.tlRight.timeScale(1).play();
				break;
		}
	}

	onMouseLeave(item) {
		switch (item) {
			case 'new-product-design':
				this.tlLeft.timeScale(1.5).reverse();
				break;
			case 'ux-design':
				this.tlCenter.timeScale(1.75).reverse();
				break;
			case 'training-and-academy':
				this.tlRight.timeScale(1.25).reverse();
				break;
		}
	}

	render() {
		const { services = [], title = '', body = '', classes = '' } = this.props;

		return (
			<div className={`services-cards container clearfix ${classes}`}>
				<TextCenter title={title} text={body} />
				<div className="container-inner">
					{Object.values(services).map((item, index) => (
						<ServiceCard
							key={index}
							item={item}
							Component={shapes[index]}
							onMouseOver={this.onMouseOver}
							onMouseLeave={this.onMouseLeave}
						/>
					))}
				</div>
			</div>
		);
	}
}

ServicesCards.propTypes = {
	services: PropTypes.array,
	title: PropTypes.string,
	body: PropTypes.string,
	classes: PropTypes.string,
};

export default ServicesCards;
