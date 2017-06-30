import React from 'react';
import Link  from 'next/link';
import ArrowRight from '../../icons/arrow-right/arrow-right';

class ButtonSecondary extends React.Component {
    render() {
        return (
            <Link href={this.props.href}>
                <a className={`btn-secondary ${this.props.classes ? this.props.classes : '' }`}>
                    { this.props.value }

                    {this.props.noArrow != "true" ?
                        <span className="icon">
    						<ArrowRight/>
    					</span>
                        : ''
                    }
                </a>
            </Link>
        );
    }
}

export default ButtonSecondary;
