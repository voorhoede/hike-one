const ButtonPrimary = ({classes = '', onClick, value = ''}) => {
	return (
		<button
			onClick={onClick}
			className={`btn-primary ${classes}`}>
			{ value }
		</button>
	);
};

export default ButtonPrimary;
