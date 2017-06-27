import React from 'react';

class ServiceApproach extends React.Component {
    render() {
		const props = this.props;
        return (
            <section className="services-approach">
                <p>{props.text}</p>
            </section>
        );
    }
}

export default ServiceApproach;
