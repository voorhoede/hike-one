import ButtonSecondaryLink from '../buttons/button-secondary/button-secondary-link';
import ButtonSecondary from '../buttons/button-secondary/button-secondary';
import ArrowDown from '../icons/arrow-down/arrow-down';
import Link from 'next/link';

const EventsExtract = ({ subtitle, events}) => (

	<div className="events-extract-container">
		<h4 className="events-extract-subheader">{subtitle}</h4>
		{
			Object.values(events).map((event, index) => {
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
									<span className="icon-small icon-white">
										<ArrowDown />
									</span>
									{event.location}
								</a>
							</Link>
						</span>
						<ButtonSecondaryLink classes="btn-white events-extract-button" href="#Register" value="Register" />
						<div className="events-extract-divider"></div>
					</div>
				);
			})
		}
		<div className="events-extract-footer">
			<ButtonSecondaryLink classes="btn-clean btn-white" href="#future-events" value="Future events" />
		</div>
	</div>
);


export default EventsExtract;
