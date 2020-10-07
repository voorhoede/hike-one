import PropTypes from 'prop-types';
import setImageParams from '../_helpers/setImageParameters';

const imageParams = { fit: 'crop' };

const TeamImage = ({ image = '', title = '' }) => (
	<div className="image-team team-image">
		<img
			srcSet={`
				${setImageParams(image, { ...imageParams, h: 350 })} 250w,
				${setImageParams(image, { ...imageParams, h: 450 })} 480w,
				${setImageParams(image, { ...imageParams, h: 550 })} 768w,
				${setImageParams(image, { ...imageParams, h: 650 })} 1024w,
				${setImageParams(image, { ...imageParams, h: 750 })} 1230w,
				${setImageParams(image, { ...imageParams, h: 850 })} 1440w
			`}
			src={`${image}`}
			alt=""
		/>
		<span className="image-team-title">{title}</span>
	</div>
);

TeamImage.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
};

export default TeamImage;
