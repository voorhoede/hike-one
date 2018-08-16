class InputField extends React.Component {
	constructor(props) {
    super(props)

    this.state = {
      isRequired: false,
    }
  }
  
  shouldValidate = () => {
    const { name } = this.props

    if ((name === 'name') || (name === 'email')) {
      this.setState({ isRequired: true })
    }
  }

	render() {
    const { classes, label, name, type, value, onChange } = this.props
    const { isRequired } = this.state
    const { shouldValidate } = this
    const shouldValidateClass = isRequired ? 'should-validate' : ''

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
          onBlur={shouldValidate}
        />
      </div>
    )
	}
}

export default InputField
