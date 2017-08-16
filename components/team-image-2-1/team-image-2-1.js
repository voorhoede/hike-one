const TeamImage2_1 = ({image}) => (
	<div className="image-composition-align-left image-composition-padded">
		<img srcSet={`
			${image.photo.url}&auto=format&q=90&w=165 375w,
			${image.photo.url}&auto=format&q=90&w=452 480w
		`} sizes={`
			(max-width: 375px) 165px, 452px
		`} src={`${image.photo.url}&auto=format&q=90&w=165`}  alt="" className="image-composition-image" />
		<span className="image-composition-image-title">
			{image.title}
		</span>
	</div>
)
export default TeamImage2_1;