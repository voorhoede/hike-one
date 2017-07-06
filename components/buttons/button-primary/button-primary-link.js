import React from 'react';
import Link from 'next/link'

class PrimaryButtonLink extends React.Component {
	render() {
		return (
			<div>
				<Link href={this.props.href}>
					<a className={`btn-primary ${this.props.classes ? this.props.classes: ''}`}>
						{this.props.value}
					</a>
				</Link>
			</div>
		);
	}
}

export default PrimaryButtonLink;
