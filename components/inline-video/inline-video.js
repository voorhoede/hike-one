import React, { Component } from 'react'
import PropTypes from 'prop-types'

class InlineVideo extends Component {
  binaryBoolean = value => (value ? 1 : 0)

  videoSrc = () => {
    const { autoplay, loop } = this.props
    const { provider, providerUid } = this.props.video
    const mute = autoplay || this.props.mute

    switch (provider) {
      case 'vimeo':
        return `https://player.vimeo.com/video/${providerUid}?autoplay=${this.binaryBoolean(autoplay)}&muted=${this.binaryBoolean(mute)}&loop=${this.binaryBoolean(loop)}`

      case 'youtube':
        return `https://www.youtube.com/embed/${providerUid}?autoplay=${this.binaryBoolean(autoplay)}&mute=${this.binaryBoolean(mute)}&loop=${this.binaryBoolean(loop)}&playlist=${providerUid}`

      default:
        console.error(`unsupported video provider: ${provider}`) // eslint-disable-line no-console
        return ''
    }
  }

  ratio = () => {
    const { width, height } = this.props.video
    const maxRatio = 1.3
    const videoHeight = Math.min(width * maxRatio, height)

    return (videoHeight / width) * 100
  }

  render() {
    const { classes } = this.props
    const videoRatio = this.ratio()

    return (
      <div className={`inline-video ${classes}`} style={{ paddingBottom: `${videoRatio}%` }}>
        <iframe
          className="video"
          src={this.videoSrc()}
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div>
    )
  }
}

InlineVideo.propTypes = {
  video: PropTypes.object.isRequired,
  autoplay: PropTypes.string.isRequired,
  mute: PropTypes.string.isRequired,
  loop: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
}
export default InlineVideo
