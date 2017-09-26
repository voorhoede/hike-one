import React from 'react';

import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import OfficeOverview from '../components/office-overview/office-overview';
import OfficeCard from '../components/office-card/office-card';
import TextCenter from '../components/text-center/text-center';
import * as TextCenterShapes from '../components/text-center/text-center-shapes';
import Footer from '../components/footer/footer';
import cookie from '../components/_helpers/cookie';
import PageHeader from '../components/page-header/page-header';

const Contact = ({Data, fontsLoaded}) => (
	<Layout title="Hike One - Contact"
			fontsLoaded={fontsLoaded}
			seo={Data.seo}>
		<main className="main js-main" >
			<MenuBar color="white" />
			<article className="article">
				<PageHeader
					isSmall={true}
					title={Data.header.title}
					subtitle={Data.header.subtitle}
					image={Data.header.backgroundImage.url}/>

				<div className={`page-scrolling-content-small`}>
					<TextCenter
						classes={`text-center-font-large`}
						text={Data.content}>
						<TextCenterShapes.variation2Back position="back" />
					</TextCenter>

					<OfficeOverview header={Data.officesHeader}>
						{ Data.office.map((item, index) => (
							<OfficeCard
								key={index}
								index={index}
								location={item.location}
								address={item.address}
								postcode={item.postcode}
								city={item.city}
								country={item.country}
								locationUrl={item.locationUrl}
								imageUrl={item.image.url} />
						))}
					</OfficeOverview>
				</div>
			</article>

			<Footer
				callToActionLabel={Data.footer.callToActionLabel}
				callToActionUrl={Data.footer.callToActionUrl} />
		</main>
	</Layout>
);


Contact.getInitialProps = async ({req}) => {
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
	const Data = await fetch(`${baseUrl}/api/contact`).then(res => res.json());
	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded');
	return {Data, fontsLoaded};
};

export default Contact;
