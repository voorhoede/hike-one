import PropTypes from 'prop-types';

const QuoteBlock = ({
	color = '',
	alignment = '',
	quote = '',
	citeImage,
	citeName = '',
	citeTitle = '',
}) => (
	<blockquote className={`text-block ${color} ${alignment}`}>
		{quote && <span className="content">“{quote}”</span>}
		<cite className="quote-cite">
			{quote && <img src={citeImage} alt="" />}
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
