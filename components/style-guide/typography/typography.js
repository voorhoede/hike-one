import React from 'react';

class Typography extends React.Component {
    render() {
        return (
            <section className="container">
                <h2 className="style-guide-title">Typography</h2>

                <h1>H1</h1>
                <h2>H2</h2>
                <h3>H3</h3>
                <h3 className="subtitle">Subtitle 1</h3>
                <p>Body</p>

                <h3 className="style-guide-sub-title">List</h3>
                <ul>
                    <li>Prototyping</li>
                    <li>Usability testing</li>
                    <li>Interviews</li>
                </ul>
            </section>
        );
    }
}

export default Typography;
