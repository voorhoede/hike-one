import React from 'react';

class FullWidthImage extends React.Component {
    render() {
        return (
            <div className="full-width-image"  style={{backgroundImage: `url(${this.props.image})`}}></div>
        );
    }
}

export default FullWidthImage;
