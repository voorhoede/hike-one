import Head from 'next/head'

export default ({ title, description, image = null, twitterCard = null, children }) => (
	<Head>
		<title>{title}</title>
		<meta name="description" content={description} />
		<meta name="msapplication-TileColor" content="#ffffff" />
		<meta name="msapplication-TileImage" content="/static/icons/mstile-150x150.png" />
		<meta name="apple-mobile-web-app-title" content="Hike One" />
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
		<link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-touch-icon.png" />
		<link rel="icon" type="image/png" href="/static/icons/favicon-32x32.png" sizes="32x32" />
		<link rel="icon" type="image/png" href="/static/icons/favicon-16x16.png" sizes="16x16" />
		{children}
	</Head>
)
