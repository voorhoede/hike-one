import React from 'react';
import Link  from 'next/link';

import ArrowDown from '../../icons/arrow-down/arrow-down';
import ArrowRight from '../../icons/arrow-right/arrow-right';

const arrowIcons = {
	arrowRight: <ArrowRight />,
	arrowDown: <ArrowDown />
}
class ButtonTertiaryLink extends React.Component {
	render() {
		return (
			<Link href={this.props.href}>
				<a className={`btn-tertiary ${this.props.classes ? this.props.classes : '' }`}>
					{this.props.value}

				<span className="icon">
					{ arrowIcons[this.props.iconType] }
				</span>
				</a>
			</Link>
		);
	}
}

export default ButtonTertiaryLink;
