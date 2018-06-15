const filter = ({filter, onFilter}) => (
    <ul className='filter'>
		{ filter.map((item, index) => {
			const activeClass = item.isActive ? 'filter-item-button--active' : '';
			return (
				<li className='filter-item' key={index}>
					<button
						className={`filter-item-button ${activeClass}`}
						type='button'
						onClick={() => onFilter(filter, index)}
					>
						{item.value}
					</button>
				</li>
			)
		})}
	</ul>
);

export default filter;
