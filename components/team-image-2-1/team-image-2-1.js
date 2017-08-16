const TeamImage2_1 = ({image}) => (
	<div className="image-composition-align-left image-composition-padded">
		<img src={image.photo.url} alt="" className="image-composition-image" />
		<span className="image-composition-image-title">
			{image.title}
		</span>
	</div>
)
export default TeamImage2_1;