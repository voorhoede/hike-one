import ButtonCleanLink from '../buttons/button-clean/button-clean-link'

const VacancyCard = ({ data }) => (
	<div className="vacancy-card container">
		<h2 className="vacancy-card-title">{data.title}</h2>

		<p className="vacancy-card-tagline">{data.content}</p>

		<ButtonCleanLink
			href={data.callToActionUrl}
			target="_blank"
			classes="btn-large content" >
			{data.callToActionTitle}
		</ButtonCleanLink>
	</div>
)

export default VacancyCard
