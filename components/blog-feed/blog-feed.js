import ButtonTertiary from '../buttons/button-tertiary/button-tertiary';

const BlogFeed = ({ blogImage, title, subtitle, date }) => {
	return (
		<div className="blog-feed">
			<div className="blog-feed-image-container" style={{backgroundImage: `url(${blogImage})`}}></div>
			<div className="blog-feed-text-container">
				<h3>{subtitle}</h3>
				<h2>{title}</h2>
				<div className="blog-feed-footer-container">
					<span>{date}</span>
					<ButtonTertiary classes="btn-white" iconType="arrowRight" />
				</div>
			</div>
		</div>
	) 
}

export default BlogFeed;