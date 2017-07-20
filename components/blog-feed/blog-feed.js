

const BlogFeed = ({ blogImage, title, subtitle, date }) => {
	return (
		<div className="blog-feed">
			<div className="blog-feed-image-container" style={{backgroundImage: `url(${blogImage})`}}></div>
			<div className="blog-feed-text-container">
				<h3>{subtitle}</h3>
				<h2>{title}</h2>
				<span>{date}</span>
			</div>
		</div>
	) 
}
export default BlogFeed;