import React, { Component } from 'react'

class InputField extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shouldValidate: false,
    }
  }

  onBlur = () => {
    if (this.props.isRequired) {
      this.setState({ shouldValidate: true })
    }
  }

  render() {
    const { label, name, type, value, onChange, isRequired, autoFocus, formLength, id } = this.props
    const { shouldValidate } = this.state
    const { onBlur } = this
    const shouldValidateClass = shouldValidate ? 'should-validate' : ''
    const styles = type === 'textarea' ? { order: formLength, flexBasis: '100%'} : {}


    return (
      <div className={`input-field ${type === 'textarea' ? 'textarea-input' : ''}`} style={{ ...styles }}>
        <label className={`label ${ isRequired ? 'required' : ''}`} htmlFor={name}>
          {label}
        </label>

        {type === 'textarea' ? (
          <textarea
            key={id}
            id={name}
            className={`input textarea ${shouldValidateClass}`}
            name={name}
            value={value}
            onChange={onChange}
            autoFocus={autoFocus}
            onBlur={onBlur}
            required={isRequired}
          />
        ) : (
          <input
            key={id}
            type={type}
            id={name}
            className={`input ${shouldValidateClass}`}
            name={name}
            value={value}
            onChange={onChange}
            autoFocus={autoFocus}
            onBlur={onBlur}
            required={isRequired}
          />
        )}
      </div>
    )
  }
}

export default InputField
