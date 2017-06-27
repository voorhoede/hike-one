import React from 'react';

import MoreUnderButton from '../buttons/button-tertiary/button-tertiary';

class ServicesIntro extends React.Component {
    render() {
    	const props = this.props;
        return (
            <section className="services-intro inner-container">
                <h2 className="section-header">{props.title}</h2>
                <MoreUnderButton href="#" value={props.buttonLabel} />
            </section>
        );
    }
}

export default ServicesIntro;
