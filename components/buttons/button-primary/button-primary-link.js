import Icon from '../../icon/icon';
import PropTypes from 'prop-types';
import Link from 'next/link';

const PrimaryButtonLink = ({
	classes = '',
	href = '',
	children,
	icon = '',
	target = '_self',
}) => (
	<a
		href={href}
		className={`btn-primary ${classes} ${icon ? 'btn-icon' : ''}`}
		target={target}
	>
		{children}

		{icon && (
			<span className="icon">
				<Icon icon={icon} />
			</span>
		)}
	</a>
);

PrimaryButtonLink.propTypes = {
	classes: PropTypes.string,
	href: PropTypes.string,
	children: PropTypes.node,
	icon: PropTypes.string,
	target: PropTypes.string,
};

export default PrimaryButtonLink;
