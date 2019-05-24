import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ButtonClean } from '../'

class Topics extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isCollapsed: true,
      selectedTopic: props.topics[0],
    }

    this.setActiveTopic = this.setActiveTopic.bind(this)
    this.handleListToggle = this.handleListToggle.bind(this)
  }

  setActiveTopic (topic) {
    const { onTopicChanged } = this.props
    const { selectedTopic } = this.state

    // Only change state and fire the event if
    // the cliced topic is not the selected topic
    if (selectedTopic !== topic) {
      this.setState({ selectedTopic: topic })
      onTopicChanged(topic)
    }
  }

  handleListToggle () {
    const { isCollapsed } = this.state
    this.setState({ isCollapsed: !isCollapsed })
  }

  render() {
    const { keyword = '', topics = [] } = this.props
    const { isCollapsed, selectedTopic } = this.state
    const icon = isCollapsed ? 'arrowDown' : 'arrowUp'
    const toggleClass = isCollapsed ? 'topics__list--closed' : 'topics__list--open'

    return (
      <div className="topics container">
        <ButtonClean classes="topics__toggle" icon={icon} onClick={this.handleListToggle}>
          {keyword}: {selectedTopic.value}
        </ButtonClean>
        <ul className={`topics__list container-inner ${toggleClass}`}>
          {topics.map((topic, index) => {
            const activeClass = (selectedTopic === topic) ? 'topics_item--active' : ''

            return (
              <li key={index} className={`topics_item ${activeClass}`}>
                <ButtonClean
                  classes="topic__button"
                  onClick={() => this.setActiveTopic(topic)}>
                  {topic.value}
                </ButtonClean>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

Topics.propTypes = {
  keyword: PropTypes.string,
  topics: PropTypes.array,
  onTopicChanged: PropTypes.func,
}

export default Topics
