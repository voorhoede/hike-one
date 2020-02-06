import PropTypes from 'prop-types';
import Icon from '../../icon/icon';

const ButtonSecondary = ({
	children,
	classes = '',
	disabled = false,
	icon = '',
	onClick = null,
	type = 'button',
}) => (
	<button
		type={type}
		onClick={onClick}
		className={`btn-secondary ${classes} ${icon ? 'btn-icon' : ''}`}
		disabled={disabled}
	>
		{children}
		{icon && <Icon icon={icon} />}
	</button>
);

ButtonSecondary.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.string,
	disabled: PropTypes.bool,
	icon: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.string,
};

export default ButtonSecondary;
