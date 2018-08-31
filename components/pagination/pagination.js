import React from 'react'

import ButtonSecondary from '../buttons/button-secondary/button-secondary'
import scrollToElement from '../_helpers/scrollToElement'

class Pagination extends React.Component {
	constructor(props) {
    super(props)

    this.state = {
      pageOffset: 1,
    }
  }

	render() {
    const { test } = this.props
    const { pageOffset } = this.state
    const pageSize = 6
    // const totalPages = Math.ceil(totalItems / pageSize)
    // const itemsInView = pageOffset * pageSize

    console.log(test)
    return (
      <div>{test}
      </div>
    )
  }
}

export default Pagination
