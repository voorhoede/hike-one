import React from 'react';
import ArrowRight from '../../icons/arrow-right/arrow-right';
import ArrowDown from '../../icons/arrow-down/arrow-down';

class ButtonTertiary extends React.Component {
    render() {
        return (
			<button
				onClick={this.props.onClick}
				className={`btn-tertiary ${this.props.classes ? this.props.classes : '' }`}>
				{ this.props.value }
				<span className="icon">
					<ArrowDown />
				</span>
			</button>
        );
    }
}

export default ButtonTertiary;
