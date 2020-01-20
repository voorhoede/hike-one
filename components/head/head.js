import Head from 'next/head';

export default ({ title, description, image = null, twitterCard = null, children }) => (
	<Head>
		<title>{title}</title>
		<meta name="description" content={description} />
		<meta name="theme-color" content="#ffffff" />
		<meta name="application-name" content="Hike One" />

		<meta property="og:site_name" content="Hike One" />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:type" content="website" />
		<meta
			property="og:image"
			content={image ? image.url : '/static/images/hikeone-default-social.jpg'}
		/>
		{image && <meta property="og:image:width" content={image.width} />}
		{image && <meta property="og:image:height" content={image.height} />}
		<meta name="twitter:site" content="@hikeone" />
		{twitterCard && <meta name="twitter:card" content={twitterCard} />}

		<meta name="msapplication-config" content="/static/browserconfig.xml" />
		<meta name="msapplication-TileColor" content="#ffffff" />

		<meta name="msapplication-square70x70logo" content="/static/icons/mstile-70x70.png" />
		<meta name="msapplication-square150x150logo" content="/static/icons/mstile-150x150.png" />
		<meta name="msapplication-square310x150logo" content="/static/icons/mstile-310x150.png" />
		<meta name="msapplication-square310x310logo" content="/static/icons/mstile-310x310.png" />

		<meta name="mobile-web-app-capable" content="no" />
		<meta name="apple-mobile-web-app-capable" content="no" />
		<meta name="apple-mobile-web-app-title" content="Hike One" />
		<meta name="apple-mobile-web-app-status-bar-style" content="default" />

		<link rel="icon" type="image/x-icon" href="/static/icons/favicon.ico" />
		<link rel="icon" type="image/png" href="/static/icons/favicon-16x16.png" />
		<link rel="icon" type="image/png" href="/static/icons/favicon-32x32.png" />

		<link rel="icon" type="image/png" href="/static/icons/android-36x36.png" sizes="36x36" />
		<link rel="icon" type="image/png" href="/static/icons/android-48x48.png" sizes="48x48" />
		<link rel="icon" type="image/png" href="/static/icons/android-72x72.png" sizes="72x72" />
		<link rel="icon" type="image/png" href="/static/icons/android-96x96.png" sizes="96x96" />
		<link rel="icon" type="image/png" href="/static/icons/android-128x128.png" sizes="128x128" />
		<link rel="icon" type="image/png" href="/static/icons/android-144x144.png" sizes="144x144" />
		<link rel="icon" type="image/png" href="/static/icons/android-152x152.png" sizes="152x152" />
		<link rel="icon" type="image/png" href="/static/icons/android-192x192.png" sizes="192x192" />
		<link rel="icon" type="image/png" href="/static/icons/android-384x384.png" sizes="384x384" />
		<link rel="icon" type="image/png" href="/static/icons/android-512x512.png" sizes="512x512" />

		<link rel="apple-touch-icon" href="/static/icons/apple-60x60.png" sizes="60x60" />
		<link rel="apple-touch-icon" href="/static/icons/apple-76x76.png" sizes="76x76" />
		<link rel="apple-touch-icon" href="/static/icons/apple-120x120.png" sizes="120x120" />
		<link rel="apple-touch-icon" href="/static/icons/apple-152x152.png" sizes="152x152" />
		<link rel="apple-touch-icon" href="/static/icons/apple-180x180.png" sizes="180x180" />

		<link rel="manifest" type="application/manifest+json" href="/manifest.json" />
		<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fe595b" />
		<script async src="https://www.googletagmanager.com/gtag/js?id=GTM-5KJ6PKN" />
		<script
			dangerouslySetInnerHTML={{
				__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'GTM-5KJ6PKN', { 'anonymize_ip': true });
				`,
			}}
		/>
		{children}
	</Head>
);
