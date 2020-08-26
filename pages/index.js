import { useInView } from 'react-intersection-observer';

import '../styles/index.less';

import fetchContent from '../lib/fetch-content';
import withCacheControl from '../lib/with-cache-control';

import AppNotification from '../components/app-notification/app-notification';
import CaseExtract from '../components/case-extract/case-extract';
import Contact from '../components/contact/contact';
import ContactShape from '../components/contact/contact-shapes';
import Footer from '../components/footer/footer';
import Head from '../components/head/head';
import MenuBar from '../components/menu-bar/menu-bar';
import HomepageHeader from '../components/homepage-header/homepage-header';
import ServicesCards from '../components/services-cards/services-cards';
import TextCenter from '../components/text-center/text-center';
import UpdateExtractSmall from '../components/update-extract-small/update-extract-small';
import UpdateOverviewSmall from '../components/update-overview-small/update-overview-small';

const Page = ({ home, footer }) => {
	const [ref, inView, entry] = useInView();

	return (
		<>
			<Head
				title={home.seo.title}
				description={home.seo.description}
				image={home.seo.image}
				twitterCard={home.seo.twitterCard}
			/>

			{home.appNotificationMessage && (
				<AppNotification message={home.appNotificationMessage} link={home.appNotificationLink} />
			)}

			<MenuBar fill={!inView} />
			<HomepageHeader
				ref={ref}
				title={home.header.title}
				subtitle={home.header.subtitle}
				cta={{ label: home.header.ctaLabel, url: home.header.ctaUrl }}
			/>

			<main>
				<ServicesCards title={home.servicesItemTitle} services={home.serviceItems} />

				<TextCenter
					classes="text-center-font-medium text-center-spacing-small"
					title={home.caseExtractTitle}
					text={home.caseExtractIntro}
				/>

				<CaseExtract
					color={home.caseExtract.case.caseThemeColor.hex}
					companyName={home.caseExtract.case.companyName}
					headerImage={home.caseExtract.image.url}
					title={home.caseExtract.title}
					subtitle={home.caseExtract.subtitle}
					slug={home.caseExtract.case.slug}
				/>

				<TextCenter
					classes="text-center-font-medium text-center-spacing-small"
					title={home.eventsTitle}
					text={home.eventsIntro}
				/>

				<UpdateOverviewSmall>
					{home.updateLinks.map((item, index) => (
						<UpdateExtractSmall
							key={index}
							index={index}
							authors={item.authors}
							category={item.category.name}
							color={item.themeColor.hex}
							date={item.date}
							link={item.externalLink}
							slug={item.slug}
							image={item.image.url}
							target={item.externalLink ? true : false}
							title={item.title}
							topic={item.topic}
						/>
					))}
				</UpdateOverviewSmall>
			</main>

			<Contact
				title={home.contact.title}
				button={home.contact.button}
				link={home.contact.externalLink}
			>
				<ContactShape position="front" />
			</Contact>

			<Footer form={footer.form} disableParallax />
		</>
	);
};

Page.getInitialProps = withCacheControl(({ req }) => {
	const graphqlQuery = `{
		home {
			seo {
				title
				description
				twitterCard
				image {
					url
					width
					height
				}
			}

			header {
				title
				subtitle
				ctaLabel
				ctaUrl
			}

			servicesItemTitle
			serviceItems {
				title
				text
				button
				link { slug }
				iconColor {
					color
				}
			}

			caseExtractTitle
			caseExtractIntro

			caseExtract {
				title
				subtitle
				case {
					slug
					companyName
					caseThemeColor { hex }
				}
				image {
					url
				}
			}

			eventsTitle
			eventsIntro

			updateLinks {
				title
				slug
				date
				externalLink
				topic
				image { url }
				themeColor { hex }
				authors { name }
				category { name }
			}

			contact {
				title
				button
				externalLink
			}

			appNotificationMessage
			appNotificationLink { slug }
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
