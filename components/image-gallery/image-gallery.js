import FullWidthImage from '../full-width-image/full-width-image';
class ImageGallery extends React.Component{
	constructor() {
		super();
		this.showImage = this.showImage.bind(this);
		this.state = {
			imageIndex: 0
		};
	}

	showImage(index) {
		this.setState({
			imageIndex: index
		});
	}

	render() {
		const {images, title, links} = this.props;
		return (
			<div className="image-gallery">
				{
					images.map(
						(image, index) => {
							return <FullWidthImage
								key={index}
								imageIndex={this.state.imageIndex}
								index={index}
								image={image.url}
								title={title} 
								links={links} 
							/>
						}
					)
				}
				
				<div className="full-width-image-text">
					{ links &&
						links.map(
							(link, i) => {
								return <button key={i} onClick={() => { this.showImage(i) }}
									className="full-width-image-action">{link.title}</button>
							}
						)
					}	
				</div>
			</div>
		)
	}
}
export default ImageGallery;