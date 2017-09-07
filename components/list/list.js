import Triangle from '../shapes/triangle/triangle';
const List = ({items = [] }) => (
	<ul className="list">
		{ items.map((item, index) => (
			<li key={index} className="list-item">
				<Triangle color="dark-blue" /> <span className="list-item-text"> {item} </span>
			</li>
		))}
	</ul>
);

export default List;
