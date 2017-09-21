import 'core-js/fn/array/find';
import React from 'react';
import Head from 'next/head';
import loadFonts from '../_helpers/fontLoader'
import GoogleTagManagerMain from '../google-tag-manager/google-tag-manager-main';
import GoogleTagManagerConfig from '../google-tag-manager/google-tag-manager-config';

class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fontsLoaded: props.fontsLoaded ? 'fonts-loaded' : ''
		};
		this.checkFontsLoaded = this.checkFontsLoaded.bind(this);
	}

	componentDidMount() {
		// scroll to top when reloading a page to correctly position parallax layers
		window.addEventListener('beforeunload', () => window.scrollTo(0, 0));
		this.checkFontsLoaded();
	}

	checkFontsLoaded() {
		// if fonts aren't loaded then check with font observer when they're
		// and add fonts loaded class
		if (this.state.fontsLoaded !== 'fonts-loaded') {
			loadFonts().then(
				this.setState({fontsLoaded: 'fonts-loaded'})
			);
		}
	}

	render() {
		const {title = 'Hike One', children, seo, keywords, classes} = this.props;
		const socialImage = seo && seo.image ? seo.image.url : '/static/images/hikeone-default-social.jpg';
		const description = seo && seo.description.length > 0 ? seo.description : `We guide you to new and better products. Let\'s go!`;
		const seoTitle = seo && seo.title ? seo.title : title;
		const seoKeywords = keywords ? keywords : 'Hike One';

		return (
			<div>
				<Head>
					<title>{ seoTitle }</title>
					<meta charset="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0, minimal-ui" />
					<meta name="description" content="Hike One" />
					<meta name="msapplication-TileColor" content="#ffffff" />
					<meta name="msapplication-TileImage" content="/static/icons/mstile-150x150.png" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
					<meta name="apple-mobile-web-app-title" content="Hike One" />
					<meta name="application-name" content="Hike One" />
					<meta name="format-detection" content="telephone=no" />
					<meta name="theme-color" content="" />
					<meta name="keywords" content={seoKeywords}/>
					<meta name="description" content={description} />
					<meta property="og:site_name" content="www.hike.one"/>
					<meta property="og:title" content={seoTitle}/>
					<meta property="og:description" content={description} />
					<meta property="og:image" content={socialImage} />
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:site" content="@hikeone" />
					<link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-touch-icon.png" />
					<link rel="icon" type="image/png" href="/static/icons/favicon-32x32.png" sizes="32x32" />
					<link rel="icon" type="image/png" href="/static/icons/favicon-16x16.png" sizes="16x16" />
					<link rel="stylesheet" href="/static/styles/index.css" />
					<link rel="manifest" href="/manifest.json" />
					<GoogleTagManagerMain id="UA-55852885-2"/>
					<GoogleTagManagerConfig id="UA-55852885-2"/>
				</Head>
				<div className={`${this.state.fontsLoaded} ${classes}`}>
					{ children }
				</div>
			</div>
		);
	}
}

export default Layout;


