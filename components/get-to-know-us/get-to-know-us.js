import React from 'react';

import PrimaryButton from '../buttons/button-primary/button-primary';

class GetToKnowUs extends React.Component {
    render() {
        return (
            <section className="get-to-know-us">
                <div className="container">
                    <h2>We make technology work for humans.</h2>
                    <PrimaryButton href="#" value="Get to know us" />
                </div>
            </section>
        );
    }
}

export default GetToKnowUs;
