import Link  from 'next/link';

const ButtonTertiaryLink = ({href = '#', classes = '', value = '', children}) => (
	<Link href={href}>
		<a className={`btn-tertiary ${classes}`}>
			{value}
			<span className="icon">
				{children}
			</span>
		</a>
	</Link>
);

export default ButtonTertiaryLink;
