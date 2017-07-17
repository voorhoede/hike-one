import React from 'react';
import Parallax from '../parallax/parallax';

class FullWidthImage extends React.Component {
	constructor() {
		super();
		this.speed = 1.5;
		this.state = {
			offset: 0
		};
	}

	componentDidMount() {
		const windowHeight = document.body.clientHeight || document.documentElement.clientHeight || 0;
		const elementRect = this.parallaxLayer.elementRect;
		const elementHalf = elementRect.height / 2;
		const windowHalf = windowHeight / 2;
		const offset = (elementHalf + windowHalf) * (1 - this.speed);
		this.setState({offset});
	}

	render() {
        const props = this.props;
        return (
            <div className="full-width-image" >
				<Parallax speed={this.speed} duration="0" ref={node => this.parallaxLayer = node}>
					<div className="full-width-image-background"
						style={{
						top: this.state.offset,
						bottom: this.state.offset,
						backgroundImage: `url(${this.props.image})`}} >
					</div>
				</Parallax>
                {(props.title || props.subtitle) &&
					<div className="full-width-image-text">
                    	{ props.title && <h2>{props.title}</h2> }
                    	{ props.subtitle && <p>{props.subtitle}</p> }
                	</div>
                }
            </div>
        );
    }
}

export default FullWidthImage;
