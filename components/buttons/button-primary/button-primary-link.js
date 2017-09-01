import Link from 'next/link';
import Icon from '../../icon/icon';

const PrimaryButtonLink = ({classes = '', href, hrefAs = null, children = '', icon}) => (
	<Link href={href} as={`${hrefAs ? hrefAs : href }`}>
		<a className={`btn-primary ${classes} ${icon ? 'btn-icon' : ''}`}>
			{children}
			{ icon &&
			<span className="icon">
				<Icon icon={icon}/>
			</span>
			}
		</a>
	</Link>
);

export default PrimaryButtonLink;
