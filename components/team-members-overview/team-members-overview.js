import VacancyOverview from '../vacancy-overview/vacancy-overview';

const teamMembersOverview = ({team, vacanciesOverview, vacancies}) => (
    <div>
        {
            team.map((item, index) => {
                return(
                    <h1 key={index}>{item.name} - {item.role}</h1>
                );
            })
        }
        <VacancyOverview
            overview={vacanciesOverview}
            vacancies={vacancies} />
    </div>
);

export default teamMembersOverview;