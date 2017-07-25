import ArrowRight from '../icons/arrow-right/arrow-right';

const TwitterExtract = ({ twitterImage, subtitle, title, date, link }) => {
	return (
		<a href={link} className="twitter-extract"> 
			<div className={`twitter-extract-image ${twitterImage ? '' : 'is-hidden' }`}>
				<img src={twitterImage} alt=""/>
			</div>
			<div className={`twitter-extract-text ${twitterImage ? '' : 'twitter-extract-full-width' }`}>
				<div className={`twitter-extract-triangle ${twitterImage ? '' : 'is-hidden' }`}></div>
				<h4>{subtitle}</h4>
				<h3>{title}</h3>
				<span>{date}</span>
				<ArrowRight />
			</div>
		</a>
	)
}

export default TwitterExtract;