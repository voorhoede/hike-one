import ArrowRightRound from '../icons/arrow-right-round/arrow-right-round';
import Link from 'next/link';

const BlogExtract = ({ blogImage, title, subtitle, date, link }) => (
	<Link href={link}>
		<a className="blog-extract">
			<div className="blog-extract-image-container">
				<img src={blogImage} alt=""/>
			</div>

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
	</Link>
) 


export default BlogExtract;