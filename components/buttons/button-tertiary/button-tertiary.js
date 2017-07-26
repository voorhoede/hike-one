const ButtonTertiary = ({classes = '', onClick, value = '', children}) => (
	<button
		onClick={onClick}
		className={`btn-tertiary ${classes}`} >
		{ value }
		<span className="icon">
			{children}
		</span>
	</button>
);


export default ButtonTertiary;
