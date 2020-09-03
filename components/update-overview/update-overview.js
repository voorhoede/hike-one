import { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonSecondary from '../buttons/button-secondary/button-secondary';
import Filter from '../filter/filter';
import UpdateExtractSmall from '../update-extract-small/update-extract-small';
import UpdatesExtractLarge from '../updates-extract-large/updates-extract-large';

class UpdateOverview extends Component {
	constructor(props) {
		super(props);
		this.changeFilterHandler = this.changeFilterHandler.bind(this);
		this.getFilters = this.getFilters.bind(this);
		this.filterUpdates = this.filterUpdates.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.incrementPageOffset = this.incrementPageOffset.bind(this);
		this.isHighlightedUpdate = this.isHighlightedUpdate.bind(this);
		this.hasSelectedTopic = this.hasSelectedTopic.bind(this);
		this.setQueryParams = this.setQueryParams.bind(this);
		this.state = {
			activeFilter: props.queryParam,
			filters: this.getFilters(props.updatesData),
			pageOffset: 1,
			pageSize: 6,
			loading: false,
			filteredUpdates: this.filterUpdates(props.updatesData, props.queryParam),
		};
	}

	handleClick() {
		this.setState({ loading: true });
		setTimeout(this.incrementPageOffset, 400);
	}

	incrementPageOffset() {
		const { pageOffset } = this.state;

		this.setState({
			pageOffset: pageOffset + 1,
			loading: false,
		});
	}

	changeFilterHandler(value) {
		const { updatesData } = this.props;
		const filteredUpdates = this.filterUpdates(updatesData, value);

		this.setQueryParams(value);
		this.setState({
			activeFilter: value,
			filteredUpdates: filteredUpdates,
			pageOffset: 1,
		});
	}

	setQueryParams(filter) {
		window.history.replaceState(null, null, encodeURI(`/updates?filter=${filter}`));
	}

	getFilters(updates) {
		const allFilters = updates.map((update) => update.category.name);
		const uniqueFilters = [...new Set(allFilters)];
		uniqueFilters.unshift('All');

		return uniqueFilters;
	}

	filterUpdates(updates, filter) {
		return updates
			.filter((update) => this.isHighlightedUpdate(update))
			.filter((update) => this.hasSelectedTopic(update, filter));
	}

	isHighlightedUpdate(update) {
		const { data } = this.props;
		return !data.highlights.some((highlight) => highlight.id === update.id);
	}

	hasSelectedTopic(update, filter) {
		if (filter === 'All') {
			return true;
		}
		return update.category.name === filter;
	}

	render() {
		const { data } = this.props;
		const { activeFilter, pageSize, pageOffset, loading, filters, filteredUpdates } = this.state;
		const slicedUpdates = filteredUpdates.slice(0, pageOffset * pageSize);
		const totalPages = Math.ceil(filteredUpdates.length / pageSize);
		const buttonClass = loading ? 'loading' : 'vertical-spring';
		const highlightsClass = activeFilter === 'All' ? 'highlights--show' : 'highlights--hidden';
		const icon = !loading ? 'arrowDown' : 'spinner';

		return (
			<div className="update-overview container">
				<div className="container-inner">
					<Filter
						activeFilter={activeFilter}
						keyword="Topic"
						filters={filters}
						onFilterChanged={this.changeFilterHandler}
					/>
				</div>
				<div className={`container-inner ${highlightsClass}`}>
					<UpdatesExtractLarge highlights={data.highlights} mustRead={data.mustRead} />
					{slicedUpdates.map((item, index) => (
						<UpdateExtractSmall
							key={index}
							index={index}
							title={item.title}
							date={item.date}
							authors={item.authors}
							staticAuthors={item.staticAuthors}
							topic={item.topic}
							slug={item.slug}
							link={item.externalLink}
							image={item.image.url}
							category={item.category.name}
							color={item.themeColor.hex}
							target={Boolean(item.externalLink)}
						/>
					))}
				</div>
				{totalPages > pageOffset && (
					<ButtonSecondary
						icon={icon}
						classes={`btn-large btn-red-border btn-centered spinner ${buttonClass}`}
						onClick={this.handleClick}
					>
						Show more
					</ButtonSecondary>
				)}
			</div>
		);
	}
}

UpdateOverview.defaultProps = {
	queryParam: 'All',
};

UpdateOverview.propTypes = {
	data: PropTypes.object,
	updatesData: PropTypes.array,
	queryParam: PropTypes.string,
};

export default UpdateOverview;
