import Icon from '../icon/icon';
import setImageParameters from '../_helpers/setImageParameters';

const teamMember = ({data}) => (
    <li className="team-member" style={{backgroundImage: `url(${setImageParameters(data.photo.url, {w:700, fm: 'pjpg', q: 85})})`}}>
        <div className="team-member-overlay">
            <h3 className="team-member-name">{data.name}</h3>

            <div className="team-member-role">{data.role}</div>

            <div className="team-member-social">
                { data.linkedinUrl &&
                    <a href={data.linkedinUrl}
                    target="_blank"
                    className="team-member-button team-member-button--linkedin">
                    <span className="a11y-sr-only">LinkedIn profile of {data.name}</span>
                    <Icon icon="linkedinNoCircle" classes="icon" />
                    </a>
                }

                { data.twitterUrl &&
                    <a href={data.twitterUrl}
                    target="_blank"
                    className="team-member-button team-member-button--twitter">
                    <span className="a11y-sr-only">Twitter profile of {data.name}</span>
                    <Icon icon="twitter" classes="icon" />
                    </a>
                }
            </div>
        </div>
    </li>
);

export default teamMember;