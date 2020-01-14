import '../../styles/index.less';

import fetchContent from '../../lib/fetch-content';
import withCacheControl from '../../lib/with-cache-control';
import getDateFormat from '../../components/_helpers/getDateFormat';

import Head from '../../components/_helpers/head';
import MenuBar from '../../components/menu-bar/menu-bar';
import PageHeaderNew from '../../components/page-header-new/page-header-new';
import TabSelector from '../../components/tab-selector/tab-selector';
import TextCenter from '../../components/text-center/text-center';
import Company from '../../components/company/company';
import FiftyFifty from '../../components/50-50/50-50';
import Contact from '../../components/contact/contact';
import ContactShapes from '../../components/contact/contact-shapes';
import WorkOverview from '../../components/work-overview/work-overview';
import CaseExtractSmall from '../../components/case-extract-small/case-extract-small';
import UpdateLinks from '../../components/update-links/update-links';
import UpdateLink from '../../components/update-link/update-link';
import Footer from '../../components/footer/footer';

const Page = ({ service, allServices, footer }) => (
	<>
		<Head
			title={service.seo.title}
			description={service.seo.description}
			image={service.seo.image}
			twitterCard={service.seo.twitterCard}
		/>

		<MenuBar color="white" />

		<div className="service-page layout-parallax">
			<PageHeaderNew
				title={service.header.title}
				animation={service.header.animation}
			/>

			<main className="page-scrolling-content-small">
				<TabSelector selected={service.slug} services={allServices} />

				<TextCenter title={service.introTitle} text={service.introText} />

				<div className="company-overview container clearfix">
					{service.companyReference.map((company, index) => (
						<Company key={index} logo={company.logo.url} name={company.name} />
					))}
				</div>

				{service.content.map((component, index) => {
					switch (component.itemType) {
						case '40_60_text_right':
							return (
								<FiftyFifty
									key={index}
									title={component.title}
									text={component.text}
									imageLarge={true}
									image={component.image}
								/>
							);

						case '40_60_text_left':
							return (
								<FiftyFifty
									key={index}
									title={component.title}
									contentLeft={true}
									text={component.text}
									imageLarge={true}
									image={component.image}
								/>
							);
					}
				})}
			</main>

			<Contact
				title={service.contact.title}
				button={service.contact.button}
				link={service.contact.externalLink}
			>
				<ContactShapes position="front" />
			</Contact>

			<WorkOverview header={service.caseExtractTitle}>
				{service.caseExtract.map((item, index) => (
					<CaseExtractSmall
						key={index}
						title={item.header.title}
						subtitle={item.header.subtitle}
						image={item.header.backgroundImage}
						companyName={item.companyName}
						color={item.caseThemeColor.hex}
						slug={item.slug}
					/>
				))}
			</WorkOverview>

			<UpdateLinks>
				{service.updateLinks.map((item, index) => (
					<UpdateLink
						key={index}
						slug={item.slug}
						href={item.externalLink}
						title={item.title}
						authors={item.authors}
						date={getDateFormat(item.date)}
						target={item.externalLink}
					/>
				))}
			</UpdateLinks>
		</div>

		<Footer form={footer.form} />
	</>
);

Page.getInitialProps = withCacheControl(({ query }) =>
	fetchContent(`{
		service(filter: { slug: { eq: "${query.slug}" } }) {
			slug
			introTitle
			introText
			caseExtractTitle

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

			caseExtract {
				slug
				companyName
				caseThemeColor { hex }

				header {
					title
					subtitle
					backgroundImage { url }
				}
			}

			updateLinks {
				slug
				title
				date
				externalLink
				authors { name }
			}

			header {
				title
				animation
			}

			companyReference {
				name
				logo { url }
			}

			content {
				... on _4060TextLeftRecord {
					itemType: _modelApiKey
					title
					text
					image { url }
				}
				... on _4060TextRightRecord {
					itemType: _modelApiKey
					title
					text
					image { url }
				}
			}

			contact {
				title
				button
				externalLink
			}
		}

		allServices {
			slug
			title
			position
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
	}`)
);

export default Page;
