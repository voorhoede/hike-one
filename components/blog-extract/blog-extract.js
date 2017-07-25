import ArrowRightRound from '../icons/arrow-right-round/arrow-right-round';

const BlogExtract = ({ blogImage, title, subtitle, date }) => (
	<a href="#blog" className="blog-extract">
		<div className="blog-extract-image-container" style={{backgroundImage: `url(${blogImage})`}}></div>
		<div className="blog-extract-text-container">
			<div className="blog-extract-triangle"></div>	
			<h3>{subtitle}</h3>
			<h2>{title}</h2>
			<div className="blog-extract-footer-container">
				<span>{date}</span>
				<ArrowRightRound />
			</div>
		</div>
	</a>
) 


export default BlogExtract;