import React from 'react';

import PrimaryButtonLink from '../buttons/button-primary/button-primary-link';

class GetToKnowUs extends React.Component {
    render() {
        const props = this.props;
        return (
            <section className="get-to-know-us js-bottom-element" style={{backgroundImage: `url(${props.image})`}}>
                <div className="container">
                    <h2>{props.title}</h2>
                    <PrimaryButtonLink href="#" value={props.button} />
                </div>
            </section>
        );
    }
}

export default GetToKnowUs;
