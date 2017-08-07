import Icon from '../../icon/icon';

const ButtonPrimary = ({classes = '', onClick = null, children = '', icon }) => (
	<button
		onClick={onClick}
		className={`btn-primary ${classes}`}>
		{ children }

		{ icon &&
		<span className="icon">
			<Icon icon={icon}/>
		</span>
		}
	</button>
);

export default ButtonPrimary;
