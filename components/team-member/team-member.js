import React from 'react'
import Icon from '../icon/icon'
import setImageParameters from '../_helpers/setImageParameters'

const teamMember = ({data}) => (
    <li className="team-member" style={{backgroundImage: `url(${setImageParameters(data.photo.url, {w:700, fm: 'pjpg', q: 85})})`}}>
        <div className="team-member-overlay">
            <h3 className="team-member-name">{data.name}</h3>

      <div className="team-member-roles">
        {data.newRoles.map((role, index) => (
          <p className="team-member-role" key={index}>{role.title}</p>
        ))}
      </div>
        </div>
    </li>
)

export default teamMember
