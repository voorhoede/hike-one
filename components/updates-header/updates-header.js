import React from 'react';
import Icon from '../icon/icon';
import TextCenter from '../text-center/text-center';
import Triangle from '../shapes/triangle/triangle';

const updatesHeader = ({title = ''}) => {
	return (
		<div className="updates-header container">
			<h1 className="updates-header-title">{title}</h1>	
			<div className="updates-header-bg"></div>
		</div>
	);
};

export default updatesHeader;
