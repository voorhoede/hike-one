import ButtonSecondary from '../buttons/button-secondary/button-secondary';
import ArrowDown from '../icons/arrow-down/arrow-down';

const SocialFeedEvents = ({ subtitle, events, link}) => {
	return (
		<div className="social-events"> 
			<h4 className="social-event-subheader">{subtitle}</h4>
			{
				Object.values(events).map((event, index) => {
					return (
						<div className="social-event" key={index}>
							<h3 className="social-event-header">{event.title}</h3>
							<span className="social-event-text-small">{event.dateTime}</span>
							<span className="social-event-text-large">
								<span className="icon-small icon-white">
									<ArrowDown />
								</span> {event.location}</span>
							<ButtonSecondary classes="btn-white" href="#" value="Register" />
							<div className="social-event-divider"></div>
						</div>
					)
				})
			}
			<div className="social-event-footer">
				<ButtonSecondary classes="btn-clean btn-white" href="#" value="Future events" />
			</div>
		</div>
	)
}

export default SocialFeedEvents;
