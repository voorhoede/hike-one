import PropTypes from 'prop-types';
import Link from 'next/link';
import ArrowRightCircle from '../icons/arrow-right-circle';
import Authors from '../authors/authors';

const UpdateLink = ({
	href = '#',
	title = '',
	authors = [],
	date = '',
	target = false,
}) => (
	<div className="update-link">
		<Link href={href}>
			<a
				className="update-link-title"
				target={target ? '_blank' : '_self'}
				rel="noopener noreferrer"
			>
				{title}
				<ArrowRightCircle />
			</a>
		</Link>
		<p className="update-link-sub">
			<span>{date}</span> | <Authors authors={authors} />
		</p>
	</div>
);

UpdateLink.propTypes = {
	href: PropTypes.string,
	title: PropTypes.string,
	authors: PropTypes.array,
	date: PropTypes.string,
	target: PropTypes.string,
};

export default UpdateLink;
