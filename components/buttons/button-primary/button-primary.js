import React from 'react'
import PropTypes from 'prop-types'
const noop = () => {}

const PrimaryButton = ({ className, onClick = noop, children }) => (
	<button className={ `btn-primary ${className}` } onClick={ onClick }>
		{ children }
	</button>
)

PrimaryButton.PropTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func
}

export default PrimaryButton;
