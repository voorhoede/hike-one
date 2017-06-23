import React from 'react'

import Logo  from '../../logo/logo';

class SimpleHeader extends React.Component {
    render() {
        return (
            <header className="simple-header container">
                <Logo color="black"/>
                <p>Style Guide v. 0.1</p>
            </header>
        );
    }
}

export default SimpleHeader;
