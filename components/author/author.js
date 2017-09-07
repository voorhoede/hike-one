const Author = ({name='', role='', photoUrl='', summary=''}) => (
	<div className="author">
		<img className="author-image"	
			src={`${photoUrl}&auto=format&fm=jpg&fit=crop&q90&h=123&w=92 `}/>	
		<div className="author-text">
			<p className="author-name">{name}</p>
			<p className="author-role">{role}</p>
			<p className="author-summary">{summary}</p>
		</div>
	</div>	
)

export default Author;