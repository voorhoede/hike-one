import React from 'react'
import Icon from '../../icon/icon';

const ButtonClean = ({classes = '', onClick = null, children = '', icon }) => (
	<button
		onClick={onClick}
		className={`btn-clean ${classes}`}>
		{ children }

		{ icon &&
		<span className="icon">
			<Icon icon={icon}/>
		</span>
		}
	</button>
);

export default ButtonClean;
