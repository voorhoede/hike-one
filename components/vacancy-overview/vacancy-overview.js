import PropTypes from 'prop-types';
import ButtonPrimaryLink from '../buttons/button-primary/button-primary-link';
import TextCenter from '../text-center/text-center';

const VacancyOverview = ({ overview = {}, vacancies = [] }) => (
	<div className="vacancy-overview container">
		<TextCenter title={overview.title} text={overview.tagline} />

		{vacancies.map((department, index) => (
			<div className="vacancy-overview__department" key={index}>
				<h3 className="vacancy-overview__department-name">{department.name}</h3>

				<ul className="vacancy-overview__list">
					{department.jobs.map((job, index) => (
						<li className="vacancy-overview__list-item" key={index}>
							<a href={job.url} target="_blank" rel="noopener noreferrer">
								<h4>{job.title}</h4>
								<span>{job.duration}</span>
								<span>{job.location}</span>
							</a>
						</li>
					))}
				</ul>
			</div>
		))}

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
