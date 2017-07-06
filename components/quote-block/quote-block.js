import React from 'react';

class QuoteBlock extends React.Component {
    render() {
        const props = this.props;
        return (
            <blockquote className={`quote-block ${props.color ? props.color: ''}`}>
                “{props.quote}”
                <cite className="quote-block-from">
                    <img src={props.fromImage} alt="" />
                    <div className="quote-block-from-text">
                        <p className="name">{props.fromName}</p>
                        <p className="title">{props.fromTitle}</p>
                    </div>
                </cite>
            </blockquote>
        );
    }
}

export default QuoteBlock;
