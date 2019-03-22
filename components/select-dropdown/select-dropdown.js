import ButtonClean from '../buttons/button-clean/button-clean'

class SelectDropdown extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isCollapsed: true,
		}
	}

	toggleDropdown = () => {
		const { isCollapsed } = this.state
		this.setState({ isCollapsed: !isCollapsed })
	}

	handleClick = (id) => {
		this.toggleDropdown()

		this.props.handleClick(id)
	}

	render() {
		const { selectedItem, label, options } = this.props
		const { isCollapsed } = this.state
		const activeButtonClass = !isCollapsed ? 'active' : ''

		return (
			<div className="select-dropdown">
				<div className="dropdown-header">
					<ButtonClean
						classes={`select-btn ${activeButtonClass}`}
						icon="arrowDown"
						onClick={this.toggleDropdown}
					>
						{selectedItem || label}
					</ButtonClean>
				</div>

				{!isCollapsed &&
					<ul className="dropdown-list">
						{options.map(option => (
							<li className="list-item" key={option.id}>
								<ButtonClean
									classes="select-item"
									onClick={() => this.handleClick(option.id)}
								>
									{option.title}
								</ButtonClean>
							</li>
						))}
					</ul>
				}
			</div>
		)
	}
}

export default SelectDropdown
