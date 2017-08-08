import Link  from 'next/link';
import Icon from '../../icon/icon';

const ButtonSecondaryLink = ({classes = '', href, children = '', icon}) => (
	<Link href={href}>
		<a className={`btn-secondary ${classes} ${icon ? 'btn-icon' : ''}`}>
			{ children }

			{ icon &&
			<span className="icon">
				<Icon icon={icon}/>
			</span>
			}
		</a>
	</Link>
);


export default ButtonSecondaryLink;
