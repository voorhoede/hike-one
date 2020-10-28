import PropTypes from 'prop-types';
import Link from 'next/link';
import Icon from '../../icon/icon';

const ButtonPrimaryLink = ({ classes = '', href = '', children, icon = '', target = '_self' }) => {
	const hrefIsTarget = href.startsWith('#');

	return hrefIsTarget ? (
		<a href={href} target={target} className={`btn-primary ${classes} ${icon ? 'btn-icon' : ''}`}>
			{children}
			{icon && <Icon icon={icon} />}
		</a>
	) : (
		<Link href={href.replace('https://hike.one/', '/')}>
			<a target={target} className={`btn-primary ${classes} ${icon ? 'btn-icon' : ''}`}>
				{children}
				{icon && <Icon icon={icon} />}
			</a>
		</Link>
	);
};

ButtonPrimaryLink.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.string,
	href: PropTypes.string,
	icon: PropTypes.string,
	target: PropTypes.string,
};

export default ButtonPrimaryLink;
