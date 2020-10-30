import PropTypes from 'prop-types';
import setImageParams from '../_helpers/setImageParameters';

const imageParams = { fit: 'max' };

const LogoList = ({ companies = [] }) => (
	<ul className="logo-list list-no-style container">
		{companies.map((company, index) => (
			<li key={index}>
				{company.website ? (
					<a href={company.website} target="_blank" rel="noopener noreferrer">
						<img
							srcSet={`
								${setImageParams(company.logo.url, { ...imageParams, 'max-w': 200 })} 200w,
								${setImageParams(company.logo.url, { ...imageParams, 'max-w': 200, dpr: 2 })} 400w,
								${setImageParams(company.logo.url, { ...imageParams, 'max-w': 250 })} 250w,
								${setImageParams(company.logo.url, { ...imageParams, 'max-w': 250, dpr: 2 })} 500w
							`}
							sizes={`
								(max-width: 767px) 200px,
								(min-width: 768px) 250px
							`}
							src={`${setImageParams(company.logo.url, { ...imageParams, 'max-w': 250 })}`}
							alt={company.name}
						/>
					</a>
				) : (
					<img
						srcSet={`
							${setImageParams(company.logo.url, { ...imageParams, 'max-w': 200 })} 200w,
							${setImageParams(company.logo.url, { ...imageParams, 'max-w': 200, dpr: 2 })} 400w,
							${setImageParams(company.logo.url, { ...imageParams, 'max-w': 250 })} 250w,
							${setImageParams(company.logo.url, { ...imageParams, 'max-w': 250, dpr: 2 })} 500w
						`}
						sizes={`
							(max-width: 767px) 200px,
							(min-width: 768px) 250px
						`}
						src={`${setImageParams(company.logo.url, { ...imageParams, 'max-w': 250 })}`}
						alt={company.name}
					/>
				)}
			</li>
		))}
	</ul>
);

LogoList.propTypes = {
	companies: PropTypes.array,
};

export default LogoList;
