import PropTypes from 'prop-types';
import ButtonPrimaryLink from '../buttons/button-primary/button-primary-link';

const VacancyOverview = ({ overview = {}, vacancies = [] }) => (
	<div className="vacancy-overview container">
		<h2 className="vacancy-overview-title">{overview.title}</h2>
		<p className="vacancy-overview-tagline">{overview.tagline}</p>
		<ul className="vacancy-overview-list">
			{vacancies.map((vacancy, index) => (
				<li key={index} className="vacancy-overview-list-item">
					<a href={vacancy.url} target="_blank" rel="noopener noreferrer">
						<h4>{vacancy.title}</h4>
						<span>{vacancy.duration}</span>
						<span>{vacancy.location}</span>
					</a>
				</li>
			))}
		</ul>

		<ButtonPrimaryLink href={overview.callToActionUrl} target="_blank" classes="btn-large content">
			{overview.callToActionTitle}
		</ButtonPrimaryLink>
	</div>
);

VacancyOverview.propTypes = {
	overview: PropTypes.object,
	vacancies: PropTypes.array,
};

export default VacancyOverview;
