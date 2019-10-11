import { Component } from 'react';
import PropTypes from 'prop-types';

import Authors from '../authors/authors';
import ButtonSecondary from '../buttons/button-secondary/button-secondary';

class MustRead extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			isCollapsed: true,
		};
	}

	handleClick() {
		const { isCollapsed } = this.state;
		this.setState({ isCollapsed: !isCollapsed });
	}

	render() {
		const { mustRead } = this.props;
		const { isCollapsed } = this.state;
		const buttonText = isCollapsed ? 'Show more' : 'Show less';
		const hideItem = isCollapsed ? 'hide' : 'show';
		const mustReadShortFade = isCollapsed ? 'must-read-short-fade' : ' ';
		const buttonIcon = isCollapsed ? 'arrowDown' : 'arrowUp';
		const buttonClass = isCollapsed ? 'arrow-down' : 'arrow-up';

		return (
			<div className="must-read">
				<h1 className="must-read-title">Must read</h1>
				{mustRead.map((item, index) => (
					<a
						href={item.link ? item.link : `/update/${item.slug}`}
						target={item.isExternalLink ? '_blank' : '_self'}
						className={`must-read-item must-read-item${index} ${hideItem}`}
						key={index}
					>
						<h2 className="must-read-item-index">{index + 1}</h2>
						<div>
							<h1 className="must-read-item-title">{item.title}</h1>
							<h3 className="must-read-item-author">
								<Authors authors={item.authors} />
							</h3>
						</div>
					</a>
				))}
				<div className={mustReadShortFade} />
				<ButtonSecondary
					onClick={this.handleClick}
					classes={`must-read-toggle btn-red-border vertical-spring ${buttonClass}`}
					icon={buttonIcon}
				>
					{buttonText}
				</ButtonSecondary>
			</div>
		);
	}
}

MustRead.propTypes = {
	mustRead: PropTypes.array,
};

export default MustRead;
