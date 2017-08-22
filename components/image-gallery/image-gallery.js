import React from 'react';
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
		this.setState({imageIndex: index});
	}

	render() {
		const { items, title } = this.props;
		const { imageIndex } = this.state;
		return (
			<div className="image-gallery">
				{ items.map(
					(item, index) => (
						<div key={index}>
							{ imageIndex === index &&
							<FullWidthImage
								index={index}
								image={item.url}
								overlay={true} />
							}
						</div>
					)
				)}
				<div className="image-gallery-navigation">
					{ title && <h2 className="image-gallery-title">{title}</h2> }
					{ items.map(
						(item, index) => (
							<button key={index}
								onClick={() => this.showImage(index)}
								className={`image-gallery-btn
								${imageIndex === index ? 'is-active' : ''}`}>
								{ item.title }
							</button>
						)
					)}
				</div>
			</div>
		);
	}
}
export default ImageGallery;
