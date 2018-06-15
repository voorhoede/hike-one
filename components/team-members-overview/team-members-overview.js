import React from 'react';
import Filter from '../filter/filter';
import TeamMember from '../team-member/team-member';
import VacancyOverview from '../vacancy-overview/vacancy-overview';

class TeamMembersOverview extends React.Component {
	constructor(props) {
		super(props);

		const {team} = props;

		this.state = {
			roles: this.getRoles(team),
			locations: this.getLocations(team)
		}

		this.onFilterHandler = this.onFilterHandler.bind(this)
	}

	getRoles(data) {
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

	getLocations(data) {
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

	onFilterHandler(filter, index) {
		const array = filter;
		const item = array[index];

		item.isActive = !item.isActive;

		this.setState({filter: array});
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

	return team.map(teamMember => {
		if (teamMember.hide) {
			return;
		}

		if(!getActiveLocation(locations, teamMember)) {
			return;
		}

		if(!getActiveRole(roles, teamMember)) {
			return;
		}

		return teamMember;
	}).filter(teamMember => teamMember);
}

function getActiveLocation(locations, teamMember) {
	return locations.some(location => {
		if(!location.isActive) {
			return false;
		}

		return location.value === teamMember.location.location;
	});
}

function getActiveRole(roles, teamMember) {
	return roles.some(role => {
		if(!role.isActive) {
			return false;
		}

		return teamMember.newRoles.some(memberRole => {
			return role.value === memberRole.title;
		});
	});
}

export default TeamMembersOverview;
