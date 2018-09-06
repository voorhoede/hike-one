import React from 'react';

import setImageParams from '../_helpers/setImageParameters';

import ButtonSecondaryLink from '../buttons/button-secondary/button-secondary-link'

const VacancyCard = ({ data }) => {
	
	const imageParameters = { fit: 'crop', fm: 'pjpg', q: 85 };
	
	const style ={__html:
		`<style>
			.vacancy-card-image {
				background-image: url("${setImageParams(data.image.url, { ...imageParameters, w: 450, h:200 })}");
			}

			@media only screen and (min-width: 768px) {
				.vacancy-card-image {
					background-image: url("${setImageParams(data.image.url, { ...imageParameters, w: 400, h:339 })}");
				}
			}

			@media only screen and (min-width: 1024px) {
				.vacancy-card-image {
					background-image: url("${setImageParams(data.image.url, { ...imageParameters, w: 450, h:360 })}");
				}
			}
		</style>`};

	return (
		<div className="container">
			<div className="vacancy-card container-inner">
				<div className="vacancy-card-image"></div>

				<div className="vacancy-card-content">
					<h2 className="vacancy-card-title">{data.title}</h2>

					<p className="vacancy-card-tagline">{data.content}</p>

					<ButtonSecondaryLink
						href={data.callToActionUrl}
						target="_blank"
						classes="vacancies-btn"
						icon="arrowRight">
						{data.callToActionTitle}
					</ButtonSecondaryLink>
				</div>
			</div>

			<div dangerouslySetInnerHTML={style}></div>
		</div>
		)
	}

export default VacancyCard
