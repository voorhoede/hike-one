import fetchContent from '../lib/fetch-content';

import Layout from '../components/layout/layout';
import Head from '../components/head/head';
import MenuBar from '../components/menu-bar/menu-bar';
import TextCenter from '../components/text-center/text-center';
import ButtonPrimaryLink from '../components/buttons/button-primary/button-primary-link';
import Footer from '../components/footer/footer';

const Page = ({ thankYouPage, footer, preview }) => (
	<Layout preview={preview}>
		<Head title="Hike One - Thank you" />
		<MenuBar color="black" />
		<article className="article article-thank-you">
			<TextCenter title={thankYouPage.title} text={thankYouPage.content} />

			<ButtonPrimaryLink href={thankYouPage.callToActionUrl} classes="btn-large btn-centered">
				{thankYouPage.callToActionLabel}
			</ButtonPrimaryLink>
		</article>
		<Footer
			careersText={footer.careersText}
			showForm={footer.showForm}
			form={footer.form}
			industriesLinks={footer.industriesLinks}
			copyrightLinks={footer.copyrightLinks}
			disableParallax
		/>
	</Layout>
);

export const getStaticProps = async ({ preview }) => {
	const graphqlQuery = /* GraphQL */ `
		{
			thankYouPage {
				title
				content
				callToActionUrl
				callToActionLabel
			}

			footer {
				careersText
				showForm
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
				industriesLinks {
					title
					page {
						slug
					}
				}
				copyrightLinks {
					title
					page {
						slug
					}
				}
			}
		}
	`;

	return {
		props: await fetchContent({ graphqlQuery, preview }),
		revalidate: 60 * 60 * 24 * 7,
	};
};

export default Page;
