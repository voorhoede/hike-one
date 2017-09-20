import Icon from '../icon/icon';
import Link from 'next/link';
import getDateFormat from '../_helpers/getDateFormat';

const FullWidthHeader = ({headerImage='', color='', title='', authorName='', updatedDate='', titleOnly = false}) => (
	<div className="full-width-header">
		<div className="full-width-header-image" style={{backgroundImage: `url(${headerImage})`}}></div>
		<div className="full-width-header-inner-container">
			<div className="full-width-header-text shadow" style={{backgroundColor:`${color}`}}>

				{ !titleOnly &&
				<div className="full-width-header-back">
					<Link href={`/updates`}  as={`/updates`}>
						<a className="full-width-header-back-container">
							<Icon icon="arrowLeft" classes="icon"/>
							<span className="full-width-header-subtitle">all updates</span>
						</a>
					</Link>
				</div>
				}
				<div className="full-width-header-text-container">
					<h1 className="full-width-header-title">{title}</h1>
					{ !titleOnly &&
						<span className="full-width-header-author">
							{authorName} - {`${getDateFormat(updatedDate)}`}
						</span>
					}
				</div>
			</div>
		</div>
	</div>
)
export default FullWidthHeader;
