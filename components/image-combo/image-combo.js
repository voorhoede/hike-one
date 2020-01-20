import PropTypes from 'prop-types'

const ImageCombo = ({ classes = '', children }) => {
	const childrenArray = React.Children.toArray(children)
	const childrenRest = childrenArray.filter(
		child => child.props.position !== 'front' || child.props.position !== 'back'
	)
	const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front')

	return (
		<div className={`${classes ? classes : ''} image-combo`}>
			{childrenRest}
			{parallaxLayerFront}
		</div>
	)
}

ImageCombo.propTypes = {
	classes: PropTypes.string,
	children: PropTypes.node,
}

export default ImageCombo
