import Link from 'next/link';
import Icon from '../../icon/icon';

const PrimaryButtonLink = ({classes = '', href, children = '', icon}) => (
	<div>
		<Link href={href}>
			<a className={`btn-primary ${classes}`}>
				{children}
				{ icon &&
				<span className="icon">
					<Icon icon={icon}/>
				</span>
				}
			</a>
		</Link>
	</div>
);


export default PrimaryButtonLink;
