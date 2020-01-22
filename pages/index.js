import '../styles/index.less';

import fetchContent from '../lib/fetch-content';
import withCacheControl from '../lib/with-cache-control';
import scrollToElement from '../components/_helpers/scrollToElement';

import Head from '../components/head/head';
import CaseExtract from '../components/case-extract/case-extract';
import MenuBar from '../components/menu-bar/menu-bar';
import ServicesCards from '../components/services-cards/services-cards';
import TextCenter from '../components/text-center/text-center';
import UpdateOverviewSmall from '../components/update-overview-small/update-overview-small';
import UpdateExtractSmall from '../components/update-extract-small/update-extract-small';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';
import PageHeader from '../components/page-header/page-header';

const scrollToTargetClass = 'js-scroll-to-target';

const Page = ({ home, footer }) => (
	<>
		<Head
			title={home.seo.title}
			description={home.seo.description}
			image={home.seo.image}
			twitterCard={home.seo.twitterCard}
		/>

		<MenuBar color="white" />

		<PageHeader
			onClickScrollButton={() => scrollToElement(scrollToTargetClass)}
			video={home.header.video}
			title={home.header.title}
			subtitle={home.header.subtitle}
			image={home.header.backgroundImage.url}
			showGradient={home.header.displayGradient}
		/>

		<main className={`${scrollToTargetClass} page-scrolling-content`}>
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

			<Contact
				title={home.contact.title}
				button={home.contact.button}
				link={home.contact.externalLink}
			/>
		</main>

		<Footer form={footer.form} disableParallax />
	</>
);

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
				displayGradient
				video
				backgroundImage {
					url
				}
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
