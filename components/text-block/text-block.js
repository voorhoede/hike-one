import BulletPointTriangle from '../icons/bullet-point-triangle';

const TextBlock = ({color = '', alignment='', size='', list=''}) => (
	<div className={`text-block ${color} ${alignment} text-block-${size}`}>
		<h3 className="text-block-subtitle">{list.title}</h3>
		{ list && 
			<ul className="text-block-list">
			{  
				list.values.map((item,index) => {
					return (
						<li key={index} className="text-block-list-item">
							<span className="text-block-list-icon">
								<BulletPointTriangle/>
							</span>	
							<span className="text-block-list-text">
								{item}
							</span>
						</li>	
					)
				}) 
			}
			</ul>
		}
	</div>
);

export default TextBlock;