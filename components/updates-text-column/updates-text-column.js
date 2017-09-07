import Link  from 'next/link';

import ButtonSecondaryMock from  '../buttons/button-secondary/button-secondary-mock';
import ArrowRightRound from '../icons/arrow-right-circle';

const UpdatesTextColumn = ({ links = []}) => (
	<div className="updates-text-column">
		{links.map((item, i) => {
			return (
				<div key={i} className="updates-text-column-item">
					<Link href={item.href}><a>{item.title} <ArrowRightRound /></a></Link>
					<p>{item.subtext}</p>
				</div>
			);
		})}
	</div>
);

export default UpdatesTextColumn;
