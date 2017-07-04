import React from 'react';

class CaseText extends React.Component {
    render() {
        const props = this.props;
        return (
            <section className={`case-text ${props.className ? props.className : ''}`}>

                {props.title && <h2>{props.title}</h2>}

                {props.text && <p>{props.text}</p>}

                {props.image && <img className="shadow" src={props.image} alt="" />}

            </section>
        );
    }
}

export default CaseText;
