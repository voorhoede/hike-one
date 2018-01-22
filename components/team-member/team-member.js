import setImageParameters from '../_helpers/setImageParameters';

const teamMember = ({data}) => (
    <li className="team-member" style={{backgroundImage: `url(${setImageParameters(data.photo.url, {w:700, fm: 'pjpg', q: 85})})`}}>
        <div className="team-member-overlay">
            {data.name}

            {/* {data.role} */}

            {/* { data.linkedinUrl &&
                <strong>{data.linkedinUrl}</strong>
            } */}

            {/* { data.twitterUrl &&
                <em>{data.linkedinUrl}</em>
            } */}
        </div>
    </li>
);

export default teamMember;