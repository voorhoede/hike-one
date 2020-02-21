import PropTypes from 'prop-types';
import Link from 'next/link';
import Icon from '../../icon/icon';

const ButtonCleanLink = ({ classes = '', href = '', children, icon = '', target = '_self' }) => (
	<Link href={href} prefetch={target ? false : null}>
		<a target={target} className={`btn-clean ${classes}`}>
			{children}
			{icon && <Icon icon={icon} />}
		</a>
	</Link>
);

ButtonCleanLink.propTypes = {
	classes: PropTypes.string,
	href: PropTypes.string,
	children: PropTypes.node,
	icon: PropTypes.string,
	target: PropTypes.string,
};

export default ButtonCleanLink;
