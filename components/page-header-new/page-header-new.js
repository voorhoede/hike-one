import { Component } from 'react';
import PropTypes from 'prop-types';
import {
	timelineDiamond,
	timelineDoubleDiamond,
	timelineTriangles,
} from './page-header-new-animations';
import {
	ShapesDiamond,
	ShapesDoubleDiamond,
	ShapesTriangles,
} from './page-header-new-shapes';

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
		const animationByName = {
			diamond: timelineDiamond(),
			doubleDiamond: timelineDoubleDiamond(),
			triangles: timelineTriangles(),
		};

		this.timeline = animationByName[animation];
		this.timeline.timeScale(1).play();
	}

	componentDidUpdate(prevProps, prevState) {
		const { animation } = this.props;
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

	render() {
		const { animation, title } = this.props;
		const { currentColor } = this.state;
		const shapesByName = {
			diamond: ShapesDiamond,
			doubleDiamond: ShapesDoubleDiamond,
			triangles: ShapesTriangles,
		};

		return (
			<section
				className="page-header-new"
				style={{ backgroundColor: currentColor }}
			>
				<PageHeaderNewAnimation
					Component={shapesByName[animation]}
					color={this.colorByName[animation]}
				/>
				<div className="page-header-new__content container">
					<h1 className="page-header-new__title">{title}</h1>
				</div>
			</section>
		);
	}
}

const PageHeaderNewAnimation = ({ Component = null, color = '' }) => (
	<div className="page-header-new__animation">
		<div
			className="page-header-new__animation-background"
			style={{ backgroundColor: color }}
		></div>
		<Component />
	</div>
);

PageHeaderNewAnimation.propTypes = {
	Component: PropTypes.func,
	color: PropTypes.string,
};

PageHeaderNew.propTypes = {
	animation: PropTypes.oneOf(['diamond', 'doubleDiamond', 'triangles']),
	title: PropTypes.string,
};

export default PageHeaderNew;
