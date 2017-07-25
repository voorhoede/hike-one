import ButtonSecondaryLink from '../buttons/button-secondary/button-secondary-link';
import ButtonSecondary from '../buttons/button-secondary/button-secondary';
import ArrowDown from '../icons/arrow-down/arrow-down';

const EventsExtract = ({ subtitle, events, link}) => {
	return (
		<div className="events-extract-container"> 
			<h4 className="events-extract-subheader">{subtitle}</h4>
			{
				Object.values(events).map((event, index) => {
					return (
						<div className="events-extract" key={index}>
							<h3 className="events-extract-header">{event.title}</h3>
							<span className="events-extract-text-small">{event.dateTime}</span>
							<span className="events-extract-text-large">
								<span className="icon-small icon-white">
									<ArrowDown />
								</span> {event.location}</span>
							<ButtonSecondaryLink classes="btn-white" href="#register" value="Register" />
							<div className="events-extract-divider"></div>
						</div>
					)
				})
			}
			<div className="events-extract-footer">
				<ButtonSecondaryLink classes="btn-clean btn-white" href="#future-events" value="Future events" />
			</div>
		</div>
	)
}

export default EventsExtract;
