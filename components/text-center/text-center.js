import React from 'react';

const TextCenter = ({classes, title = '', text = '' }) => {
	return (
		<section className={`${classes ? classes : ''} text-center container`}>
			<div className="container-inner">
				{ title 
					? <h2>{title}</h2> 
					: '' }
				<p>{text}</p>
			</div>
		</section>
	);
};

export default TextCenter;
