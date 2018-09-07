const Authors = ({authors=[]}) => {
	return (
		<span>{authors.map(author => author.name).join(', ')}</span>
	)
}

export default Authors;
