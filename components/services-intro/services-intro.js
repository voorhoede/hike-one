import React from 'react';

import ButtonTertiary from '../buttons/button-tertiary/button-tertiary';
import ShapesFront from './services-intro-shapes-front';
import ShapesBack from './services-intro-shapes-back';

class ServicesIntro extends React.Component {
	constructor() {
		super();
		this.handleOnClick = this.handleOnClick.bind(this);
	}

	componentDidMount() {
		this.scrollToElement = document.querySelector('.js-approach');
	}

	handleOnClick() {
		if (this.scrollToElement) {
			this.scrollToElement.scrollIntoView(true);
		}
	}

    render() {
    	const props = this.props;
        return (
            <section className="services-intro">
				<ShapesBack />
				<div className="container-inner">
					<h2 className="section-header content">{props.title}</h2>
					<ButtonTertiary
						value={props.buttonLabel}
						onClick={this.handleOnClick}
						classes="content" 
						iconType="arrowDown"/>
				</div>
				<ShapesFront />
            </section>
        );
    }
}

export default ServicesIntro;
