import React, { useState, useEffect } from 'react';

import '../styles/index.less';

import fetchContent from '../lib/fetch-content';

import Head from '../components/head/head';
import MenuBar from '../components/menu-bar/menu-bar';
import TextCenter from '../components/text-center/text-center';
import * as TextCenterShapes from '../components/text-center/text-center-shapes';
import InlineImage from '../components/inline-image/inline-image';

const Custom404 = () => {
	const [data, setData] = useState({ errorPage: {} });

	useEffect(async () => {
		const graphqlQuery = `{
			errorPage(filter: {error: {eq: "404"}}) {
				title
				description
				image {
					url
					width
					height
				}
			}
		}`;

		setData(await fetchContent({ graphqlQuery }));
	});

	return (
		<>
			<Head title="Hike One - Error" />

			<MenuBar />

			<article
				className={`article article-error ${
					data.errorPage.image ? 'article-error--has-image' : ''
				}`}
			>
				<TextCenter title={data.errorPage.title} text={data.errorPage.description}>
					<TextCenterShapes.variation3Back position="back" />
					<TextCenterShapes.variation4Front position="front" />
				</TextCenter>

				{data.errorPage.image && (
					<section className="error-image container">
						<div className="container-inner">
							<InlineImage
								url={data.errorPage.image.url}
								width={data.errorPage.image.width}
								height={data.errorPage.image.height}
							/>
						</div>
					</section>
				)}
			</article>
		</>
	);
};

export default Custom404;
