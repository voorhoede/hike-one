import React, { Component } from 'react'

class InlineVideo extends Component {
	binaryBoolean = value => (value) ? 1 : 0

	videoSrc = () => {
		const { autoplay, loop } = this.props
		const { provider, providerUid } = this.props.video
		const mute = autoplay || this.props.mute

		switch (provider) {
			case 'vimeo':
				return `https://player.vimeo.com/video/${providerUid}?autoplay=1&muted=${this.binaryBoolean(mute)}&loop=${this.binaryBoolean(loop)}`

			case 'youtube':
				return `https://www.youtube.com/embed/${providerUid}?autoplay=1&mute=${this.binaryBoolean(mute)}&loop=${this.binaryBoolean(loop)}&playlist=${providerUid}`

				default:
				console.error(`unsupported video provider: ${provider}`);
				return ''
		}
	}

	ratio = () => {
		const { width, height } = this.props.video
		const maxRatio = 1.5
		const videoHeight = Math.min(height * maxRatio, height)

		return (videoHeight / width) * 100
	}

	render() {
		const videoRatio = this.ratio()

		return (
			<div className="inline-video" style={{ paddingBottom: `${videoRatio}%` }}>
				<iframe
					className="video"
					src={this.videoSrc()}
					frameBorder="0"
					webkitallowfullscreen="true"
					mozallowfullscreen="true"
					allowFullScreen>
				</iframe>
			</div>
		)
	}
}

export default InlineVideo
