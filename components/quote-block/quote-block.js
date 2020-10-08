import PropTypes from 'prop-types';
import setImageParams from '../_helpers/setImageParameters';

const imageParams = { fit: 'max' };

const QuoteBlock = ({
	color = '',
	alignment = '',
	quote = '',
	citeImage = '',
	citeName = '',
	citeTitle = '',
}) => (
	<blockquote className={`colored-block ${color} ${alignment}`}>
		{quote && <span className="content">“{quote}”</span>}
		<cite className="quote-cite">
			{quote && (
				<img
					srcSet={`
						${setImageParams(citeImage, { ...imageParams, w: 70, h: 70 })} 70w,
						${setImageParams(citeImage, { ...imageParams, w: 70, h: 70, dpr: 2 })} 140w,
						${setImageParams(citeImage, { ...imageParams, w: 100, h: 100 })} 100w,
						${setImageParams(citeImage, { ...imageParams, w: 100, h: 100, dpr: 2 })} 200w
					`}
					sizes={`(max-width: 767px) 70px, (min-width: 768px) 100px`}
					src={`${setImageParams(citeImage, { ...imageParams, w: 100, h: 100 })}`}
					alt=""
				/>
			)}
			<div className="quote-cite-content content">
				<p className="quote-cite-name">{citeName}</p>
				<p className="quote-cite-title">{citeTitle}</p>
			</div>
		</cite>
	</blockquote>
);

QuoteBlock.propTypes = {
	color: PropTypes.string,
	alignment: PropTypes.string,
	quote: PropTypes.string,
	citeImage: PropTypes.string,
	citeName: PropTypes.string,
	citeTitle: PropTypes.string,
};

export default QuoteBlock;
