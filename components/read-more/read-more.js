import Link  from 'next/link';

import ButtonSecondaryLink from  '../buttons/button-secondary/button-secondary-link';
import ArrowRightRound from '../icons/arrow-right-round/arrow-right-round';

const ReadMore = ({highlight = {}, links = []}) => (
	<section className="read-more container">
		<div className="read-more-highlight" style={{backgroundImage: `url(${highlight.image})`}} >
			<h2>{highlight.title}</h2>
			<ButtonSecondaryLink href={highlight.href} classes="btn-red" icon="arrowRight">
				{highlight.linkLabel}
			</ButtonSecondaryLink>
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

export default ReadMore;
