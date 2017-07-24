import Link  from 'next/link';

import PrimaryButtonLink from  '../buttons/button-primary/button-primary-link';
import ArrowRightRound from '../icons/arrow-right-round/arrow-right-round';

const ReadMore = ({image, highlight = {}, links = []}) => {
	return (
		<section className="read-more container">
			<div className="read-more-highlight" style={{backgroundImage: `url(${image})`}} >
				<h2>{highlight.title}</h2>
				<PrimaryButtonLink href={highlight.href} value={highlight.linkLabel} />
			</div>
			<div className="read-more-links">
				{links.map((item, i) => {
					return (
						<div key={i}>
							<Link href={item.href}><a>{item.title} <ArrowRightRound /></a></Link>
							<p>{item.subtext}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default ReadMore;
