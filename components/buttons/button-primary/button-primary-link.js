import Link from 'next/link';

const PrimaryButtonLink = ({classes = '', href, value = ''}) => (
	<div>
		<Link href={href}>
			<a className={`btn-primary ${classes}`}>
				{value}
			</a>
		</Link>
	</div>
);


export default PrimaryButtonLink;
