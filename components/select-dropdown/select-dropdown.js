import { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonClean from '../buttons/button-clean/button-clean';

class SelectDropdown extends Component {
	constructor(props) {
		super(props);
		this.toggleDropdown = this.toggleDropdown.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			isCollapsed: true,
		};
	}

	toggleDropdown() {
		const { isCollapsed } = this.state;
		this.setState({ isCollapsed: !isCollapsed });
	}

	handleClick(id, title) {
		this.toggleDropdown();
		this.props.handleClick(id, title);
	}

	render() {
		const { selectedItem, label, options } = this.props;
		const { isCollapsed } = this.state;
		const activeButtonClass = !isCollapsed ? 'active' : '';

		return (
			<div className="select-dropdown">
				<div className="dropdown-header">
					<ButtonClean
						classes={`select-btn ${activeButtonClass}`}
						icon="arrowDown"
						onClick={this.toggleDropdown}
					>
						{selectedItem || label}
					</ButtonClean>
				</div>

				{!isCollapsed && (
					<ul className="dropdown-list">
						{options.map((option) => (
							<li className="list-item" key={option.id}>
								<ButtonClean
									classes="select-item"
									onClick={() => this.handleClick(option.id, option.title)}
								>
									{option.title}
								</ButtonClean>
							</li>
						))}
					</ul>
				)}
			</div>
		);
	}
}

SelectDropdown.propTypes = {
	selectedItem: PropTypes.string,
	label: PropTypes.string,
	options: PropTypes.array,
	handleClick: PropTypes.func,
};

export default SelectDropdown;
