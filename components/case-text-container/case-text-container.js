import React from 'react';

class CaseTextContainer extends React.Component {
    render() {
        return (
            <section className="case-text-container container">
                {this.props.children}
            </section>
        );
    }
}

export default CaseTextContainer;
