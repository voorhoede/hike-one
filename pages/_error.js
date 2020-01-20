import '../styles/index.less';

import fetchContent from '../lib/fetch-content';

import Head from '../components/head/head';
import MenuBar from '../components/menu-bar/menu-bar';
import TextCenter from '../components/text-center/text-center';
import * as TextCenterShapes from '../components/text-center/text-center-shapes';
import InlineImage from '../components/inline-image/inline-image';

const Error = ({ errorPage }) => (
	<>
		<Head title="Hike One - Error" />

		<MenuBar />

		<article
			className={`article article-error ${errorPage.image ? 'article-error--has-image' : ''}`}
		>
			<TextCenter title={errorPage.title} text={errorPage.description}>
				<TextCenterShapes.variation3Back position="back" />
				<TextCenterShapes.variation4Front position="front" />
			</TextCenter>

			{errorPage.image && (
				<section className="error-image container">
					<div className="container-inner">
						<InlineImage
							url={errorPage.image.url}
							width={errorPage.image.width}
							height={errorPage.image.height}
						/>
					</div>
				</section>
			)}
		</article>
	</>
);

Error.getInitialProps = ({ res, req }) => {
	const graphqlQuery = `{
	  errorPage(filter: {error: {eq: "${res.statusCode}"}}) {
	    title
	    description
	    image {
	      url
	      width
	      height
	    }
	  }
	}`;

	return fetchContent({ graphqlQuery, req });
};

export default Error;
