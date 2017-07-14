import React from 'react';

const FiftyFifty = ({classes, image, title = '', text = '', parallaxLayerBack, parallaxLayerFront}) => {
        return (
            <section className={`fifty-fifty clearfix container ${classes ? classes : ''}`}>
				{parallaxLayerBack}
				<div className="container-inner">
					<div className="fifty-fifty-image">
						<img className="shadow" src={image} alt="" />

					</div>
					<div className="fifty-fifty-content">
						<h2 className="fifty-fifty-title">{title}</h2>
						<p className="fifty-fifty-text">{text}</p>
					</div>
				</div>
				{parallaxLayerFront}
            </section>
        );
};

export default FiftyFifty;
