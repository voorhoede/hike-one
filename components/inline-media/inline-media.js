import { InlineVideo, InlineImage } from '../'

const InlineMedia = ({ image=null, large=false, video=null, caption='' }) => (
	<div className={`inline-media ${large ? 'inline-media-large' : ''}`}>
		<div className={`inline-media-container ${large ? 'inline-media-container-large': ''}`}>
			{video && (
				<InlineVideo
					video={video.video}
					autoplay={video.autoplay}
					mute={video.mute}
					loop={video.loop}
				/>
			)}

			{image && <InlineImage image={image} />}
		</div>
		{caption && <p>{caption}</p>}
	</div>
)

export default InlineMedia;
