import React from 'react'
import Link from 'next/link';

const TeamSelector = ({slug}) => (
  <div className="team-selector container shadow">
    <Link href="/team?slug=culture" as="/team/culture"
        prefetch>
      <a className={`team-selector-item
      ${slug === 'culture' ? 'is-selected': '' }`}>
        <h2 className="team-selector-item-title">
          Culture
        </h2>
      </a>
    </Link>
    <Link href="/team?slug=people" as="/team/people"
        prefetch>
      <a className={`team-selector-item
      ${slug === 'people' ? 'is-selected': '' }` }>
        <h2 className="team-selector-item-title">
          People
        </h2>
      </a>
    </Link>
  </div>
);

export default TeamSelector;
