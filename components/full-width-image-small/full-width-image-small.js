const fullWidthImageSmall = ({image = '#'}) => (
	<div className="full-width-image-small"> 
		<img
			srcSet={`
				${image}&auto=format&fm=jpg&fit=max&q90&w=445 445w,
				${image}&auto=format&fm=jpg&fit=max&q90&w=821 821w,
				${image}&auto=format&fm=jpg&fit=max&q90&w=1100 1100w,
				${image}&auto=format&fm=jpg&fit=max&q90&w=1400 1400w,
				${image}&auto=format&fm=jpg&fit=max&q90&w=1920 1920w`}	
			alt="" 
			src={`${image}`} />
	</div>
);

export default fullWidthImageSmall;
