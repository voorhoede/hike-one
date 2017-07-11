import React from 'react';

class TextCard extends React.Component {
    render() {
        const props = this.props;
        return (
            <section className="text-card shadow">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </section>
        )
    }
}

export default TextCard;
