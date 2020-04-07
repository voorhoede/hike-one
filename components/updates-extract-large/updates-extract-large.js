import PropTypes from 'prop-types';
import UpdateExtractLarge from '../update-extract-large/update-extract-large';
import MustRead from '../must-read/must-read';

const UpdatesExtractLarge = ({ highlights = [], mustRead = [] }) => (
	<div className="updates-highlights">
		<div className="updates-extract-large">
			{highlights.map((item, index) => (
				<UpdateExtractLarge
					key={index}
					index={index}
					title={item.title}
					date={item.createdAt}
					slug={item.slug}
					image={item.image.url}
					color={item.themeColor.hex}
					category={item.category.name}
					authors={item.authors}
					staticAuthors={item.staticAuthors}
					href={item.link}
					target={item.isExternalLink}
					topic={item.topic}
				/>
			))}
		</div>
		<MustRead mustRead={mustRead} />
	</div>
);

UpdatesExtractLarge.propTypes = {
	highlights: PropTypes.array,
	mustRead: PropTypes.array,
};

export default UpdatesExtractLarge;
