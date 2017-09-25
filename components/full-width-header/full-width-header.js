import Icon from '../icon/icon';
import Link from 'next/link';
import getDateFormat from '../_helpers/getDateFormat';

const FullWidthHeader = ({headerImage='', color='', title='', authorName='', updatedDate='', titleOnly = false}) => (
	<div className="full-width-header">
		<div className="full-width-header-image" style={{backgroundImage: `url(${headerImage})`}}></div>
		<div className="full-width-header-banner" style={{backgroundColor:`${color}`}}>
			<div className="full-width-header-back" style={{backgroundColor:`${color}`}}>
				{ !titleOnly &&
				<Link href={`/updates`}  as={`/updates`}>
					<a className="full-width-header-link">
						<Icon icon="arrowLeft" classes="icon"/>
						<span className="full-width-header-subtitle">all updates</span>
					</a>
				</Link>
				}
			</div>
			<div className="full-width-header-content" style={{backgroundColor:`${color}`}}>
				<h1 className="full-width-header-title">{title}</h1>
				{ !titleOnly &&
				<span className="full-width-header-author">
						{authorName} - {`${getDateFormat(updatedDate)}`}
					</span>
				}
			</div>
			<div></div>
		</div>
	</div>
);
export default FullWidthHeader;
