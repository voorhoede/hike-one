import BulletPointTriangle from '../icons/bullet-point-triangle';

const TextBlockList = ({listValues=''}) => (
	<div>
		<h3 className="text-block-subtitle">{listValues.title}</h3>
		<ul className="text-block-list">
		{  listValues.values.map((item, index) => (
			<li key={index} className="text-block-list-item">
				<span className="text-block-list-icon">
					<BulletPointTriangle/>
				</span>	
				<span className="text-block-list-text">
					{item}
				</span>
			</li>	
		))}
		</ul>
	</div>
);

export default TextBlockList;