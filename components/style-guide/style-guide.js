import React from 'react';

import StyleGuideHeader from './style-guide-header/style-guide-header';
import ColorShowcase from './color-showcase/color-showcase';
import ShadowShowcase from './shadow-showcase/shadow-showcase';
import Typography from './typography/typography';
import ButtonShowcase from './button-showcase/button-showcase';

class StyleGuide extends React.Component {
    render() {
        return (
            <main>
                <StyleGuideHeader />
                <ColorShowcase />
                <ShadowShowcase />
                <Typography />
                <ButtonShowcase />
            </main>
        );
    }
}

export default StyleGuide;
