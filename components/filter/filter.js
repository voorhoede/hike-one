const filter = ({name, data, activeData, clickHandler}) => (
    <ul className='filter'>
		{ data.map((item, index) => {
			return (
				<li className='filter-item' key={index}>
					<button className={`filter-item-button ${(data.length !== activeData.length && activeData.includes(item) ? 'filter-item-button--active' : '')}`} type='button' onClick={() => clickHandler(name, item)}>{item}</button>
				</li>
			)
		})}
	</ul>
);

export default filter;
