const googleTagManagerConfig = ({id}) => (
	<script dangerouslySetInnerHTML={{__html: `
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments)};
		gtag('js', new Date());

		gtag('config', '${id}');
	`}} ></script>
);

export default googleTagManagerConfig;
