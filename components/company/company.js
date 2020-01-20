import PropTypes from 'prop-types';

const Company = ({ logo = '', name = '' }) => (
	<div className="company">
		<div className="company-image">
			<img src={logo} alt="" />
		</div>
		<p className="company-name">{name}</p>
	</div>
);

Company.propTypes = {
	logo: PropTypes.string,
	name: PropTypes.string,
};

export default Company;
