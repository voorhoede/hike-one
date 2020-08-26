import { useInView } from 'react-intersection-observer';
import '../styles/index.less';

import fetchContent from '../lib/fetch-content';
import withCacheControl from '../lib/with-cache-control';

import Head from '../components/head/head';
import MenuBar from '../components/menu-bar/menu-bar';
import PageHeaderNew from '../components/page-header-new/page-header-new';
import LogoCarousel from '../components/logo-carousel/logo-carousel';
import WorkOverview from '../components/work-overview/work-overview';
import CaseExtractSmall from '../components/case-extract-small/case-extract-small';
import Contact from '../components/contact/contact';
import ContactShapes from '../components/contact/contact-shapes';
import Footer from '../components/footer/footer';

const Page = ({ work, overviewCases, footer }) => {
	const [ref, inView, entry] = useInView({ rootMargin: '-70px 0 0 0' });

	return (
		<>
			<Head
				title={work.seo.title}
				description={work.seo.description}
				image={work.seo.image}
				twitterCard={work.seo.twitterCard}
			/>

			<MenuBar color="white" fill={!inView} />

			<div className="layout-parallax">
				<PageHeaderNew
					ref={ref}
					title={work.header.title}
					animation="basic"
					animationTriangleColor={work.header.animationTriangleColor}
					animationBackgroundColor={work.header.animationBackgroundColor}
				/>

				<main className="page-scrolling-content-small">
					<LogoCarousel title={work.logoCarousel.title} companies={work.logoCarousel.companies} />

					<WorkOverview>
						{overviewCases.map((workcase, index) => (
							<CaseExtractSmall
								key={index}
								title={workcase.header.title}
								subtitle={workcase.header.subtitle}
								image={workcase.header.backgroundImage}
								companyName={workcase.companyName}
								color={workcase.caseThemeColor.hex}
								slug={workcase.slug}
							/>
						))}
					</WorkOverview>
				</main>

				<Contact
					title={work.contact.title}
					button={work.contact.button}
					link={work.contact.externalLink}
				>
					<ContactShapes position="front" />
				</Contact>
			</div>

			<Footer form={footer.form} />
		</>
	);
};

Page.getInitialProps = withCacheControl(({ query, req }) => {
	const graphqlQuery = `{
		work {
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
				animation
				animationBackgroundColor { hex }
				animationTriangleColor { hex }
				backgroundImage { url }
				subtitle
				title
			}
			logoCarousel {
				title
				companies {
					name
					logo { url }
				}
			}
			contact {
				title
				button
				externalLink
			}
		}

		overviewCases: allCases(filter: { showInOverview: { eq: true } }) {
			slug
			companyName
			caseThemeColor { hex }

			header {
				title
				subtitle
				backgroundImage { url }
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
