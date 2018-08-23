class InputField extends React.Component {
	constructor(props) {
    super(props)

    this.state = {
      shouldValidate: false,
    }
  }
  
  onBlur = () => {
    if (this.props.isRequired === 'true') {
      this.setState({
        shouldValidate: true,
      })
    }
  }

	render() {
    const { classes, label, name, type, value, onChange, isRequired } = this.props
    const { shouldValidate } = this.state
    const { onBlur } = this
    const shouldValidateClass = shouldValidate ? 'should-validate' : ''

		return (
      <div className='input-field'>
        <label className='label' htmlFor={name}>
          {label}
        </label>
        
        <input 
          type={type}
          id={name}
          className={`input ${classes} ${shouldValidateClass}`} 
          name={name}
          value={value} 
          onChange={onChange} 
          autoFocus={name === 'name'}
          required={isRequired}
          onBlur={onBlur}
        />
      </div>
    )
	}
}

export default InputField
