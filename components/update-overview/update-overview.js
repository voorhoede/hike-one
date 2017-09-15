import ButtonSecondaryLink from '../buttons/button-secondary/button-secondary-link';

const UpdateOverview = ({classes = '', children, toUpdates=false}) => (
	<div className={`update-overview container ${classes}`}>
		<div className="container-inner">
		{ children }
		</div>
		{ toUpdates &&
			<div className="update-overview-button-centered">
				<ButtonSecondaryLink href="/updates" classes="btn-red-border" icon="arrowRight">
					All updates
				</ButtonSecondaryLink>
			</div>
		}
	</div>
);

export default UpdateOverview;
