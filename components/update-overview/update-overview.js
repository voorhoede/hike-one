const UpdateOverview = ({classes = '', children}) => (
	<div className={`update-overview container ${classes}`}>
		<div className="container-inner">
		{ children }
		</div>
	</div>
);

export default UpdateOverview;
