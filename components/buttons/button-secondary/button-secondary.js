import React from 'react'
import Icon from '../../icon/icon';

const ButtonSecondary = ({classes = '', onClick = null, children = '', icon = '', disabled = false}) => (
  <button
    onClick={onClick}
    className={`btn-secondary ${classes} ${icon ? 'btn-icon' : ''}`}
    disabled={disabled} >
    { children }

    { icon &&
    <span className="icon">
      <Icon icon={icon}/>
    </span>
    }
  </button>
);



export default ButtonSecondary;
