const updatesExtract = ({title='', date='', name='', extractImage=''}) => { 
	return (
		<div className="updates-extract">
			<div className="updates-extract-background-image" style={{backgroundImage: `url(${extractImage})`}}></div>
			<div className="updates-extract-text-container">
				<div className="update-extract-type">update</div>
				<h2 className="update-extract-title">{title}</h2>
				<span className="update-extract-subtitle">{date} - {name}</span>
			</div>
		</div>
	)
}

export default updatesExtract;