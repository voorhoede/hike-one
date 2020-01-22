import PropTypes from 'prop-types';
import Link from 'next/link';
import Icon from '../../icon/icon';

const ButtonPrimaryLink = ({
	classes = '',
	href = '',
	hrefAs = null,
	children,
	icon = '',
	target = '_self',
}) => (
	<Link href={href} as={`${hrefAs ? hrefAs : href}`}>
		<a target={target} className={`btn-primary ${classes} ${icon ? 'btn-icon' : ''}`}>
			{children}
			{icon && (
				<span className="icon">
					<Icon icon={icon} />
				</span>
			)}
		</a>
	</Link>
);

ButtonPrimaryLink.propTypes = {
	classes: PropTypes.string,
	href: PropTypes.string,
	hrefAs: PropTypes.string,
	children: PropTypes.node,
	icon: PropTypes.string,
	target: PropTypes.string,
};

export default ButtonPrimaryLink;
