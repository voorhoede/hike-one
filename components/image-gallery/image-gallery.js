import { Component } from 'react';
import PropTypes from 'prop-types';
import FullWidthImage from '../full-width-image/full-width-image';

class ImageGallery extends Component {
	constructor(props) {
		super(props);
		this.showImage = this.showImage.bind(this);
		this.state = {
			imageIndex: 0,
		};
	}

	showImage(index) {
		this.setState({ imageIndex: index });
	}
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		const { items, title } = this.props;
		const { imageIndex } = this.state;

		return (
			<div className="image-gallery">
				{items.map((item, index) => (
					<div
						key={index}
						className={`image-gallery-img ${imageIndex === index ? 'is-active' : ''}`}
					>
						{imageIndex === index && (
							<FullWidthImage index={index} image={item.url} overlay={true} />
						)}
					</div>
				))}
				<div className="image-gallery-navigation">
					{title && <h2 className="image-gallery-title">{title}</h2>}
					{items.map((item, index) => (
						<button
							key={index}
							onClick={() => this.showImage(index)}
							className={`image-gallery-btn ${imageIndex === index ? 'is-active' : ''}`}
						>
							{item.title}
						</button>
					))}
				</div>
			</div>
		);
	}
}

ImageGallery.propTypes = {
	items: PropTypes.array,
	title: PropTypes.string,
};

export default ImageGallery;
