import React from 'react';
import Filter from '../filter/filter';
import TeamMember from '../team-member/team-member';
import VacancyOverview from '../vacancy-overview/vacancy-overview';

class TeamMembersOverview extends React.Component {
	constructor(props) {
		super(props);

		const {team} = props;

		this.state = {
			roles: getRoles(team),
			locations: getLocations(team)
		}

		this.onFilterHandler = this.onFilterHandler.bind(this)
	}

	onFilterHandler(filter, index) {
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

		this.setState({ filter: array });
	}

	render() {
		const {team, peopleTab, vacanciesOverview, vacancies} = this.props;
		const {roles, locations} = this.state;
		const filteredTeam = filterTeam(team, this.state);

		return (
			<div>
				<Filter
					filter={roles}
					onFilter={this.onFilterHandler}
				/>
				<Filter
					filter={locations}
					onFilter={this.onFilterHandler}
				/>
				<p className="team-members-intro-text container">{peopleTab.introText}</p>
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
	array.forEach((item, arrayIndex) => item.isActive = index === arrayIndex);
}

function setAllItemsActive(array) {
	array.forEach(item => item.isActive = true);
}

export default TeamMembersOverview;
