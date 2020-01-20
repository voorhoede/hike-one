import { Component } from 'react';
import PropTypes from 'prop-types';

class InlineVideo extends Component {
	constructor(props) {
		super(props);
		this.binaryBoolean = this.binaryBoolean.bind(this);
		this.videoSrc = this.videoSrc.bind(this);
		this.ratio = this.ratio.bind(this);
	}

	binaryBoolean(value) {
		return value ? 1 : 0;
	}

	videoSrc() {
		const { autoplay, controls, loop } = this.props;
		const { provider, providerUid } = this.props.video;
		const mute = autoplay || this.props.mute;

		switch (provider) {
			case 'vimeo':
				return `https://player.vimeo.com/video/${providerUid}
          ?autoplay=${this.binaryBoolean(autoplay)}
          &autopause=${this.binaryBoolean(!autoplay)}
          &muted=${this.binaryBoolean(mute)}
          &loop=${this.binaryBoolean(loop)}
          &controls=${this.binaryBoolean(controls)}`;

			case 'youtube':
				return `https://www.youtube.com/embed/${providerUid}
          ?autoplay=${this.binaryBoolean(autoplay)}
          &mute=${this.binaryBoolean(mute)}
          &loop=${this.binaryBoolean(loop)}
          &controls=${this.binaryBoolean(controls)}
          &disablekb=${this.binaryBoolean(!controls)}
          &playlist=${providerUid}`;

			default:
				console.error(`unsupported video provider: ${provider}`); // eslint-disable-line no-console
				return '';
		}
	}

	ratio() {
		const { width, height } = this.props.video;
		const maxRatio = 1.3;
		const videoHeight = Math.min(width * maxRatio, height);

		return (videoHeight / width) * 100;
	}

	render() {
		const { classes, controls } = this.props;
		const videoRatio = this.ratio();
		const controlsClass = controls ? '' : 'inline-video--is-background';
		const videoSrc = this.videoSrc().replace(/\s+/g, '');

		return (
			<div
				className={`inline-video ${classes} ${controlsClass}`}
				style={{ paddingBottom: `${videoRatio}%` }}
			>
				<iframe
					className="video"
					src={videoSrc}
					frameBorder="0"
					webkitallowfullscreen="true"
					mozallowfullscreen="true"
					allowFullScreen
				/>
			</div>
		);
	}
}

InlineVideo.propTypes = {
	video: PropTypes.object,
	autoplay: PropTypes.bool,
	controls: PropTypes.bool,
	mute: PropTypes.bool,
	loop: PropTypes.bool,
	classes: PropTypes.string,
};
export default InlineVideo;
