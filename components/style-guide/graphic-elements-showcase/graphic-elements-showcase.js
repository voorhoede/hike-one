import React from 'react';

import Diamond from '../../shapes/trail-diamond/trail-diamond';
import DoubleDiamond from '../../shapes/trail-double-diamond/trail-double-diamond';
import Cube from '../../shapes/cube/cube';
import Circle from '../../shapes/circle/circle';
import Triangle from '../../shapes/triangle/triangle';

class GraphicElementsShowcase extends React.Component {
    render() {
        return (
            <div className="graphic-elements-showcase container">
                <h2 className="style-guide-title">Graphic elements</h2>

                <div className="graphic-elements-container">
                    <Diamond shadow="true" />
                    <DoubleDiamond shadow="true" />
                    <Cube shadow="true" />
                    <Circle shadow="true" />
                    <Triangle shadow="true" />
                </div>
            </div>
        );
    }
}

export default GraphicElementsShowcase;
