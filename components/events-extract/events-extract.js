import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import ButtonSecondaryLink from '../buttons/button-secondary/button-secondary-link'
import ButtonCleanLink from '../buttons/button-clean/button-clean-link'
import Location from '../icons/location'

const EventsExtract = ({ subtitle, events }) => (
  <div className="events-extract-container">
    <h4 className="events-extract-subheader">{subtitle}</h4>
    {Object.values(events).map((event, index) => {
      return (
        <div className="events-extract" key={index}>
          <h3 className="events-extract-header">
            <Link href={event.link}>
              <a className="events-extract-link">{event.title}</a>
            </Link>
          </h3>
          <span className="events-extract-text-small">{event.dateTime}</span>
          <span className="events-extract-text-large">
            <Link href={event.linkLocation}>
              <a className="events-extract-link">
                <span className="icon icon-small">
                  <Location />
                </span>
                {event.location}
              </a>
            </Link>
          </span>
          <ButtonSecondaryLink
            classes="events-extract-button btn-purple"
            href="#Register"
            icon="arrowRight">
            Register
          </ButtonSecondaryLink>
          <div className="events-extract-divider" />
        </div>
      )
    })}
    <div className="events-extract-footer">
      <ButtonCleanLink href="#future-events" icon="arrowRight">
        Future events
      </ButtonCleanLink>
    </div>
  </div>
)

EventsExtract.propTypes = {
  subtitle: PropTypes.string.isRequired,
  events: PropTypes.objects.isRequired,
}

export default EventsExtract
