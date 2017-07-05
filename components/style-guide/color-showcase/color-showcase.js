import React from 'react';

import PiramideTriangle from '../piramide-triangle/piramide-triangle';

class TriangleShowcase extends React.Component {
    render() {
        return (
            <div className="color-showcase container">

                <h2 className="style-guide-title">Colors</h2>

                <div className="color-grid">

                    <div className="color-grid-item">
                        <PiramideTriangle color="red" />
                        <p className="color-name">#FE595B</p>
                    </div>

                    <div className="color-grid-item">
                        <PiramideTriangle color="purple" />
                        <p className="color-name">#8314BB</p>
                    </div>

                    <div className="color-grid-item">
                        <PiramideTriangle color="blue" />
                        <p className="color-name">#00AAE9</p>
                    </div>

                    <div className="color-grid-item">
                        <PiramideTriangle color="yellow" />
                        <p className="color-name">#FFE044</p>
                    </div>

                    <div className="color-grid-item">
                        <PiramideTriangle color="green" />
                        <p className="color-name">#45D33C</p>
                    </div>

                    <div className="color-grid-item">
                        <PiramideTriangle color="gray" />
                        <p className="color-name">#9B9B9B</p>
                    </div>

                    <div className="color-grid-item">
                        <PiramideTriangle color="dark-gray" />
                        <p className="color-name">#272727</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default TriangleShowcase;
