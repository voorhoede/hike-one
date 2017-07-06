import React from 'react';

class QuoteBlock extends React.Component {
    render() {
        const props = this.props;
        return (
            <blockquote className={`quote-block ${props.color ? props.color: ''}`}>
                “{props.quote}”
                <cite className="quote-cite">
                    <img src={props.citeImage} alt="" />
                    <div className="quote-cite-content">
                        <p className="quote-cite-name">{props.citeName}</p>
                        <p className="quote-cite-title">{props.citeTitle}</p>
                    </div>
                </cite>
            </blockquote>
        );
    }
}

export default QuoteBlock;
