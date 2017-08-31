import TabSelectorItem from '../tab-selector-item/tab-selector-item';

const colors = ['blue', 'green', 'purple'];
const shapes = ['diamond', 'doubleDiamond', 'triangle'];

const TabSelector = ({ items='' }) => (
	<div className="tab-selector container shadow">
		{ 
			Object.values(items)
				.map((item, index) => {
					item.color = colors[index];
					item.shape = shapes[index];
					return <TabSelectorItem {...item} key={index} />;
				})
		}
	</div>
);

export default TabSelector;