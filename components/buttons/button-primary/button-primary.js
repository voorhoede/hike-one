import PropTypes from 'prop-types';
import Icon from '../../icon/icon';

const ButtonPrimary = ({
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
		className={`btn-primary ${classes} ${icon ? 'btn-icon' : ''} `}
		disabled={disabled}
	>
		{children}

		{icon && (
			<span className="icon">
				<Icon icon={icon} />
			</span>
		)}
	</button>
);

ButtonPrimary.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.string,
	disabled: PropTypes.bool,
	icon: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.string,
};

export default ButtonPrimary;
