const inlineImage= ({image = '#', caption = null, large = false}) => (
	<div className={`inline-image ${large ? 'inline-image-large' : ''}`}>
		<div className="inline-image-container">
			<img 
			srcSet={`
				${image}&auto=format&fm=jpg&fit=crop&q90&h=350&w=445 768w,
				${image}&auto=format&fm=jpg&fit=crop&q90&h=400&w=738 1024w,
				${image}&auto=format&fm=jpg&fit=crop&q90&h=500&w=821 1190w`}
			sizes={`
				(max-width: 320px) calc(100vw - 30px),
				(max-width: 768px) calc(100vw - 30px),
				(max-width: 1024px) 790px,
				821px"`} 
			alt=""  
			src={image}/>
		</div>
		{caption && <p>{ caption }</p>}
	</div>
);

export default inlineImage;

