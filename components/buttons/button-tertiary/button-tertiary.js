import React from 'react';
import Link  from 'next/link';

import ArrowDown from '../../icons/arrow-down/arrow-down';

class ButtonTertiary extends React.Component {
    render() {
        return (
            <Link href={this.props.href}>
				<a className={`btn-tertiary ${this.props.classes ? this.props.classes : '' }`}>
                    {this.props.value}

                    <span className="icon">
						<ArrowDown />
					</span>
                </a>
            </Link>
        );
    }
}

export default ButtonTertiary;
