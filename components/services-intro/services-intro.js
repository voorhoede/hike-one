import React from 'react';

import ButtonTertiary from '../buttons/button-tertiary/button-tertiary';

class ServicesIntro extends React.Component {
    render() {
    	const props = this.props;
        return (
            <section className="services-intro container-inner">
                <h2 className="section-header">{props.title}</h2>
                <ButtonTertiary href="#" value={props.buttonLabel} />
            </section>
        );
    }
}

export default ServicesIntro;
