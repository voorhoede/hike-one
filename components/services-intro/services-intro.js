import React from 'react';

import ButtonTertiary from '../buttons/button-tertiary/button-tertiary';
import Shapes from '../services-intro/services-intro-shapes';

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
				<div className="container-inner">
					<h2 className="section-header content">{props.title}</h2>
					<ButtonTertiary
						value={props.buttonLabel}
						onClick={this.handleOnClick}
						classes="content" />
				</div>
				<Shapes />
            </section>
        );
    }
}

export default ServicesIntro;
