import React from 'react';

import Triangle from '../../shapes/triangle/triangle';

class ShadowShowcase extends React.Component {
    render() {
        return (
            <section className="style-guide-section">
                <div className="container">
                    <h2 className="style-guide-title">Shadows</h2>
                    <div className="style-guide-column-three">
                        <div><Triangle color="red" shadow /></div>
                        <div className="two-thirds">
                            <img className="shadow shadow-showcase-image" src="/static/images/image-shadow.jpg" alt="shadow" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ShadowShowcase;
