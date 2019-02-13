import HomerunWidget from '../homerun-widget/homerun-widget'

const VacancyOverview = ({ overview }) => (
	<div className="vacancy-overview container">
		<h2 className="vacancy-overview-title">{overview.title}</h2>
		<p className="vacancy-overview-tagline">{overview.tagline}</p>
		{ process.browser && <HomerunWidget /> }
	</div>
);

export default VacancyOverview;
