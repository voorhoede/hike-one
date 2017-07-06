import React from 'react';
import Link  from 'next/link';
import ArrowRight from '../../icons/arrow-right/arrow-right';

class ButtonSecondaryLink extends React.Component {
	render() {
		return (
			<Link href={this.props.href}>
				<a className={`btn-secondary ${this.props.classes ? this.props.classes : '' }`}>
					{ this.props.value }

					{!this.props.noArrow &&
					<span className="icon">
						<ArrowRight/>
					</span>
					}
				</a>
			</Link>
		);
	}
}

export default ButtonSecondaryLink;
