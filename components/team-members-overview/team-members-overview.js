import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TeamMember, Topics } from '../'

class TeamMembersOverview extends Component {
  constructor(props) {
    super(props)

    const { team, queryParam } = props

    this.state = {
      activeTopic: 'Everyone',
      departments: this.getDepartments(team),
      filteredTeam: this.filterTeamMembers(props.team, 'Everyone'),
    }

    this.handleQueryParams(queryParam)

    this.changeTopicHandler = this.changeTopicHandler.bind(this)
    this.getDepartments = this.getDepartments.bind(this)
    this.filterTeamMembers = this.filterTeamMembers.bind(this)
    this.hasSelectedDepartment = this.hasSelectedDepartment.bind(this)
  }

  changeTopicHandler(value) {
    const { team } = this.props
    const updatedTeam = this.filterTeamMembers(team, value)

    this.setQueryParams(value)
    this.setState({ filteredTeam: updatedTeam })
  }

  handleQueryParams(queryParam) {
    const { team } = this.props
    const department = this.state.departments.find(item => item === queryParam)

    if (department) {
      this.state.activeTopic = queryParam // eslint-disable-line react/no-direct-mutation-state
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
    if (role === 'Everyone')
      return true
    else {
      return member.departments.some(department => department.title === role)
    }
  }

  getDepartments(data) {
    const departments = data.map(item => (
        item.departments.map(department => department.title)
      ))
      .reduce((a, b) => a.concat(b), [])
      .filter((role, index, roles) => roles
        .findIndex(item => role === item) === index)

      departments.unshift('Everyone')

      return departments
  }

  render() {
    const { introText } = this.props
    const { activeTopic, departments, filteredTeam } = this.state

    return (
      <div className="filters">
        <div className="filters-container">
          <Topics
            keyword="Role"
            activeTopic={activeTopic}
            topics={departments}
            onTopicChanged={this.changeTopicHandler} />
        </div>

        {introText && <p className="team-members-intro-text container">{introText}</p>}
        <ul className="team-members-overview container">
          {filteredTeam.map((member, index) => (
            <TeamMember key={index} data={member} />
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
