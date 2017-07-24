import React from 'react';
import ArrowRight from '../../icons/arrow-right/arrow-right';
import ArrowDown from '../../icons/arrow-down/arrow-down';

const arrowIcons = {
	arrowRight: <ArrowRight />,
	arrowDown: <ArrowDown />
};

const ButtonTertiary = ({classes = '', onClick, value = '', iconType}) => {
	return (
		<button
			onClick={onClick}
			className={`btn-tertiary ${classes}`}>
			{ value }
			<span className="icon">
				{ arrowIcons[iconType] }
			</span>
		</button>
	);
};

export default ButtonTertiary;
