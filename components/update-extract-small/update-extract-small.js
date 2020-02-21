import PropTypes from 'prop-types';
import Link from 'next/link';
import Authors from '../authors/authors';
import ArrowRightExternalLink from '../icons/arrow-right-external-link';
import getDateFormat from '../_helpers/getDateFormat';
import setImageParams from '../_helpers/setImageParameters';

const UpdateExtractSmall = ({
	authors = [],
	category = 'update',
	color = '',
	date = '',
	image = '',
	index,
	link = '',
	slug = '',
	staticAuthors = '',
	target = false,
	title = '',
	topic = false,
}) => {
	const prefix = topic ? 'topic' : 'update';
	const style = {
		__html: `<style>
			.update-extract-small-image-${index} {
				background-image: url('${setImageParams(image, {
					fit: 'crop',
					crop: 'faces',
					w: 550,
					h: 200,
				})}');
			}
			@media (min-width: 768px) {
				.update-extract-small-image-${index} {
					background-image: url('${setImageParams(image, {
						fit: 'crop',
						crop: 'faces',
						w: 470,
						h: 332,
					})}');
				}
			}
			@media (min-width: 1024px) {
				.update-extract-small-image-${index} {
					background-image: url('${setImageParams(image, {
						fit: 'crop',
						crop: 'faces',
						w: 337,
						h: 366,
					})}');
				}
			}
		</style>`,
	};

	return (
		<Link
			href={link ? link : `/${prefix}/[slug]`}
			as={link ? link : `/${prefix}/${slug}`}
			prefetch={target ? false : null}
		>
			<a
				className="update-extract-small"
				target={target ? '_blank' : null}
				rel={target ? 'noopener noreferrer' : null}
			>
				<div dangerouslySetInnerHTML={style} />
				<div className={`update-extract-small-image-${index} update-extract-small-image`} />
				<div className="update-extract-small-text" style={{ backgroundColor: color }}>
					<div className="update-extract-small-type" style={{ color: color }}>
						{category}
						{target && (
							<span className="external-link-icon">
								<ArrowRightExternalLink fill={color} />
							</span>
						)}
					</div>
					<h2 className="update-extract-small-title">{title}</h2>
					<span className="update-extract-small-subtitle" style={{ backgroundColor: color }}>
						<Authors authors={authors} staticAuthors={staticAuthors} /> - {getDateFormat(date)}
					</span>
				</div>
			</a>
		</Link>
	);
};

UpdateExtractSmall.propTypes = {
	authors: PropTypes.array,
	category: PropTypes.string,
	color: PropTypes.string,
	date: PropTypes.string,
	image: PropTypes.string,
	index: PropTypes.number,
	link: PropTypes.string,
	slug: PropTypes.string,
	staticAuthors: PropTypes.string,
	target: PropTypes.bool,
	title: PropTypes.string,
	topic: PropTypes.bool,
};

export default UpdateExtractSmall;
