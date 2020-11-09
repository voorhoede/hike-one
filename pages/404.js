import '../styles/index.less';

import fetchContent from '../lib/fetch-content';

import Head from '../components/head/head';
import MenuBar from '../components/menu-bar/menu-bar';
import TextCenter from '../components/text-center/text-center';
import * as TextCenterShapes from '../components/text-center/text-center-shapes';
import InlineImage from '../components/inline-image/inline-image';

const Custom404 = ({ data }) => (
	<>
		<Head title="Hike One - Error" />

		<MenuBar />

		<article className={`article article-error ${data.image ? 'article-error--has-image' : ''}`}>
			<TextCenter title={data.title} text={data.description}>
				<TextCenterShapes.variation3Back position="back" />
				<TextCenterShapes.variation4Front position="front" />
			</TextCenter>

			{data.image && (
				<section className="error-image container">
					<div className="container-inner">
						<InlineImage url={data.image.url} width={data.image.width} height={data.image.height} />
					</div>
				</section>
			)}
		</article>
	</>
);

export async function getStaticProps({ preview }) {
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

	const data = await fetchContent({ graphqlQuery, preview });

	return {
		props: {
			data: data.errorPage,
		},
	};
}

export default Custom404;
