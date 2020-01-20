import PropTypes from 'prop-types';
import InlineVideo from '../inline-video/inline-video';
import InlineImage from '../inline-image/inline-image';

const InlineMedia = ({ image = null, large = false, video = null, caption = '' }) => (
	<div className={`inline-media ${large ? 'inline-media-large' : ''}`}>
		<div className={`inline-media-container ${large ? 'inline-media-container-large' : ''}`}>
			{video && (
				<InlineVideo
					video={video.video}
					autoplay={video.autoplay}
					mute={video.mute}
					loop={video.loop}
					controls={video.controls}
				/>
			)}
			{image && <InlineImage url={image.url} width={image.width} height={image.height} />}
		</div>
		{caption && <p>{caption}</p>}
	</div>
);

InlineMedia.propTypes = {
	image: PropTypes.object,
	large: PropTypes.bool,
	video: PropTypes.object,
	caption: PropTypes.string,
};

export default InlineMedia;
