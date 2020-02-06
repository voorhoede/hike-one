import PropTypes from 'prop-types';
import Icon from '../../icon/icon';

const ButtonClean = ({
	children,
	classes = '',
	disabled = false,
	icon = '',
	onClick = null,
	type = 'button',
}) => (
	<button type={type} onClick={onClick} className={`btn-clean ${classes}`} disabled={disabled}>
		{children}
		{icon && <Icon icon={icon} />}
	</button>
);

ButtonClean.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.string,
	disabled: PropTypes.bool,
	icon: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.string,
};

export default ButtonClean;
