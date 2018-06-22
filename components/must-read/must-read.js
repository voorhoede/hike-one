import ButtonSecondary from '../buttons/button-secondary/button-secondary'

class MustRead extends React.Component {
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
		const buttonText = isCollapsed ? 'See more' : 'See less';
		const hideItem = isCollapsed ? 'hide': 'show';
		const mustReadShortFade = isCollapsed ? "must-read-short-fade" : " ";
		return(
			<div className="must-read">
				<h1 className="must-read-title">Must read</h1>
				{mustRead.map((item, index, key) => (
					<a href={item.link} target={item.isExternalLink ? '_blank' : ''} className={`must-read-item must-read-item${index} ${hideItem}`}>
						<h2 className="must-read-item-index">{index + 1}</h2>
						<div>
							<h1 className="must-read-item-title">{item.title}</h1>
							<h3 className="must-read-item-author">{item.author.name}</h3>
						</div>
					</a>
				))}
				<div className={mustReadShortFade}></div>
				<ButtonSecondary onClick={this.handleClick} classes="must-read-toggle btn-red-border">{buttonText}</ButtonSecondary>
			</div>
		)
	}
}

export default MustRead;
