import TrailDiamond from '../shapes/trail-diamond/trail-diamond';
import TrailTriangle from '../shapes/trail-triangle/trail-triangle';
import TrailDoubleDiamond from '../shapes/trail-double-diamond/trail-double-diamond';
import Link from 'next/link';

const shapes = {
	diamond: <TrailDiamond />,
	triangle: <TrailTriangle />,
	doubleDiamond: <TrailDoubleDiamond />
};

const TabSelectorItem = ({ shape, title = '', color , href}) => (
	<Link href={`${href}`}>
		<a className={`tab-selector-item tab-selector-item-${color}`}>
			<div className={`tab-selector-item-shape shadow`}>{ shapes[shape] }</div>
			<h2 className="tab-selector-item-title">
				{title}
			</h2>
		</a>
	</Link>	
)

export default TabSelectorItem; 