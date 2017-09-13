const OfficeOverview = ({classes = '', children}) => (
	<div className={`office-overview container ${classes}`}>
		<div className="container-inner">
			{ children }
		</div>
	</div>
);

export default OfficeOverview;
