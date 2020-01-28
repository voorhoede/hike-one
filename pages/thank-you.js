import '../styles/index.less';

import fetchContent from '../lib/fetch-content';
import withCacheControl from '../lib/with-cache-control';

import Head from '../components/head/head';
import MenuBar from '../components/menu-bar/menu-bar';
import TextCenter from '../components/text-center/text-center';
import * as TextCenterShapes from '../components/text-center/text-center-shapes';
import ButtonPrimaryLink from '../components/buttons/button-primary/button-primary';
import Footer from '../components/footer/footer';

const Page = ({ thankYouPage, footer }) => (
	<>
		<Head title="Hike One - Thank you" />

		<MenuBar color="black" />

		<article className="article article-thank-you">
			<TextCenter title={thankYouPage.title} text={thankYouPage.content}>
				<TextCenterShapes.variation3Back position="back" />
				<TextCenterShapes.variation4Front position="front" />
			</TextCenter>

			<ButtonPrimaryLink href={thankYouPage.callToActionUrl} classes="btn-large btn-centered">
				{thankYouPage.callToActionLabel}
			</ButtonPrimaryLink>
		</article>

		<Footer form={footer.form} disableParallax />
	</>
);

Page.getInitialProps = withCacheControl(({ req }) => {
	const graphqlQuery = `{
    thankYouPage {
      title
      content
      callToActionUrl
      callToActionLabel
    }

		footer {
			form {
				title
				description
				listId
				button
				hasShadow
				extraInputFields {
					label
					inputType
					required
				}
			}
		}
	}`;

	return fetchContent({ graphqlQuery, req });
});

export default Page;
