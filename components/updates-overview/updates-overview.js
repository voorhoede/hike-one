const UpdatesOverview = ({classes = '', children}) => (
	<div className={`updates-overview container ${classes}`}>
		<div className="container-inner">
		{ children }
		</div>
	</div>
);

export default UpdatesOverview;
