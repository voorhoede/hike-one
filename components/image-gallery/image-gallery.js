import FullWidthImage from '../full-width-image/full-width-image';
class ImageGallery extends React.Component{
	constructor() {
		super();
	}

	render() {
		const {images, title, links} = this.props;
		return (
			<div className="image-gallery">
				{
					Object.values(images).map(
						(image, index) => {
							return <FullWidthImage
								key={index}
								index={index==1}
								image={image.url}
								title={title} 
								links={links} 
							/>
						}
					)
				}
			</div>
		)
	}
}
export default ImageGallery;