import React from 'react';

class FiftyFifty extends React.Component {
    render() {
        const props = this.props;
        return (
			<section className={`fifty-fifty clearfix container  
								${props.classes ? props.classes : ''} `}>
				<div className="container-inner">
					<div className="fifty-fifty-image">
						<img className={`${props.noshadow ? 'no-shadow' : 'shadow-low-opacity'}` } src={props.image} alt="" />
					</div>
					<div className="fifty-fifty-content">
						<h2 className="fifty-fifty-title">{props.title}</h2>
						<p className="fifty-fifty-text">{props.text}</p>
					</div>
				</div>
            </section>
        );
    }
}

export default FiftyFifty;
