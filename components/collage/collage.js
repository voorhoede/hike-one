import React from 'react';

const Collage = ({ imageMedium, imageSmall, title = '', text = '' }) => {
	return (
		<section className="">
			<div className="">
				<div className="">
					<img className="" src={imageMedium} alt="" />
					<img className="" src={imageSmall} alt="" />
				</div>
				<div className="">
					<h2 className="">{title}</h2>
					<p className="">{text}</p>
				</div>
			</div>
		</section>
	) 
}

export default Collage;