import React from 'react';

import ButtonTertiary from '../buttons/button-tertiary/button-tertiary';
import Shapes from '../services-intro/services-intro-shapes';

class ServicesIntro extends React.Component {
    render() {
    	const props = this.props;
        return (
            <section className="services-intro">
				<div className="container-inner">
					<h2 className="section-header">{props.title}</h2>
					<ButtonTertiary href="#" value={props.buttonLabel} />
				</div>
				<Shapes />
            </section>
        );
    }
}

export default ServicesIntro;
