import React from 'react';

import FloatingTriangle from '../../floating-triangle/floating-triangle';

class ShadowShowcase extends React.Component {
    render() {
        return (
            <section className="gray-section">
                <div className="container">
                    <h2 className="title">Shadows</h2>
                    <div className="three-column">
                        <div><FloatingTriangle color="red" /></div>
                        <div className="two-thirds">
                            <img className="shadow" src="/static/images/image-shadow.jpg" alt="shadow" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ShadowShowcase;
