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
		const {items} = this.props;
		return (
			<div className="image-gallery">
				{ items.map(
					(item, index) => (
						<FullWidthImage
							key={index}
							imageIndex={this.state.imageIndex}
							index={index}
							image={item.url}
							imageOverlay={true}
						/>
					)
				)}
				<div className="full-width-image-text">
					{ items.map(
						(item, i) => (
							<button key={i} onClick={() => this.showImage(i)}
								className="full-width-image-button">
								{item.title}
							</button>
						)
					)}
				</div>
			</div>
		);
	}
}
export default ImageGallery;
