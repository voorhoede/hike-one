const WorkOverview = ({classes = '', children, moreButton=false}) => (
	<div className={`work-overview container ${classes}
					${moreButton ? 'work-overview-extra-spacing' : '' }`}>
		<div className="container-inner">
		{ children }
		</div>
	</div>
);

export default WorkOverview;
