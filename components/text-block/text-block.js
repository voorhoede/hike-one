const TextBlock = ({color = '', alignment='', size='', text=''}) => (
	<div className={`text-block ${color} ${alignment} text-block-${size}`}>
		<h3 className="text-block-subtitle">{text.subtitle}</h3>
		<ul className="text-block-list flat-list">
		{
			text.values.map((item,index) => {
				return (
					<li key={index} className="text-block-list-item">
						{item}
					</li>	
				)
			}) 
		}
		</ul>
	</div>
);

export default TextBlock;