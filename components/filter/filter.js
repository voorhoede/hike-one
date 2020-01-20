import { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonClean from '../buttons/button-clean/button-clean';

class Filter extends Component {
	constructor(props) {
		super(props);
		this.setActiveFilter = this.setActiveFilter.bind(this);
		this.handleListToggle = this.handleListToggle.bind(this);
		this.state = {
			isCollapsed: true,
			selectFilter: props.activeFilter,
		};
	}

	setActiveFilter(filter) {
		const { onFilterChanged } = this.props;
		const { selectFilter } = this.state;

		// Only change state and fire the event if
		// the cliced filter is not the selected filter
		if (selectFilter !== filter) {
			this.setState({ selectFilter: filter });
			onFilterChanged(filter);
		}
	}

	handleListToggle() {
		const { isCollapsed } = this.state;
		this.setState({ isCollapsed: !isCollapsed });
	}

	render() {
		const { keyword = '', filters = [] } = this.props;
		const { isCollapsed, selectFilter } = this.state;
		const icon = isCollapsed ? 'arrowDown' : 'arrowUp';
		const toggleClass = isCollapsed ? 'filter__list--closed' : 'filter__list--open';

		return (
			<div className="filter container">
				<ButtonClean classes="filter__toggle" icon={icon} onClick={this.handleListToggle}>
					{keyword}: {selectFilter}
				</ButtonClean>
				<ul className={`filter__list container-inner ${toggleClass}`}>
					{filters.map((filter, index) => {
						const activeClass = selectFilter === filter ? 'filter_item--active' : '';

						return (
							<li key={index} className={`filter_item ${activeClass}`}>
								<ButtonClean classes="filter__button" onClick={() => this.setActiveFilter(filter)}>
									{filter}
								</ButtonClean>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

Filter.propTypes = {
	activeFilter: PropTypes.string,
	keyword: PropTypes.string,
	filters: PropTypes.array,
	onFilterChanged: PropTypes.func,
};

export default Filter;
