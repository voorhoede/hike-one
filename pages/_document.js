import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0, minimal-ui"
					/>
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta httpEquiv="cleartype" content="on" />
					<link
						rel="dns-prefetch"
						href="https://www.googletagmanager.com"
					></link>
					<script
						dangerouslySetInnerHTML={{
							__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5KJ6PKN');`,
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					<script
						id="mcjs"
						dangerouslySetInnerHTML={{
							__html:
								'!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/9fcf53aac8cfc03a445bd4e2f/c7ff7fa29349202fda8890cac.js");',
						}}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html:
								'_linkedin_partner_id = "361124"; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push(_linkedin_partner_id);',
						}}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html:
								'(function(){var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript";b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s);})();',
						}}
					/>
					<noscript>
						<img
							height="1"
							width="1"
							style={{ display: 'none' }}
							alt="img"
							src="https://dc.ads.linkedin.com/collect/?pid=361124&fmt=gif"
						/>
					</noscript>
					<noscript>
						<iframe
							src="https://www.googletagmanager.com/ns.html?id=GTM-5KJ6PKN"
							height="0"
							width="0"
							style={{ display: 'none', visibility: 'hidden' }}
						/>
					</noscript>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
