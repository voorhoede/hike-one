import PropTypes from 'prop-types';
import setImageParameters from '../_helpers/setImageParameters';

const TeamMember = ({ data = {} }) => (
	<li
		className="team-member"
		style={{
			backgroundImage: `url('${setImageParameters(data.photo.url, {
				w: 700,
			})}')`,
		}}
	>
		<div className="team-member-overlay">
			<h3 className="team-member-name">{data.name}</h3>
			<div className="team-member-roles">
				{data.roles.map((role, index) => (
					<span className="team-member-role" key={index}>
						{role.title}
					</span>
				))}
			</div>
		</div>
	</li>
);

TeamMember.propTypes = {
	data: PropTypes.object,
};

export default TeamMember;
