import React from 'react';
import Filter from '../filter/filter';
import TeamMember from '../team-member/team-member';
import ButtonSecondary from '../buttons/button-secondary/button-secondary';

class TeamMembersOverview extends React.Component {
	constructor(props) {
		super(props);

		const {team, queryParam} = props;

		this.state = {
			roles: getRoles(team),
			locations: getLocations(team),
			isFilterCollapsed: true
		}

		this.handleQueryParams(queryParam)
		this.setQueryParams = this.setQueryParams.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.onFilterHandler = this.onFilterHandler.bind(this)
	}

	onFilterHandler(filter, index, active) {
		this.setQueryParams(filter, index, active)
		const isFirstItemActive = filter.every(item => item.isActive);
		const isEveryItemDeactive = filter.every((item, filterIndex) => {
			if(index === filterIndex) {
				return item.isActive;
			}

			return !item.isActive;
		});

		if(isFirstItemActive) {
			setOneItemActive(filter, index);
		} else if (isEveryItemDeactive) {
			setAllItemsActive(filter);
		} else {
			const item = filter[index];
			item.isActive = !item.isActive;
		}

		this.setState({ filter: filter });
	}

	handleQueryParams(queryParam) {
		this.state.roles.find((item, index) => {
			if(item.value === queryParam) {
				return setOneItemActive(this.state.roles, index)
			} else {
				this.state.locations.find((item, index) => {
					if(item.value === queryParam) {
						return setOneItemActive(this.state.locations, index)
					}
				})
			}
		})
	}

	setQueryParams(filter, index, active) {
		const url = '/team/people?'
		let newUrl = ''

		if(!active) {
			newUrl = `filter=${filter[index].value}`
		}

		window.history.replaceState(null, null, `${encodeURI(`${url}${newUrl}`)}`)
	}

	handleClick() {
		const { isFilterCollapsed } = this.state;
		this.setState({isFilterCollapsed: !isFilterCollapsed});
	}

	render() {
		const {team, peopleTab} = this.props;
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
	array.forEach((item, arrayIndex) => item.isActive = index === arrayIndex);
}

function setAllItemsActive(array) {
	array.forEach(item => item.isActive = true);
}

export default TeamMembersOverview;
