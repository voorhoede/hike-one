const Person = ({image=''}) => (
	<div className="person">
		<img src={image.photo.url} alt="" className="person-image" />
			<div className="person-text">
				<span className="person-title">
					{image.name}
				</span>
				<span className="person-subtitle">
					{image.role}
				</span>
			</div>
	</div>
)
export default Person;