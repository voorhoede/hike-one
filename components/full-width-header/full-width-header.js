import Icon from '../icon/icon';
import getDateFormat from '../_helpers/getDateFormat';

const FullWidthHeader = ({header}) => (
	<div className="full-width-header">
		<div className="full-width-header-image" style={{backgroundImage: `url(${header.headerImage.url})`}}></div>
		<div className="full-width-header-text-container">
			<div className="full-width-header-text shadow" style={{backgroundColor:`${header.color.hex}`}}>
				<div className="full-width-header-back">
					<div className="full-width-header-back-container">	
						<Icon icon="arrowLeft"/>
						<span className="full-width-header-subtitle">all updates</span>
					</div>
				</div>
				<div className="full-width-header-text-container">
					<h1 className="full-width-header-title">{header.title}</h1>
					<h2 className="full-width-header-author">
						{header.author.name} - {`${getDateFormat(header.date)}`}
					</h2>
				</div>
			</div>
		</div>
	</div>
)
export default FullWidthHeader;