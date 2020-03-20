import PropTypes from 'prop-types';

import Link from 'next/link';

const AppNotification = ({ message = '', link = {} }) => (
	<div className="app-notification">
		<p className="app-notification__message">{message}</p>
		{link && link.slug && (
			<Link href={'/update/[slug]'} as={`/update/${link.slug}`}>
				<a className="app-notification__link">Read here</a>
			</Link>
		)}
	</div>
);

AppNotification.propTypes = {
	message: PropTypes.string,
	link: PropTypes.object,
};

export default AppNotification;
