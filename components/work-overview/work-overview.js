import PropTypes from 'prop-types';

const WorkOverview = ({ classes = '', header = '', children, moreButton = false }) => (
	<div
		className={`work-overview container ${classes} ${
			moreButton ? 'work-overview-extra-spacing' : ''
		}`}
	>
		<h2 className="work-overview-header">{header}</h2>
		<div className="container-inner">{children}</div>
	</div>
);

WorkOverview.propTypes = {
	classes: PropTypes.string,
	header: PropTypes.string,
	children: PropTypes.node,
	moreButton: PropTypes.bool,
};

export default WorkOverview;
