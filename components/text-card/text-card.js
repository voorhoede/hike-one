const TextCard = ({title = '', text = ''}) => (
	<div className="text-card shadow">
		<h2>{title}</h2>
		<p>{text}</p>
	</div>
);

export default TextCard;
