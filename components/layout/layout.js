const Layout = ({ preview, children }) => (
	<>
		{preview && (
			<aside class="layout__preview-notice">
				This page is a preview.&nbsp;
				<a class="layout__preview-notice-link" href="/api/exit-preview">
					Exit preview mode.
				</a>
			</aside>
		)}
		{children}
	</>
);

export default Layout;
