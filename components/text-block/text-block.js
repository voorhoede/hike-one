import BulletPointTriangle from '../icons/bullet-point-triangle';

const TextBlock = ({color = '', alignment='', size='', ourValueslist=''}) => (
	<div className={`text-block ${color} ${alignment} text-block-${size}`}>
		<h3 className="text-block-subtitle">{ourValueslist.title}</h3>
		{ ourValueslist && 
			<ul className="text-block-list">
			{  
				ourValueslist.values.map((item,index) => {
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