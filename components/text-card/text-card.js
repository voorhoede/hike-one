import React from 'react';

class TextCard extends React.Component {
    render() {
        const props = this.props;
        return (
            <div className="text-card shadow">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        );
    }
}

export default TextCard;
