import Icon from '../icon/icon'
import Link from 'next/link'
import getDateFormat from '../_helpers/getDateFormat'
import setImageParams from '../_helpers/setImageParameters'

const FullWidthHeader = ({ headerImage='', color='', title='', authorName='', updatedDate='', titleOnly=false, headerImageLarger=false }) => {
	const imageParameters = { fit: 'max', fm: 'pjpg', q: 85 }
	const heroImageSmall = `${setImageParams(headerImage, {...imageParameters, w: 1000} )}`
	const heroImageMedium = `${setImageParams(headerImage, {...imageParameters, w: 1500} )}`
	const heroImageLarge = `${setImageParams(headerImage, {...imageParameters, w: 2000} )}`
	const headerImageClass = headerImageLarger ? 'image-large' : ''

	const style ={__html:
		`<style>
			.full-width-header-image {
				background-image: url(${heroImageSmall});
			}
			@media only screen and (min-width: 768px) {
				.full-width-header-image {
					background-image: url(${heroImageMedium});
				}
			}
			@media only screen and (min-width: 1170px) {
				.full-width-header-image {
					background-image: url(${heroImageLarge});
				}
			}
		</style>`}

	return (
		<div className="full-width-header">
			<div dangerouslySetInnerHTML={style}></div>
			<div className={`full-width-header-image ${headerImageClass}`}></div>
			<div className="full-width-header-banner" style={{backgroundColor:`${color}`}}>
				<div className="full-width-header-back" style={{backgroundColor:`${ color}`}}>
					{!titleOnly &&
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
	)
}

export default FullWidthHeader
