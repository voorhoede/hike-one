import React from 'react';

import Data from '../../data/services/approach.json';

class ServiceApproach extends React.Component {
    render() {
        return (
            <section className="services-approach">
                <div className="services-approach-text">
                    <h2 className="section-header">{Data.title}</h2>
                    <p>{Data.text}</p>
                </div>
                <img alt=""/>
            </section>
        );
    }
}

export default ServiceApproach;
