import React from 'react';
import Link from 'next/link'

class PrimaryButton extends React.Component {
    render() {
        return (
            <Link href={this.props.href}>
				<a className={`btn-primary ${this.props.classes ? this.props.classes: ''}`}>
					{this.props.value}
				</a>
			</Link>
        );
    }
}

export default PrimaryButton;
