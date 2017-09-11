import React from 'react';
import ArrowRightCircle from '../icons/arrow-right-circle';
import Link from 'next/link';

const updateLink = ({href='#', title='', author='', date=''}) => (
	<div className="update-link">
		<Link href={ href }>
			<a className="update-link-title">{ title } <ArrowRightCircle /></a>
		</Link>
		<p className="update-link-sub"><span>{ date }</span> | { author }</p>
	</div>
);

export default updateLink;
