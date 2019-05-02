import React, { Component } from 'react'
import ButtonSecondary from '../buttons/button-secondary/button-secondary'
import Authors from '../authors/authors';

class MustRead extends Component {
	constructor(props) {
		super(props);
        this.state = {isCollapsed: true};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const { isCollapsed } = this.state;
		this.setState({isCollapsed: !isCollapsed});
	}

	render() {
		const { mustRead, index } = this.props;
		const { isCollapsed } = this.state;
		const buttonText = isCollapsed ? 'Show more' : 'Show less';
		const hideItem = isCollapsed ? 'hide': 'show';
		const mustReadShortFade = isCollapsed ? 'must-read-short-fade' : ' ';
		const buttonIcon = isCollapsed ? 'arrowDown' : 'arrowUp'
		const buttonClass = isCollapsed ? 'arrow-down' : 'arrow-up'
		
		return(
			<div className="must-read">
				<h1 className="must-read-title">Must read</h1>
				{mustRead.map((item, index) => (
					<a href={item.link} target={item.isExternalLink ? '_blank' : ''} className={`must-read-item must-read-item${index} ${hideItem}`} key={index}>
						<h2 className="must-read-item-index">{index + 1}</h2>
						<div>
							<h1 className="must-read-item-title">{item.title}</h1>
							<h3 className="must-read-item-author">
								<Authors authors={item.authors} />
							</h3>
						</div>
					</a>
				))}
				<div className={mustReadShortFade}></div>
				<ButtonSecondary onClick={this.handleClick} classes={`must-read-toggle btn-red-border vertical-spring ${buttonClass}`} icon={buttonIcon} >
					{buttonText}
				</ButtonSecondary>
			</div>
		);
	}
}

export default MustRead;
