const Person = ({image=''}) => (
	<div className="image-composition-float-left image-composition-padded">
		<img src={image.photo.url} alt="" className="image-composition-image" />
			<div className="person image-composition-text image-composition-text-center">
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