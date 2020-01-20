import PropTypes from 'prop-types';
import ArrowRightCircle from '../icons/arrow-right-circle';
import Authors from '../authors/authors';

const UpdateLink = ({ slug, href, title = '', authors = [], date = '', target = false }) => (
	<div className="update-link">
		<a
			href={href || `/update/${slug}`}
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
	slug: PropTypes.string,
	href: PropTypes.string,
	title: PropTypes.string,
	authors: PropTypes.array,
	date: PropTypes.string,
	target: PropTypes.bool,
};

export default UpdateLink;
