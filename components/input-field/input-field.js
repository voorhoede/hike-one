import { Component } from 'react';
import PropTypes from 'prop-types';

class InputField extends Component {
	constructor(props) {
		super(props);
		this.onBlur = this.onBlur.bind(this);
		this.state = {
			shouldValidate: false,
		};
	}

	onBlur() {
		const { isRequired } = this.props;
		if (isRequired) {
			this.setState({ shouldValidate: true });
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
		} = this.props;
		const { shouldValidate } = this.state;
		const shouldValidateClass = shouldValidate ? 'should-validate' : '';
		const styles = type === 'textarea' ? { order: formLength, flexBasis: '100%' } : {};

		return (
			<div className={`input-field ${type}-input`} style={{ ...styles }}>
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
						onBlur={this.onBlur}
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
						onBlur={this.onBlur}
						required={isRequired}
					/>
				)}
			</div>
		);
	}
}

InputField.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	type: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	isRequired: PropTypes.bool,
	autoFocus: PropTypes.bool,
	formLength: PropTypes.number,
	id: PropTypes.string,
};

export default InputField;
