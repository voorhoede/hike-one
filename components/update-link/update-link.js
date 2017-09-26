import React from 'react';
import ArrowRightCircle from '../icons/arrow-right-circle';
import Link from 'next/link';

const updateLink = ({target='#', title='', author='', date='', external = false}) => (
	<div className="update-link">
		<Link href={ target }>
			<a className="update-link-title"
			   target={external ? '_blank' : ''}>{ title }
			   <ArrowRightCircle />
			</a>
		</Link>
		<p className="update-link-sub"><span>{ date }</span> | { author }</p>
	</div>
);

export default updateLink;
