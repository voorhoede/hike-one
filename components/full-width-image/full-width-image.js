import React from 'react';

class FullWidthImage extends React.Component {
    render() {
        const props = this.props;
        return (
            <div className="full-width-image"  style={{backgroundImage: `url(${this.props.image})`}}>
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
