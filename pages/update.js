import React from 'react';
import "isomorphic-fetch";

import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import cookie from '../components/_helpers/cookie';

const Update = ({Data, fontsLoaded}) => (
	<Layout title={`Hike One - ${Data.title}`} fontsLoaded={fontsLoaded}>
		<main className="main js-main">
			<MenuBar/>
			<article className="article">
				<h1> { Data.title } </h1>

				{ Data.content.map((component, index) => {
					switch (component.itemType) {
						case 'body_heading':
							return <h2 key={index}>{ component.title }</h2>;
						case 'body_quote':
							return <blockquote key={index}>{ component.quote }</blockquote>;
						case 'body_text':
							return <p key={index}>{ component.text }</p>;
						case 'inline_image':
							return (
								<div key={index}>
									<img src={component.image.url} />
									{ component.caption && <p>{ component.caption }</p> }
								</div>
							);
						case 'inline_image_large':
							return (
								<div key={index}>
									<img src={component.image.url} />
									{ component.caption && <p>{ component.caption }</p> }
								</div>
							);
						case 'list':
							return (
								<p key={index}>{component.items}</p>
							);
						case 'full_width_image_small':
							return (
								<div key={index}>
									<img src={component.image.url} />
								</div>
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
