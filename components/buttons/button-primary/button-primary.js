import React from 'react'
import Icon from '../../icon/icon';

const ButtonPrimary = ({classes = '', onClick = null, children = '', icon, disabled = false }) => (
	<button
		onClick={onClick}
		className={`btn-primary ${classes} ${icon ? 'btn-icon' : ''} `}
		disabled={disabled} >
		<span className="btn-primary-text">{ children }</span>

		{ icon &&
		<span className="icon">
			<Icon icon={icon}/>
		</span>
		}
	</button>
);

export default ButtonPrimary;
