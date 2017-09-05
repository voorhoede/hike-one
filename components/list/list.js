const List = ({items = [] }) => (
	<ul className="list">
		{items.map((item, index) => (
			<li key={index}> {item} </li>
		))}
	</ul>
);

export default List;
