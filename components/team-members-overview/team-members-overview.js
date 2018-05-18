import React from 'react';
import Filter from '../filter/filter';
import TeamMember from '../team-member/team-member';
import VacancyOverview from '../vacancy-overview/vacancy-overview';



class TeamMembersOverview extends React.Component {
	constructor(props) {
		super(props);

		const {team} = props;

		this.roles = {
			name: 'Roles',
			data: this.getRoles(team)
		}
		this.locations = {
			name: 'Locations',
			data: this.getLocations(team)
		}

		this.state = {
			activeRoles: this.roles.data,
			activeLocations: this.locations.data
		}

		this.filterOnClickHandler = this.filterOnClickHandler.bind(this)
	}

	getRoles(data) {
		const roles = data.map(item => {
			return item.newRoles.map(role => {
				return role.title;
			});
		})
			.reduce((a, b) => a.concat(b), []);

		return [... new Set(roles)];
	}

	getLocations(data) {
		return [... new Set(data.map(item => {
			if (!item.location) return;
			return item.location.location;
		}))];
	}

	filterOnClickHandler(filterName, filterItem) {
		const filterTitle = filterName.toLowerCase();
		const activeFilterTitle = `active${filterTitle[0].toUpperCase() + filterTitle.slice(1)}`;

		const filter = this[filterTitle].data;
		const activeFilter = this.state[activeFilterTitle];

		if(filter.length === activeFilter.length) {
			this.setState({[activeFilterTitle]: [filterItem]});
			return;
		}

		if(activeFilter.includes(filterItem)) {
			if(activeFilter.length === 1) {
				this.setState({[activeFilterTitle]: filter});
			} else {
				this.setState({[activeFilterTitle]: activeFilter.filter(item => item !== filterItem)});
			}

			return;
		} else {
			let newActiveFilter = activeFilter;
			newActiveFilter.push(filterItem);
			this.setState({[activeFilterTitle]: newActiveFilter});
			return;
		}
	}

	render() {
		const {team, peopleTab, vacanciesOverview, vacancies} = this.props;
		const {activeRoles, activeLocations} = this.state;
		return (
		<div>
			<Filter name={this.roles.name} data={this.roles.data} activeData={activeRoles} clickHandler={this.filterOnClickHandler} />
			<Filter name={this.locations.name} data={this.locations.data} activeData={activeLocations} clickHandler={this.filterOnClickHandler} />
			<p className="team-members-intro-text container">{peopleTab.introText}</p>
			<ul className="team-members-overview container">
				{ team.map((teamMember, index) => {
					if (teamMember.hide) { return; }

					if(!activeLocations.includes(teamMember.location.location)) {
						return;
					}

					const activeRole = teamMember.newRoles.map(role => {
						return activeRoles.includes(role.title);
					}).some(item => item);

					if(!activeRole) {
						return;
					}

					return <TeamMember key={index} data={teamMember} />
				})}
			</ul>

			<VacancyOverview
				overview={vacanciesOverview}
				vacancies={vacancies} />
		</div>
		)
	}
}

export default TeamMembersOverview;
