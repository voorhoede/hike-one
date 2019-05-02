import React, { Component } from 'react'
import PropTypes from 'prop-types'

class InputField extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shouldValidate: false,
    }
  }

  onBlur = () => {
    const { isRequired } = this.props
    if (isRequired) {
      this.setState({ shouldValidate: true })
    }
  }

  render() {
    const {
      label,
      name,
      type,
      value,
      onChange,
      isRequired,
      autoFocus,
      formLength,
      id,
    } = this.props
    const { shouldValidate } = this.state
    const { onBlur } = this
    const shouldValidateClass = shouldValidate ? 'should-validate' : ''
    const styles = type === 'textarea' ? { order: formLength, flexBasis: '100%' } : {}

    return (
      <div
        className={`input-field ${type === 'textarea' ? 'textarea-input' : ''}`}
        style={{ ...styles }}>
        <label className={`label ${isRequired ? 'required' : ''}`} htmlFor={name}>
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

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool.isRequired,
  autoFocus: PropTypes.string.isRequired,
  formLength: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
}

export default InputField
