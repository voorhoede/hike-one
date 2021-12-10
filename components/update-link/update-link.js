import PropTypes from 'prop-types';
import ArrowRightCircle from '../icons/arrow-right-circle';
import Authors from '../authors/authors';

const UpdateLink = ({
	authors = [],
	date = '',
	href,
	slug,
	target = false,
	title = '',
	topic = false,
}) => (
	<div className="update-link">
		<a
			href={href || `/${topic ? 'topic' : 'update'}/${slug}`}
			className="update-link-title"
			target={target ? '_blank' : '_self'}
			rel="noopener noreferrer"
		>
			{title}
			<ArrowRightCircle />
		</a>
		<p className="update-link-sub">
			<span>{date}</span> | <Authors authors={authors} />
		</p>
	</div>
);

UpdateLink.propTypes = {
	authors: PropTypes.array,
	date: PropTypes.string,
	href: PropTypes.string,
	slug: PropTypes.string,
	target: PropTypes.bool,
	title: PropTypes.string,
	topic: PropTypes.bool,
};

export default UpdateLink;
