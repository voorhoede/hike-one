import ArrowRight from '../icons/arrow-right/arrow-right';
import Link from 'next/link';

const TwitterExtract = ({ twitterImage, subtitle, title, date, linkTwitterAccount, linkTwitterPost }) => {
	return (
		<div className="twitter-extract"> 
			<div className={`twitter-extract-image ${twitterImage ? '' : 'is-hidden' }`}>
				<Link href={linkTwitterPost}>
					<a>
						<img src={twitterImage} alt=""/>	
					</a>	
				</Link>
			</div>
			<div className={`twitter-extract-text ${twitterImage ? '' : 'twitter-extract-full-width' }`}>
				<div className={`twitter-extract-triangle ${twitterImage ? '' : 'is-hidden' }`}></div>
				<Link href={linkTwitterAccount}>
					<a>
						<h4>{subtitle}</h4>
					</a>
				</Link>
				
				<Link href={linkTwitterPost}>
					<a>
						<h3>{title}</h3>
					</a>
				</Link>
				<span>{date}</span>
				<Link href={linkTwitterAccount}>
					<a>
						<ArrowRight />
					</a>
				</Link>
			</div>
		</div>
	)
}

export default TwitterExtract;