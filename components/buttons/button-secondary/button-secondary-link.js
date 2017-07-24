import Link  from 'next/link';
import ArrowRight from '../../icons/arrow-right/arrow-right';

const ButtonSecondaryLink = ({classes = '', href, value = '', noArrow}) => {
	return (
		<Link href={href}>
			<a className={`btn-secondary ${classes}`}>
				{ value }

				{!noArrow &&
					<span className="icon">
						<ArrowRight/>
					</span>
				}
			</a>
		</Link>
	);
};

export default ButtonSecondaryLink;
