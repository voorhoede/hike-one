import React from 'react'
import Link from 'next/link';
import Icon from '../../icon/icon';

const ButtonCleanLink = ({classes = '', href, children = '', icon}) => (
  <Link href={href}>
    <a className={`btn-clean ${classes}`}>
      {children}
      { icon &&
      <span className="icon">
        <Icon icon={icon}/>
      </span>
      }
    </a>
  </Link>
);

export default ButtonCleanLink;
