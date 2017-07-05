import React from 'react';
import ArrowRight from '../../icons/arrow-right/arrow-right';

class ButtonSecondary extends React.Component {
    render() {
        return (
			<button
				onClick={this.props.onClick}
				className={`btn-secondary ${this.props.classes ? this.props.classes : '' }`}>
				{ this.props.value }
				{ !this.props.noArrow &&
					<span className="icon">
						<ArrowRight/>
					</span>
				}
			</button>
        );
    }
}

export default ButtonSecondary;
