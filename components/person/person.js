const Person = ({image}) => (
	<div className="person">
		<img srcSet={`
			${image.photo.url}&auto=format&q=90&w=165 375w,
			${image.photo.url}&auto=format&q=90&w=362 480w
		`} sizes={`
			(max-width: 375px) 165px, 375px
		`} src={`${image.photo.url}&auto=format&q=90&w=165`} alt="" className="person-image" />
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