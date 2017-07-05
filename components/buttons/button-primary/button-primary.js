import React from 'react';

class PrimaryButton extends React.Component {
    render() {
        return (
			<button
				onClick={this.props.onClick}
				className={`btn-primary ${this.props.classes ? this.props.classes: ''}`}>
				{ this.props.value }
			</button>
        );
    }
}

export default PrimaryButton;
