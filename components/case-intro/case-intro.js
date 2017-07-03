import React from 'react';

import ButtonTertiary from '../buttons/button-tertiary/button-tertiary';

class CaseIntro extends React.Component {
    render() {
        const props = this.props;
        return (
            <section className="case-intro" style={{backgroundImage: `url(${props.image})`}}>
                <div className="container">
                    <h1 className="case-intro-title">{props.title}</h1>
                    <p className="case-intro-subtitle">{props.subtitle}</p>
                    <ButtonTertiary />
                </div>
            </section>
        );
    }
}
export default CaseIntro;
