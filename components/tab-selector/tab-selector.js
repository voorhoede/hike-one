import Link from 'next/link';
import { TrailDiamond, TrailDoubleDiamond, TrailTriangle } from './tab-selector-shapes';

const shapes = [TrailDiamond, TrailDoubleDiamond, TrailTriangle];

const TabSelector = ({ services, selected }) => {
	const selectedTab = services.find((service) => service.slug === selected).position - 1;
	const color = ['#fe595b', '#45d33c', '#8314bb'];
	const style = {
		transform: `translateX(${selectedTab * 100}%)`,
		backgroundColor: color[selectedTab],
	};

	return (
		<nav className="tab-selector container shadow">
			{services.map((service, index) => (
				<TabItem
					key={service.slug}
					slug={service.slug}
					title={service.title}
					Component={shapes[index]}
					selected={selected}
				/>
			))}
			<div className="tab-selector__track">
				<span className="tab-selector__track-slider" style={style}></span>
			</div>
		</nav>
	);
};

const TabItem = ({ slug = '', title = '', Component = null, selected = '' }) => (
	<Link href="/service/[slug]" as={`/service/${slug}`}>
		<a className={`tab-selector-item ${selected === slug ? 'is-selected' : ''}`}>
			<div className="tab-selector-item-shape">
				<Component />
			</div>
			<h2 className="tab-selector-item-title">{title}</h2>
		</a>
	</Link>
);

export default TabSelector;
