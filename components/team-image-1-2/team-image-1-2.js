const TeamImage1_2 = ({image=''}) => (
	<div className="image-composition-float-left image-composition-padded">
		<img src={image.photo.url} alt="" className="image-composition-image" />
		<span className="image-composition-image-title">
			{image.title}
		</span>
	</div>
)
export default TeamImage1_2;