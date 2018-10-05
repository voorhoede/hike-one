import React from 'react'
import UpdatesExtractLarge from '../updates-extract-large/updates-extract-large'
import UpdateExtractSmall from '../update-extract-small/update-extract-small'
import ButtonSecondary from '../buttons/button-secondary/button-secondary';

class UpdateOverview extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
  		pageOffset: 1,
			pageSize: 6,
			loading: false,
    }
	}

	handleClick = () => {
		this.setState({
			loading: true,
		})
		setTimeout(this.incrementPageOffset, 800)
	}

	incrementPageOffset = () => {
		this.setState({
			pageOffset: this.state.pageOffset + 1,
			loading: false,
		})
	}

	filterUpdates = () => {
		const { data, updatesData } = this.props
		let filteredUpdates = [...updatesData]

		data.highlights.forEach(highlight => {
			console.log(updatesData.find(update => update.title === highlight.title))
			filteredUpdates = filteredUpdates.filter(update => update.title !== highlight.title)
		})

		return filteredUpdates
	}

	render() {
		const { data, updatesData } = this.props
		const { pageSize, pageOffset, loading } = this.state
		const itemsInView = pageOffset * pageSize
		const filteredItems = this.filterUpdates()
		const items = filteredItems.slice(0, itemsInView)
		const totalPages = Math.ceil(updatesData.length / pageSize)

		return (
			<div className="update-overview container">
				<div className="container-inner">
				<UpdatesExtractLarge highlights={data.highlights} mustRead={data.mustRead} index />
				{ items.map((item, index) => (
					<UpdateExtractSmall
						key={index}
						index={index}
						title={item.title}
						date={item.date}
						authors={item.authors}
						target={item.link}
						image={item.image.url}
						category={item.category.name}
						color={item.themeColor.hex}
						external={item.isExternalLink}/>
				))}
				</div>
				{ totalPages > pageOffset &&
					<ButtonSecondary onClick={this.handleClick} classes={ `btn-large btn-red-border btn-centered spinner ${loading ? 'loading' : 'vertical-spring' }` } icon={ !loading ? 'arrowDown' : 'spinner' } >
						Show more
					</ButtonSecondary>
				}
			</div>
		)
	}
}

export default UpdateOverview
