import { Component } from 'react'
import PropTypes from 'prop-types'
import TeamMember from '../team-member/team-member'
import Filter from '../filter/filter'

class TeamMembersOverview extends Component {
	constructor(props) {
		super(props)
		this.changeFilterHandler = this.changeFilterHandler.bind(this)
		this.getDepartments = this.getDepartments.bind(this)
		this.filterTeamMembers = this.filterTeamMembers.bind(this)
		this.hasSelectedDepartment = this.hasSelectedDepartment.bind(this)
		this.state = {
			activeFilter: 'Everyone',
			departments: this.getDepartments(props.team),
			filteredTeam: this.filterTeamMembers(props.team, 'Everyone'),
		}

		this.handleQueryParams(props.queryParam)
	}

	changeFilterHandler(value) {
		const { team } = this.props
		const updatedTeam = this.filterTeamMembers(team, value)

		this.setQueryParams(value)
		this.setState({ filteredTeam: updatedTeam })
	}

	handleQueryParams(queryParam) {
		const { team } = this.props
		const { departments } = this.state
		const department = departments.find(item => item === queryParam)

		if (department) {
			this.state.activeFilter = queryParam // eslint-disable-line react/no-direct-mutation-state
			this.state.filteredTeam = this.filterTeamMembers(team, department) // eslint-disable-line react/no-direct-mutation-state
		}
	}

	setQueryParams(filter) {
		window.history.replaceState(null, null, encodeURI(`/team/people?filter=${filter}`))
	}

	filterTeamMembers(team, role) {
		return team
			.filter(member => !member.hide)
			.filter(member => this.hasSelectedDepartment(member, role))
	}

	hasSelectedDepartment(member, role) {
		if (role === 'Everyone') return true
		else {
			return member.departments.some(department => department.title === role)
		}
	}

	getDepartments(data) {
		const allDepartments = data
			.map(item => item.departments.map(item => item.title))
			.reduce((a, b) => a.concat(b), [])
		const uniqueDepartments = [...new Set(allDepartments)]
		uniqueDepartments.unshift('Everyone')

		return uniqueDepartments
	}

	render() {
		const { introText } = this.props
		const { activeFilter, departments, filteredTeam } = this.state

		return (
			<div className="filters">
				<div className="filters-container">
					<Filter
						keyword="Role"
						activeFilter={activeFilter}
						filters={departments}
						onFilterChanged={this.changeFilterHandler}
					/>
				</div>

				{introText && <p className="team-members-intro-text container">{introText}</p>}
				<ul className="team-members-overview container">
					{filteredTeam.map(member => (
						<TeamMember key={member.id} data={member} />
					))}
				</ul>
			</div>
		)
	}
}

TeamMembersOverview.propTypes = {
	team: PropTypes.array,
	queryParam: PropTypes.string,
	introText: PropTypes.string,
}

export default TeamMembersOverview
