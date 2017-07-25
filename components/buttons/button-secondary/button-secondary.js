import ArrowRight from '../../icons/arrow-right/arrow-right';

const ButtonSecondary = ({classes = '', onClick, value = '', noArrow}) => (
	<button
		onClick={onClick}
		className={`btn-secondary ${classes}`}>
		{ value }
		{ !noArrow &&
			<span className="icon">
				<ArrowRight/>
			</span>
		}
	</button>
);


export default ButtonSecondary;
