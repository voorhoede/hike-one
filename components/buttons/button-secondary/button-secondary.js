import Icon from '../../icon/icon';

const ButtonSecondary = ({classes = '', onClick = null, children = '', icon = ''}) => (
	<button
		onClick={onClick}
		className={`btn-secondary ${classes}`}>
		{ children }

		{ icon &&
		<span className="icon">
			<Icon icon={icon}/>
		</span>
		}
	</button>
);



export default ButtonSecondary;
