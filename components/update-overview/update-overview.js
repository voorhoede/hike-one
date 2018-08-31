import React from 'react'
import Pagination from '../pagination/pagination'
import UpdatesExtractLarge from '../updates-extract-large/updates-extract-large'
import UpdateExtractSmall from '../update-extract-small/update-extract-small'
import ButtonSecondary from '../buttons/button-secondary/button-secondary';

class UpdateOverview extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			updates: this.props.updatesData.slice(0, 6),
		}
	}

	handleClick() {
		const { isFilterCollapsed } = this.state
		this.setState({isFilterCollapsed: !isFilterCollapsed})
	}

	render() {
		const { data, updatesData } = this.props
		console.log('data', data)
		console.log('updates data', updatesData)

		return (
			<div className="update-overview container">
				<div className="container-inner">
				<UpdatesExtractLarge highlights={data.highlights} mustRead={data.mustRead} index />
				{ this.state.updates.map((item, index) => (
					<UpdateExtractSmall
						key={index}
						index={index}
						title={item.title}
						date={item.date}
						author={item.author.name}
						target={item.link}
						image={item.image.url}
						category={item.category.name}
						color={item.themeColor.hex}
						external={item.isExternalLink}/>
				))}
				</div>
				<ButtonSecondary classes={'btn-large btn-red-border btn-centered'} icon={'arrowDown'} >
					Show more
				</ButtonSecondary>
			</div>
		)
	}
}

export default UpdateOverview
