import React from 'react';
import Link from 'next/link'

class PrimaryButton extends React.Component {
    render() {
        return (
            <Link href={this.props.href}><a className={'btn ' + this.props.className}>{this.props.value}</a></Link>
        );
    }
}

export default PrimaryButton;
