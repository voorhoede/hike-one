import PropTypes from 'prop-types';

const ContextMenu = ({ isOpen = false }) => (
	<section className={`context-menu shadow-low-opacity ${isOpen ? '' : 'is-hidden'}`}>
		<p className="context-menu-title">Are you looking for our logo?</p>
		<div className="context-menu-wrapper">
			<table className="context-menu-table">
				<tbody>
					<tr className="context-menu-table-row">
						<td>For a white background:</td>
						<td>
							<a
								className="context-menu-logo-download"
								href="../../static/images/logo-black.png"
								download
							>
								PNG
							</a>
						</td>
						<td>
							<a
								className="context-menu-logo-download"
								href="../../static/images/logo-black.eps"
								download
							>
								EPS
							</a>
						</td>
					</tr>
					<tr className="context-menu-table-row">
						<td>For a black background</td>
						<td>
							<a
								className="context-menu-logo-download"
								href="../../static/images/logo-white.png"
								download
							>
								PNG
							</a>
						</td>
						<td>
							<a
								className="context-menu-logo-download"
								href="../../static/images/logo-white.eps"
								download
							>
								EPS
							</a>
						</td>
					</tr>
				</tbody>
			</table>
			<img
				className="context-menu-logo-image"
				src="../../static/images/logo-black.png"
				alt="logo black"
			/>
		</div>
		<a
			className="context-menu-logo-download-all"
			href="../../static/images/hike-one-logo.zip"
			download
		>
			Download all logos
		</a>
	</section>
);

ContextMenu.propTypes = {
	isOpen: PropTypes.bool,
};

export default ContextMenu;
