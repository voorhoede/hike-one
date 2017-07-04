import React from 'react';

class QuoteBlock extends React.Component {
    render() {
        const props = this.props;
        return (
            <section className={`quote-block ${props.color ? props.color: ''}`}>
                <blockquote>“{props.quote}”</blockquote>
                <div className="quote-block-from">
                    <img src={props.fromImage} alt="" />
                    <div className="quote-block-from-text">
                        <p className="name">{props.fromName}</p>
                        <p className="title">{props.fromTitle}</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default QuoteBlock;
