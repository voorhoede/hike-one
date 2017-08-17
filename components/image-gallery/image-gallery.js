import FullWidthImage from '../full-width-image/full-width-image';

const ImageGallery = ({images='', title={}, links={}}) => (
	<div className="image-gallery">
		{
			Object.values(images).map(
				(image, index) => {
					return <FullWidthImage
						key={index}
						image={image.url}
						title={title} 
						links={links} 
					/>
				}
			)
		}
	</div>
)

export default ImageGallery;