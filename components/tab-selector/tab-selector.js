
import TrailDiamond from '../shapes/trail-diamond/trail-diamond';
import TrailTriangle from '../shapes/trail-triangle/trail-triangle';
import TrailDoubleDiamond from '../shapes/trail-double-diamond/trail-double-diamond';
import Link from 'next/link';

const TabSelector = ({product,design,training}) => (
	<div className="tab-selector container shadow">
		<Link href={`${product.target}`}>
			<a className="tab-selector-item tab-selector-item-blue">
				<div className="tab-selector-item-shape shadow">
					<TrailDiamond />
				</div>
				<h2 className="tab-selector-item-title">
					{product.title}
				</h2>
			</a>
		</Link>	
		<Link href={`${design.target}`}>
			<a className={`tab-selector-item tab-selector-item-${design.color}`}>
				<div className="tab-selector-item-shape shadow">
					<TrailDoubleDiamond />
				</div>
				<h2 className="tab-selector-item-title">
					{design.title}
				</h2>
			</a>
		</Link>	
		<Link href={`${training.target}`}>
			<a className="tab-selector-item tab-selector-item--${training.color}">
				<div className="tab-selector-item-shape shadow">
					<TrailTriangle />
				</div>
				<h2 className="tab-selector-item-title">
					{training.title}
				</h2>
			</a>
		</Link>
	</div>
);

export default TabSelector;