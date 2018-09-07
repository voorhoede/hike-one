import React from 'react'
import UpdatesExtractLarge from '../updates-extract-large/updates-extract-large'
import UpdateExtractSmall from '../update-extract-small/update-extract-small'
import ButtonSecondary from '../buttons/button-secondary/button-secondary';
import scrollToElement from '../_helpers/scrollToElement'

class UpdateOverview extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
  		pageOffset: 1,
  		pageSize: 6,
    }
	}

	handleClick = () => {
		this.setState({
			pageOffset: this.state.pageOffset + 1
		})

		scrollToElement('next-item')		
	}

	render() {
		const { data, updatesData } = this.props
		const { pageSize, pageOffset } = this.state
		const itemsInView = pageOffset * pageSize
		const previousItemsInView = itemsInView - pageSize
		const items = updatesData.slice(0, itemsInView)
		const totalPages = Math.ceil(updatesData.length / pageSize)
		const nextItemInPagination = updatesData[previousItemsInView]

		return (
			<div className="update-overview container">
				<div className="container-inner">
				<UpdatesExtractLarge highlights={data.highlights} mustRead={data.mustRead} index />
				{ items.map((item, index) => (
					<UpdateExtractSmall
						classes={item === nextItemInPagination ? 'next-item' : ''}
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
					<ButtonSecondary onClick={this.handleClick} classes={'btn-large btn-red-border btn-centered vertical-spring'} icon={'arrowDown'} >
						Show more
					</ButtonSecondary> }
			</div>
		)
	}
}

export default UpdateOverview
