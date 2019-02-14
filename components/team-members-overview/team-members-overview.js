import React from 'react';
import Filter from '../filter/filter';
import TeamMember from '../team-member/team-member';
import VacancyOverview from '../vacancy-overview/vacancy-overview';
import ButtonSecondary from '../buttons/button-secondary/button-secondary';

class TeamMembersOverview extends React.Component {
	constructor(props) {
		super(props);

		const {team, queryParam} = props;

		this.state = {
			roles: getRoles(team),
			locations: getLocations(team),
			isFilterCollapsed: true,
			listActiveFilters: []
		}

		this.handleQueryParams(queryParam)

		this.handleClick = this.handleClick.bind(this);
		this.onFilterHandler = this.onFilterHandler.bind(this)
	}

	onFilterHandler(filter, index, active) {
		const array = filter;
		const isFirstItemActive = filter.every(item => item.isActive);
		const isEveryItemDeactive = filter.every((item, filterIndex) => {
			if(index === filterIndex) {
				return item.isActive;
			}

			return !item.isActive;
		});

		if(isFirstItemActive) {
			setOneItemActive(array, index);
		} else if (isEveryItemDeactive) {
			setAllItemsActive(array);
		} else {
			const item = array[index];
			item.isActive = !item.isActive;
		}

		let activeFilters = this.state.listActiveFilters
		let url = '/team/people?'

		if(!active) {
			if(!activeFilters.includes(index)) {
				activeFilters.push(index)
			}

			activeFilters.forEach(i => {
				if(!url.includes(array[i].value)) { url += `filter=${array[i].value}&`}
			})

			window.history.pushState(null, null, `${encodeURI(url)}`)
		} else if(activeFilters.includes(index)) {
			activeFilters = activeFilters.filter(value => value !== index)
			if(activeFilters.length > 0) {
				activeFilters.forEach((indexFilter) => {
					if(indexFilter) {
						return window.history.pushState(null, null,
							`${encodeURI(`/team/people?filter=${array[indexFilter].value}&`)}`)
					}
				})
			} else {
				window.history.pushState(null, null, `/team/people`);
			}
		}

		this.setState({ filter: array });
	}

	handleQueryParams(queryParam) {
		const updateRoles = queryParam instanceof Array ?
			//make it work with multiple filters
			queryParam.forEach((param) => {
				this.state.roles.find((item, index) => {
					if(item.value === param) {
						// this.state.listActiveFilters.push(index)
						return setOneItemActive(this.state.roles, index)
					}
				})
			})
			:	this.state.roles.find((item, index) => {
					if(item.value === queryParam ) {
						return setOneItemActive(this.state.roles, index)
					}
				})


		if(!updateRoles) {
			this.state.locations.find((item, index) => {
				if(item.value === queryParam ) {
					setOneItemActive(this.state.locations, index)
				}
			})
		}
	}

	handleClick() {
		const { isFilterCollapsed } = this.state;
		this.setState({isFilterCollapsed: !isFilterCollapsed});
	}

	render() {
		const {team, peopleTab, vacanciesOverview, vacancies} = this.props;
		const {roles, locations, isFilterCollapsed} = this.state;
		const filteredTeam = filterTeam(team, this.state);
		const buttonIcon = isFilterCollapsed ? 'arrowDown' : 'arrowUp';
		const buttonClass = isFilterCollapsed ? 'arrow-down' : 'arrow-up';
		const filtersContainerClass = isFilterCollapsed ? 'hide' : '';

		return (
			<div className="filters">
				<ButtonSecondary
					onClick={this.handleClick}
					classes={`btn-red-border vertical-spring ${buttonClass} filters-toggle`}
					icon={buttonIcon}>
					Filters
				</ButtonSecondary>
				<div className={`${filtersContainerClass} filters-container`}>
					<Filter
						filter={roles}
						onFilter={this.onFilterHandler}
					/>
					<Filter
						filter={locations}
						onFilter={this.onFilterHandler}
					/>
				</div>

			{ peopleTab.introText && <p className="team-members-intro-text container">{peopleTab.introText}</p> }
				<ul className="team-members-overview container">
					{ filteredTeam.map((teamMember, index) => (
						<TeamMember key={index} data={teamMember} />
					))}
				</ul>

				<VacancyOverview
					overview={vacanciesOverview}
					vacancies={vacancies} />
			</div>
		)
	}
}

function filterTeam(team, state) {
	const { roles, locations } = state;

	return team
		.filter(teamMember => !teamMember.hide)
		.filter(teamMember => hasActiveLocation(locations, teamMember))
		.filter(teamMember => hasActiveRole(roles, teamMember));
}

function getRoles(data) {
	return data
		.map(item => {
			return item.newRoles.map(role => {
				return {
					value: role.title,
					isActive: true
				}
			});
		})
		.reduce((a, b) => a.concat(b), [])
		.filter((role, index, roles) => {
			return roles.findIndex(item => role.value === item.value) == index;
		});
}

function getLocations(data) {
	return data
		.map(item => {
			return {
				value: item.location.location,
				isActive: true
			}
		})
		.filter((location, index, locations) => {
			return locations.findIndex(item => location.value === item.value) == index;
		});
}

function hasActiveLocation(locations, teamMember) {
	return locations.some(location => {
		if(!location.isActive) {
			return false;
		}

		return location.value === teamMember.location.location;
	});
}

function hasActiveRole(roles, teamMember) {
	return roles.some(role => {
		if(!role.isActive) {
			return false;
		}

		return teamMember.newRoles.some(memberRole => {
			return role.value === memberRole.title;
		});
	});
}

function setOneItemActive(array, index) {
	array.forEach((item, arrayIndex) => item.isActive = index === arrayIndex)
}

function setAllItemsActive(array) {
	array.forEach(item => item.isActive = true);
}

export default TeamMembersOverview;
