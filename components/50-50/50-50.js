import React from 'react';

class FiftyFifty extends React.Component {
    render() {
        const props = this.props;
        return (
			<section className={`fifty-fifty clearfix container 
								${props.aligntoside ? 'fifty-fifty-align-toside' : ''} 
								${props.classes ? props.classes : ''} `}>
				<div className="container-inner">
					<div className={`fifty-fifty-image ${props.aligntoside ? 'fifty-fifty-align-toside' : ''} ` }>
						<img className={`${props.noshadow ? 'no-shadow' : 'shadow-low-opacity'}` } src={props.image} alt="" />
					</div>
					<div className={`fifty-fifty-content ${props.aligntoside ? 'fifty-fifty-spacing-left' : ''} ` }>
						<h2 className="fifty-fifty-title">{props.title}</h2>
						<p className="fifty-fifty-text">{props.text}</p>
					</div>
				</div>
            </section>
        );
    }
}

export default FiftyFifty;
