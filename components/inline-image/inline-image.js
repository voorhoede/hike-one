const inlineImage= ({image = '#', caption = null, large = false}) => (
	<div className={`inline-image ${large ? 'inline-image-large' : ''}`}>
		<img src={image} />
		{caption && <p>{ caption }</p>}
	</div>
);

export default inlineImage;

