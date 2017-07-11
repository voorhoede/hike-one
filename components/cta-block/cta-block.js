import React from 'react';

import PrimaryButtonLink from '../buttons/button-primary/button-primary-link';

class CTABlock extends React.Component {
    render() {
        const props = this.props;
        return (
            <section className="cta-block" style={{backgroundImage: `url(${props.image})`}}>
                <div className="container">
                    <h2>{props.title}</h2>
                    <PrimaryButtonLink href="#" value={props.button} />
                </div>
            </section>
        );
    }
}

export default CTABlock;
