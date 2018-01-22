import TeamMember from '../team-member/team-member';
import VacancyOverview from '../vacancy-overview/vacancy-overview';

const teamMembersOverview = ({team, vacanciesOverview, vacancies}) => (
    <div>
        <ul className="team-members-overview container">
			{ team.map((teamMember, index) => <TeamMember key={index} data={teamMember}/>) }
		</ul>

        <VacancyOverview
            overview={vacanciesOverview}
            vacancies={vacancies} />
    </div>
);

export default teamMembersOverview;