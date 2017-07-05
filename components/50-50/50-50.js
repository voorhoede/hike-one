import React from 'react';

class FiftyFifty extends React.Component {
    render() {
        const props = this.props;
        return (
            <section className={`fifty-fifty-container clearfix container container-inner ${props.className ? props.className : ''}`}>
                <div className="fifty-fifty-image">

                    <img className="shadow" src={props.image} alt="" />

                </div>
                <div className="fifty-fifty-text">

                    <h2>{props.title}</h2>
                    <p>{props.text}</p>

                </div>
            </section>
        );
    }
}

export default FiftyFifty;
