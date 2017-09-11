import Link  from 'next/link';

import ButtonSecondaryMock from  '../buttons/button-secondary/button-secondary-mock';
import ArrowRightRound from '../icons/arrow-right-circle';

const UpdatesTextColumn = ({ links = []}) => (
	<div className="updates-text-column">
		{links.map((item, i) => {
			return (
				<div key={i} className="updates-text-column-item">
					<Link href={item.href}>
						<a className="updates-text-column-link">{item.title} <ArrowRightRound /></a>
					</Link>
					<p className="updates-text-column-body">{item.subtext}</p>
				</div>
			);
		})}
	</div>
);

export default UpdatesTextColumn;
