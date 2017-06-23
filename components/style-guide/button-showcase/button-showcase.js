import React from 'react';

import PrimaryButton   from '../../buttons/primary-button/primary-button';
import SecondaryButton from '../../buttons/secondary-button/secondary-button';
import MoreUnderButton from '../../buttons/more-under-button/more-under-button';

import Hamburger       from '../../icons/hamburger/hamburger';
import Cross           from '../../icons/cross/cross';

class ButtonShowcase extends React.Component {
    render() {
        return (
            <section className="gray-section button-showcase">
                <div className="container">
                    <h2 className="title">Buttons</h2>

                    <div className="two-column">
                        <div>
                            <p className="pTitle">Primary button</p>
                            <PrimaryButton href="#" value="More about our story" />
                        </div>
                    </div>

                    <div className="two-column">
                        <div>
                            <p className="pTitle">Secondary button</p>
                            <SecondaryButton href="#" value="Learn more about" />
                        </div>
                    </div>

                    <div className="two-column">
                        <div>
                            <MoreUnderButton href="#" value="More about our story" />
                        </div>
                    </div>

                    <div className="two-column">
                        <div>
                            <Hamburger />
                        </div>
                        <div>
                            <Cross />
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default ButtonShowcase;
