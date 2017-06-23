import React from 'react';

import SimpleHeader     from './style-guide-header/style-guide-header';
import TriangleShowcase from './triangle-showcase/triangle-showcase';
import ShadowShowcase   from './shadow-showcase/shadow-showcase';
import Typography       from './typography/typography';
import ButtonShowcase   from './button-showcase/button-showcase';

class StyleGuide extends React.Component {
    render() {
        return (
            <main>
                <SimpleHeader />
                <TriangleShowcase />
                <ShadowShowcase />
                <Typography />
                <ButtonShowcase />
            </main>
        );
    }
}

export default StyleGuide;
