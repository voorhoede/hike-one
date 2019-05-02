import React from 'react'
import Icon from '../../icon/icon';

const ButtonSecondaryMock = ({classes = '', children = '', icon = ''}) => (
  <div className={`btn-secondary ${classes} ${icon ? 'btn-icon' : ''}`}>
    { children }
    { icon &&
    <span className="icon">
      <Icon icon={icon}/>
    </span>
    }
  </div>
);

export default ButtonSecondaryMock;
