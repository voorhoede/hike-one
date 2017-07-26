import React from 'react';

import ButtonPrimary   from '../../buttons/button-primary/button-primary';
import ButtonSecondary from '../../buttons/button-secondary/button-secondary';
import ButtonTertiary from '../../buttons/button-tertiary/button-tertiary';

import Hamburger       from '../../icons/hamburger/hamburger';
import Cross           from '../../icons/cross/cross';
import ArrowDown from '../../icons/arrow-down/arrow-down';

class ButtonShowcase extends React.Component {
    render() {
        return (
            <section className="style-guide-section button-showcase">
                <div className="container">
                    <h2 className="style-guide-title">Buttons</h2>

                    <div className="style-guide-column-two">
                        <div>
                            <h3 className="style-guide-sub-title">Primary button</h3>
                            <ButtonPrimary href="#" value="More about our story" />
                        </div>
                    </div>

                    <div className="style-guide-column-two">
                        <div>
                            <h3 className="style-guide-sub-title">Secondary button</h3>
                            <ButtonSecondary href="#" value="Learn more about" />
                        </div>
                    </div>

                    <div className="style-guide-column-two">
                        <div>
							<h3 className="style-guide-sub-title">Tertiary button</h3>
                            <ButtonTertiary href="#" value="More about our story">
								<ArrowDown />
							</ButtonTertiary>
                        </div>
                    </div>

                    <div className="style-guide-column-two">
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
