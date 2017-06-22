import React from 'react';

class ServiceApproach extends React.Component {
    render() {
		const props = this.props;
        return (
            <section className="services-approach">
                <div className="services-approach-text">
                    <h2 className="section-header">{props.title}</h2>
                    <p>{props.text}</p>
                </div>
                <img alt=""/>
            </section>
        );
    }
}

export default ServiceApproach;
