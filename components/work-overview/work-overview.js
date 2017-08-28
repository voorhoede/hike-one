const WorkOverview = ({classes = '', children}) => (
	<div className={`work-overview container ${classes}`}>
		<div className="container-inner">
		{ children }
		</div>
	</div>
);

export default WorkOverview;
