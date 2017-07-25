import React from 'react';

const QuoteBlock = ({color = '', quote = '', citeImage, citeName = '', citeTitle = ''}) => (
	<blockquote className={`quote-block ${color}`}>
		<span className="content">
			“{quote}”
		</span>
		<cite className="quote-cite">
			<img src={citeImage} alt="" />
			<div className="quote-cite-content content">
				<p className="quote-cite-name">{citeName}</p>
				<p className="quote-cite-title">{citeTitle}</p>
			</div>
		</cite>
	</blockquote>
);


export default QuoteBlock;
