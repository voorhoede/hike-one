const bodyQuote = ({quote = '', quotee = ''}) => (
	<blockquote className="body-quote">
		"{quote}"
		<cite className="body-quote-quotee">{quotee}</cite>
	</blockquote>
);

export default bodyQuote;
