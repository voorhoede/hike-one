import getContrastYIQ from '../_helpers/getContrastYIQ';

const updateExtractSmall = ({title='', date='', name='', extractImage='', color='', target=''}) => { 
	return (
		<a href={target} target="_blank" className={`update-extract-small 
			${ getContrastYIQ(color) === 'black' ? 'update-extract-small-text-dark' : '' }`}>
			<img srcSet={`
				${extractImage}&fm=jpg&q=90&w=345 345w,
				${extractImage}&fm=jpg&q=90&w=370 370w
			`} sizes={`
				(max-width: 768px) calc(100vw - 30px),
				(max-width: 1024px) calc(50vw - 15px),
				(max-width: 1170px) calc(33vw - 30px),
				370px
			`} src={`${extractImage}&fm=jpg&q=90&w=370`} alt=""
			className="update-extract-small-image" />
			<div className="update-extract-small-text" 
				style={{backgroundColor: color}}>
				<div className="update-extract-small-type" style={{color: color}}>update</div>
				<h2 className="update-extract-small-title">{title}</h2>
				<span className="update-extract-small-subtitle">{date} - {name}</span>
			</div>
		</a>
	)
}

export default updateExtractSmall;