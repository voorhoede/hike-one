import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TeamMember, Topics } from '../'

class TeamMembersOverview extends Component {
  constructor(props) {
    super(props)

    const { team } = props

    this.state = {
      departments: this.getDepartments(team),
      filteredTeam: this.filterTeamMembers(props.team, 'All'),
    }

    this.changeTopicHandler = this.changeTopicHandler.bind(this)
    this.getDepartments = this.getDepartments.bind(this)
    this.filterTeamMembers = this.filterTeamMembers.bind(this)
    this.hasSelectedDepartment = this.hasSelectedDepartment.bind(this)
  }

  changeTopicHandler(e) {
    const { team } = this.props;
    const updatedTeam = this.filterTeamMembers(team, e.value)

    this.setState({ filteredTeam: updatedTeam })
  }

  filterTeamMembers(team, topic) {
    return team
      .filter(member => !member.hide)
      .filter(member => this.hasSelectedDepartment(member, topic))
  }

  hasSelectedDepartment(member, topic) {
    if (topic === 'All')
      return true
    else {
      return member.departments.some(department => department.title === topic)
    }
  }

  getDepartments(data) {
    const departments = data.map(item => (
        item.departments.map(department => ({
          value: department.title,
          isActive: false,
        })
      )))
      .reduce((a, b) => a.concat(b), [])
      .filter((role, index, roles) => roles
        .findIndex(item => role.value === item.value) === index)

      departments.unshift({ value: 'All', isActive: true })

      return departments
  }

  render() {
    const { introText } = this.props
    const { departments, filteredTeam } = this.state

    return (
      <div className="filters">
        <div className="filters-container">
          <Topics
            keyword="Role"
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
