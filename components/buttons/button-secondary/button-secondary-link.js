import PropTypes from 'prop-types';
import Link from 'next/link';
import Icon from '../../icon/icon';

const ButtonSecondaryLink = ({
	classes = '',
	href = '',
	children,
	icon = '',
	target = '_self',
}) => {
	const hrefIsTarget = href.startsWith('#');

	return hrefIsTarget ? (
		<a href={href} target={target} className={`btn-secondary ${classes} ${icon ? 'btn-icon' : ''}`}>
			{children}
			{icon && <Icon icon={icon} />}
		</a>
	) : (
		<Link href={href.replace('https://hike.one/', '/')} prefetch={target ? false : null}>
			<a target={target} className={`btn-secondary ${classes} ${icon ? 'btn-icon' : ''}`}>
				{children}
				{icon && <Icon icon={icon} />}
			</a>
		</Link>
	);
};

ButtonSecondaryLink.propTypes = {
	classes: PropTypes.string,
	href: PropTypes.string,
	children: PropTypes.node,
	icon: PropTypes.string,
	target: PropTypes.string,
};

export default ButtonSecondaryLink;
