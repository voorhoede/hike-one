const ContactMenu = ({isOpen}) => (
	<section className={`context-menu shadow-low-opacity ${isOpen ? '' : 'is-hidden' }`}>
		<p className="context-menu-title">Op zoek naar ons logo?</p>
		<div className="context-menu-wrapper">
			<table className="context-menu-table">
				<tbody>
					<tr className="context-menu-table-row">
						<td>Voor een witte achtergrond:</td>
						<td><a className="context-menu-logo-download" href="../../static/images/logo-black.png" download>PNG</a></td>
						<td><a className="context-menu-logo-download" href="../../static/images/logo-black.eps" download>EPS</a></td>
					</tr>
					<tr className="context-menu-table-row">
						<td>Voor een zwarte achtergrond:</td>
						<td><a className="context-menu-logo-download" href="../../static/images/logo-white.png" download>PNG</a></td>
						<td><a className="context-menu-logo-download" href="../../static/images/logo-white.eps" download>EPS</a></td>
					</tr>
				</tbody>
			</table>
			<img className="context-menu-logo-image" src="../../static/images/logo-black.png" alt="logo black"/>
		</div>
		<a className="context-menu-logo-download-all" href="../../static/images/hike-one-logo.zip" download>Download alle logo's</a>
	</section>
);

export default ContactMenu;
