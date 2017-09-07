import React from 'react';
import "isomorphic-fetch";

import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import cookie from '../components/_helpers/cookie';
import parseList from'../components/_helpers/parseList';

import FullWidthHeader from '../components/full-width-header/full-width-header';
import BodyHeading from '../components/body-heading/body-heading';
import BodyQuote from '../components/body-quote/body-quote';
import BodyText from '../components/body-text/body-text';
import InlineImage from '../components/inline-image/inline-image';
import List from '../components/list/list';
import FullWidthImageSmall from '../components/full-width-image-small/full-width-image-small';

const Update = ({Data, fontsLoaded}) => (
	<Layout title={`Hike One - ${Data.title}`} fontsLoaded={fontsLoaded}>
		<main className="main js-main">
			<MenuBar color="white" />
			<article className="article">
				<FullWidthHeader 
					headerImage={Data.headerImage.url}
					color={Data.color.hex}
					title={Data.title}
					authorName={Data.author.name} 
					updatedDate={Data.date}/>	
				{ Data.content.map((component, index) => {
					switch (component.itemType) {
						case 'body_heading':
							return <BodyHeading key={index} title={component.title} />;
						case 'body_quote':
							return <BodyQuote key={index} quote={component.quote}/>;
						case 'body_text':
							return <BodyText key={index} text={component.text} />;
						case 'inline_image':
							return (
								<InlineImage
									key={index}
									image={component.image.url}
								    caption={component.caption} />
							);
						case 'inline_image_large':
							return (
								<InlineImage
									key={index}
									large={true}
									image={component.image.url}
									caption={component.caption} />
							);
						case 'list':
							// add helper function here to convert markdown list to an array with items
							const items = parseList(component.items);
							return (
								<List key={index} items={items} />
							);
							return;
						case 'full_width_image_small':
							return (
								<FullWidthImageSmall key={index} image={component.image.url} />
							);
					}
				})}

				<div>
					<p>{Data.author.name}</p>
					<p>{Data.author.role}</p>
					<img src={Data.author.photo.url} />
					<p>{Data.author.summary}</p>
				</div>
			</article>
			<Footer />
		</main>
	</Layout>
);

Update.getInitialProps = async ({req, query}) => {
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
	const res = await fetch(`${baseUrl}/api/updates/${query.slug}`);
	const json = await res.json();

	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded');
	return { Data: json, fontsLoaded};
};

export default Update;
