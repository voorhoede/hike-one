import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ButtonSecondary, Topics, UpdateExtractSmall, UpdatesExtractLarge } from '../'

class UpdateOverview extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTopic: 'All',
      topics: this.getTopics(props.updatesData),
      pageOffset: 1,
      pageSize: 6,
      loading: false,
      filteredUpdates: this.filterUpdates(props.updatesData, 'All')
    }

    this.changeTopicHandler = this.changeTopicHandler.bind(this)
    this.getTopics = this.getTopics.bind(this)
    this.filterUpdates = this.filterUpdates.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.incrementPageOffset = this.incrementPageOffset.bind(this)
    this.isHighlightedUpdate = this.isHighlightedUpdate.bind(this)
    this.hasSelectedTopic = this.hasSelectedTopic.bind(this)
  }

  handleClick() {
    this.setState({ loading: true })
    setTimeout(this.incrementPageOffset, 400)
  }

  incrementPageOffset() {
    this.setState({
      pageOffset: this.state.pageOffset + 1,
      loading: false,
    })
  }

  changeTopicHandler(value) {
    const { updatesData } = this.props
    const filteredUpdates = this.filterUpdates(updatesData, value)

    this.setState({
      activeTopic: value,
      filteredUpdates: filteredUpdates,
      pageOffset: 1,
     })
  }

  getTopics(updates) {
    const allTopics = updates.map(update => update.category.name)
    const uniqueTopics = [...new Set(allTopics)]
    uniqueTopics.unshift('All')

    return uniqueTopics
  }

  filterUpdates(updates, topic) {
    return updates
      .filter(update => this.isHighlightedUpdate(update))
      .filter(update => this.hasSelectedTopic(update, topic))
  }

  isHighlightedUpdate(update) {
    const { data } = this.props
    return !data.highlights.some(highlight => highlight.id === update.id)
  }

  hasSelectedTopic(update, topic) {
    if (topic === 'All')
      return true
    else {
      return update.category.name === topic
    }
  }

  render() {
    const { data } = this.props
    const { activeTopic, pageSize, pageOffset, loading, topics, filteredUpdates } = this.state
    const slicedUpdates = filteredUpdates.slice(0, pageOffset * pageSize)
    const totalPages = Math.ceil(filteredUpdates.length / pageSize)
    const buttonClass = loading ? 'loading' : 'vertical-spring'
    const highlightsClass = activeTopic === 'All' ? 'highlights--show' : 'highlights--hidden'
    const icon = !loading ? 'arrowDown' : 'spinner'

    return (
      <div className="update-overview container">
        <div className="container-inner">
          <Topics
            activeTopic={activeTopic}
            keyword="Topic"
            topics={topics}
            onTopicChanged={this.changeTopicHandler}
          />
        </div>
        <div className={`container-inner ${highlightsClass}`}>
          <UpdatesExtractLarge
            highlights={data.highlights}
            mustRead={data.mustRead}
          />
          {slicedUpdates.map((item, index) => (
            <UpdateExtractSmall
              key={index}
              index={index}
              title={item.title}
              date={item.date}
              authors={item.authors}
              href={item.link}
              image={item.image.url}
              category={item.category.name}
              color={item.themeColor.hex}
              target={item.isExternalLink}
            />
          ))}
        </div>
        {totalPages > pageOffset && (
          <ButtonSecondary
            icon={icon}
            classes={`btn-large btn-red-border btn-centered spinner ${buttonClass}`}
            onClick={this.handleClick}>
            Show more
          </ButtonSecondary>
        )}
      </div>
    )
  }
}

UpdateOverview.propTypes = {
  data: PropTypes.object,
  updatesData: PropTypes.array,
}

export default UpdateOverview
