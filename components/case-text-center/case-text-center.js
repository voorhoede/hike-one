import React from 'react';

class CaseTextCenter extends React.Component {
    render() {
        const props = this.props;
        return (
            <section className="case-text-center container">
                <div className="container-inner">
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </div>
            </section>
        );
    }
}

export default CaseTextCenter;
