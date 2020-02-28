import { Component } from 'react';
import PropTypes from 'prop-types';
import {
	timelineDiamond,
	timelineDoubleDiamond,
	timelineTriangles,
} from './page-header-new-animations';
import { ShapesDiamond, ShapesDoubleDiamond, ShapesTriangles } from './page-header-new-shapes';

class PageHeaderNew extends Component {
	constructor(props) {
		super(props);
		this.timeline = null;
		this.colorByName = {
			diamond: '#fe595b',
			doubleDiamond: '#45d33c',
			triangles: '#8415BC',
		};
		this.state = {
			currentColor: '#ffffff',
		};
	}

	componentDidMount() {
		const { animation } = this.props;
		if (animation && animation !== 'basic') {
			const animationByName = {
				diamond: timelineDiamond(),
				doubleDiamond: timelineDoubleDiamond(),
				triangles: timelineTriangles(),
			};

			this.timeline = animationByName[animation];
			this.timeline.timeScale(1).play();
		}
	}

	componentDidUpdate(prevProps, prevState) {
		const { animation } = this.props;
		if (animation && animation !== 'basic') {
			const animationByName = {
				diamond: timelineDiamond(),
				doubleDiamond: timelineDoubleDiamond(),
				triangles: timelineTriangles(),
			};

			if (prevProps.animation !== animation) {
				this.setState({ currentColor: this.colorByName[animation] });
			}

			this.timeline.pause();
			this.timeline = animationByName[animation];
			this.timeline.timeScale(1).play();
		}
	}

	render() {
		const { animation, animationBackgroundColor, animationTriangleColor, title } = this.props;
		const { currentColor } = this.state;
		const shapesByName = {
			diamond: ShapesDiamond,
			doubleDiamond: ShapesDoubleDiamond,
			triangles: ShapesTriangles,
		};

		return (
			<section className="page-header-new" style={{ backgroundColor: currentColor }}>
				{animation === 'basic' ? (
					<PageHeaderNewAnimationBasic
						animationTriangleColor={animationTriangleColor.hex}
						animationBackgroundColor={animationBackgroundColor.hex}
					/>
				) : (
					<PageHeaderNewAnimation
						Component={shapesByName[animation]}
						color={this.colorByName[animation]}
					/>
				)}
				<div className="page-header-new__content container">
					<h1 className="page-header-new__title">{title}</h1>
				</div>
			</section>
		);
	}
}

const PageHeaderNewAnimation = ({ Component = null, color = '' }) => (
	<div className="page-header-new__animation">
		<div className="page-header-new__animation-background" style={{ backgroundColor: color }}></div>
		<Component />
	</div>
);

const PageHeaderNewAnimationBasic = ({ animationTriangleColor, animationBackgroundColor }) => (
	<div className="page-header-new__animation--basic">
		<div
			className="page-header-new__animation-background"
			style={{ backgroundColor: animationBackgroundColor }}
		>
			{['-50s', '-30s', '-10s'].map((x, i) => (
				<svg
					key={i}
					style={{ animationDelay: x }}
					fill={animationTriangleColor}
					className="page-header-new__animation-triangle"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 96 109"
				>
					<path
						fillRule="evenodd"
						d="M2.502.064l91.42 23.673a2 2 0 0 1 1.205 2.98L45.803 107.28a2 2 0 0 1-3.56-.296L.146 2.75A2 2 0 0 1 2.502.064z"
					/>
				</svg>
			))}
		</div>
	</div>
);

PageHeaderNewAnimation.propTypes = {
	Component: PropTypes.func,
	color: PropTypes.string,
};

PageHeaderNew.propTypes = {
	animation: PropTypes.oneOf(['basic', 'diamond', 'doubleDiamond', 'triangles']),
	animationBackgroundColor: PropTypes.object,
	animationTriangleColor: PropTypes.object,
	title: PropTypes.string,
};

export default PageHeaderNew;
