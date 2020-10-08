import { Component } from 'react';
import PropTypes from 'prop-types';
import lazyLoad from '../_helpers/lazyLoad';
import setImageParams from '../_helpers/setImageParameters';

class InlineImage extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const options = {
			threshold: 0.3,
		};

		lazyLoad(this.element, options);
	}

	ratio() {
		const { width, height } = this.props;
		const maxRatio = 1.3;
		const videoHeight = Math.min(width * maxRatio, height);

		return (videoHeight / width) * 100;
	}

	render() {
		const { url = '' } = this.props;
		const imageRatio = this.ratio();
		const imageParams = { fit: 'max' };

		return (
			<div className="inline-image" style={{ paddingBottom: `${imageRatio}%` }}>
				<img
					ref={(node) => (this.element = node)}
					className="image"
					srcSet={`
						${setImageParams(url, { ...imageParams, w: 499 })} 499w,
						${setImageParams(url, { ...imageParams, w: 499, dpr: 2 })} 998w,
						${setImageParams(url, { ...imageParams, w: 767 })} 767w,
						${setImageParams(url, { ...imageParams, w: 767, dpr: 2 })} 1534w,
						${setImageParams(url, { ...imageParams, w: 821 })} 821w,
						${setImageParams(url, { ...imageParams, w: 821, dpr: 2 })} 1642w,
					`}
					sizes={`
						(max-width: 499px) 499px,
						(max-width: 767px) 767px,
						(min-width: 768px) 821px
					`}
					data-lazy-src={`${setImageParams(url, { ...imageParams, w: 821 })}`}
					alt=""
				/>
			</div>
		);
	}
}

InlineImage.propTypes = {
	url: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
};

export default InlineImage;
