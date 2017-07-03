import React from 'react';

import ButtonTertiary from '../buttons/button-tertiary/button-tertiary';
import Shapes from '../services-intro/services-intro-shapes';

class ServicesIntro extends React.Component {
    render() {
    	const props = this.props;
        return (
            <section className="services-intro">
				<Shapes />
				<div className="container-inner">
					<h2 className="section-header content">{props.title}</h2>
					<ButtonTertiary href="#" classes="content" value={props.buttonLabel} />
				</div>
            </section>
        );
    }
}

export default ServicesIntro;
