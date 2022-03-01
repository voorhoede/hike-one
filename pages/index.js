import { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import fetchContent from '../lib/fetch-content';
import withCacheControl from '../lib/with-cache-control';

import Layout from '../components/layout/layout';
import AppNotification from '../components/app-notification/app-notification';
import CaseExtract from '../components/case-extract/case-extract';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';
import Head from '../components/head/head';
import MenuBar from '../components/menu-bar/menu-bar';
import HomepageHeader from '../components/homepage-header/homepage-header';
import ServicesCards from '../components/services-cards/services-cards';
import TextCenter from '../components/text-center/text-center';
import UpdateExtractSmall from '../components/update-extract-small/update-extract-small';
import UpdateOverviewSmall from '../components/update-overview-small/update-overview-small';
import VacancyOverview from '../components/vacancy-overview/vacancy-overview';

let scrapeJobs;

if (!process.browser) {
	scrapeJobs = require('../lib/job-scraper/server');
} else {
	scrapeJobs = require('../lib/job-scraper/browser');
}

const Page = ({ home, footer, preview, vacancyOverview, vacancies }) => {
	const [isHeaderVisible, setIsHeaderVisible] = useState(true);

	function onChange(isVisible) {
		setIsHeaderVisible(isVisible);
	}

	return (
		<div className={`homepage ${!isHeaderVisible ? 'homepage--after-header' : ''}`}>
			<Layout preview={preview}>
				<Head
					title={home.seo.title}
					description={home.seo.description}
					image={home.seo.image}
					twitterCard={home.seo.twitterCard}
				/>

				{home.appNotificationMessage && (
					<AppNotification message={home.appNotificationMessage} link={home.appNotificationLink} />
				)}

				<MenuBar />
				<VisibilitySensor onChange={onChange} partialVisibility={true}>
					<HomepageHeader
						title={home.header.title}
						subtitle={home.header.subtitle}
						cta={{ label: home.header.ctaLabel, url: home.header.ctaUrl }}
					/>
				</VisibilitySensor>

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

					<VacancyOverview overview={vacancyOverview} vacancies={vacancies} />
				</main>

				<Contact
					title={home.contact.title}
					button={home.contact.button}
					link={home.contact.externalLink}
				/>

				<Footer
					careersText={footer.careersText}
					showForm={footer.showForm}
					form={footer.form}
					industriesLinks={footer.industriesLinks}
					copyrightLinks={footer.copyrightLinks}
					disableParallax
				/>
			</Layout>
		</div>
	);
};

Page.getInitialProps = withCacheControl(({ preview }) => {
	const graphqlQuery = /* GraphQL */ `
		{
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
					link {
						slug
					}
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
						caseThemeColor {
							hex
						}
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
					image {
						url
					}
					themeColor {
						hex
					}
					authors {
						name
					}
					category {
						name
					}
				}

				contact {
					title
					button
					externalLink
				}

				appNotificationMessage
				appNotificationLink {
					slug
				}
			}

			vacancyOverview {
				title
				tagline
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

	return Promise.all([
		fetchContent({ graphqlQuery, preview }),
		fetch(`https://homerun.co/embed/ahz3le8c0dl4ivfruo0n/widget.html?t=${Date.now()}`)
			.then((response) => response.text())
			.then(scrapeJobs),
	]).then(([content, vacancies]) => ({
		...content,
		vacancies,
	}));
});

export default Page;
