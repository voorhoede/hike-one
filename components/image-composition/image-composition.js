const ImageComposition = ({images=[]}) => (
	<div className="image-composition">
		{ Object.values(images).map((image, index) => {	
			return (
				<div className={`${image.alignRight ? "image-composition-align-right" : "image-composition-align-left"}`}>
					<img src={image.url} className="image-composition-image" key={index} />
				</div>
			)
		})}
	</div>
);

export default ImageComposition;