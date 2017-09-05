import Icon from '../icon/icon';
import getDateFormat from '../_helpers/getDateFormat';

const FullWidthHeader = ({headerImage='', color='', title='',authorName='',updatedDate=''}) => (
	<div className="full-width-header">
		<div className="full-width-header-image" style={{backgroundImage: `url(${headerImage})`}}></div>
		<div className="full-width-header-inner-container">
			<div className="full-width-header-text shadow" style={{backgroundColor:`${color}`}}>
				<div className="full-width-header-back">
					<div className="full-width-header-back-container">	
						<Icon icon="arrowLeft"/>
						<span className="full-width-header-subtitle">all updates</span>
					</div>
				</div>
				<div className="full-width-header-text-container">
					<h1 className="full-width-header-title">{title}</h1>
					<span className="full-width-header-author">
						{authorName} - {`${getDateFormat(updatedDate)}`}
					</span>
				</div>
			</div>
		</div>
	</div>
)
export default FullWidthHeader;