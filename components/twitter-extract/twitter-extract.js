import ArrowRight from '../icons/arrow-right/arrow-right';

const TwitterExtract = ({ twitterImage, subtitle, title, date, link }) => {
	return (
		<a href={link} className="twitter-extract"> 
			<div className="twitter-extract-image"  style={{backgroundImage: `url(${twitterImage})`}}></div>
			<div className="twitter-extract-text">
				<div className="twitter-extract-triangle"></div>
				<h4>{subtitle}</h4>
				<h3>{title}</h3>
				<span>{date}</span>
				<ArrowRight />
			</div>
		</a>
	)
}

export default TwitterExtract;