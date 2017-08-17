import Link  from 'next/link';

import ButtonSecondaryMock from  '../buttons/button-secondary/button-secondary-mock';
import ArrowRightRound from '../icons/arrow-right-circle';

const ReadMore = ({highlight = {}, links = []}) => (
	<section className="read-more container">
		<Link href={highlight.href}>
			<a className="read-more-highlight" >
				<div className={`read-more-highlight-img transition-transform-start
					transition-normal-opacity transition-normal-transform`} 
					style={{backgroundImage: `url(${highlight.image})`}}> </div>
				<div className="read-more-highlight-content">
					<h2>{highlight.title}</h2>
					<ButtonSecondaryMock classes="" icon="arrowRight">
						{highlight.linkLabel}
					</ButtonSecondaryMock>
				</div>
			</a>
		</Link>
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
