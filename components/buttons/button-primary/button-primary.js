const ButtonPrimary = ({classes = '', onClick, value = ''}) => (
	<button
		onClick={onClick}
		className={`btn-primary ${classes}`}>
		{ value }
	</button>
);

export default ButtonPrimary;
