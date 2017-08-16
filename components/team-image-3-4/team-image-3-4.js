const TeamImage3_4 = ({image}) => (
	<div className="image-composition-align-left">
		<img src={image.photo.url} alt="" className="image-composition-image" />
		<span className="image-composition-image-title">
			{image.title}
		</span>
	</div>
)
export default TeamImage3_4;