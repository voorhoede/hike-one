import { Component } from 'react';
import PropTypes from 'prop-types';
import scrollToElement from '../_helpers/scrollToElement';

import ButtonPrimary from '../buttons/button-primary/button-primary';
import CallToAction from '../call-to-action/call-to-action';
import InputField from '../input-field/input-field';
import SelectDropdown from '../select-dropdown/select-dropdown';
import TextCenter from '../text-center/text-center';

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.formatEmailSubject = this.formatEmailSubject.bind(this);
		this.getFormData = this.getFormData.bind(this);
		this.isFormValid = this.isFormValid.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.clearForm = this.clearForm.bind(this);
		this.state = {
			_gotcha: '', // avoids spam by fooling scrapers
			currentForm: null,
			formData: {},
			isSent: false,
			selectedItemId: '',
		};
	}

	handleClick(id, label) {
		this.setState({
			selectedItemId: id,
			selectedItemLabel: label,
			currentForm: this.props.form.forms.find((form) => form.id === id),
		});
	}

	handleChange(e) {
		this.setState({
			formData: {
				...this.state.formData,
				[e.target.name]: e.target.value,
			},
		});
	}

	formatEmailSubject() {
		const { currentForm, formData } = this.state;

		return currentForm.emailMessageSubject
			.split(' ')
			.map((word) => {
				if (word.indexOf('[') !== -1) {
					const name = word.substring(1, word.length - 1);
					return formData[name];
				}
				return word;
			})
			.join(' ');
	}

	getFormData() {
		const { formData } = this.state;
		const emailSubject = this.formatEmailSubject();

		return { _subject: emailSubject, _format: 'plain', ...formData };
	}

	isFormValid() {
		const { currentForm, formData, _gotcha } = this.state;
		const isSpam = _gotcha.length > 0;
		const isValid = currentForm.formFields
			.filter((field) => field.required)
			.map((field) => field.name)
			.map((name) => {
				return name === 'email'
					? formData[name]
						? /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
								formData[name]
						  )
						: false
					: formData[name]
					? formData[name].length >= 2
					: false;
			})
			.every((item) => item);

		return isValid && !isSpam;
	}

	handleSubmit(e) {
		e.preventDefault();

		if (this.isFormValid()) {
			const { currentForm } = this.state;
			const formData = this.getFormData();
			return fetch(`https://formspree.io/${currentForm.formspreeEndpoint}`, {
				method: 'POST',
				mode: 'cors',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})
				.then((e) => {
					switch (e.status) {
						case 200: {
							this.clearForm();
							this.setState({ isSent: true });
							scrollToElement('contact-page');
							break;
						}
						case 403: {
							console.error(
								"In order to submit via AJAX, in this form's reCAPTCHA must be disabled.",
								e
							);
							break;
						}
						default: {
							console.error('Something went wrong: ', e);
						}
					}
				})
				.catch((e) => console.error(e));
		} else {
			return;
		}
	}

	clearForm() {
		this.setState({
			selectedItemId: '',
			currentForm: null,
			_gotcha: '', // avoids spam by fooling scrapers
			formData: {},
		});
	}

	componentDidMount() {
		const { form, singleForm } = this.props;

		if (singleForm) {
			this.setState({
				selectedItemId: form.forms[0].id,
				selectedItemLabel: form.forms[0].label,
				currentForm: form.forms[0],
			});
		}
	}

	render() {
		const { _gotcha, isSent, currentForm, selectedItemId, selectedItemLabel } = this.state;
		const { form, singleForm, showBody = true } = this.props;
		const { title, selectInputLabel, thankYouMessage } = form;
		const forms = singleForm
			? form.forms
			: [...form.forms, { title: 'Working at Hike One', id: 'job-application' }];

		if (!isSent) {
			return (
				<div className={`contact-form ${showBody ? '' : 'no-body'} container`}>
					<h2 className="form-title">{title}</h2>

					{singleForm !== true && (
						<SelectDropdown
							label={selectInputLabel}
							options={[...forms]}
							handleClick={this.handleClick}
							selectedItem={selectedItemLabel}
						/>
					)}

					{selectedItemId === 'job-application' && (
						<div className="work-with-us">
							<TextCenter
								classes="text-center-font-large work-with-us-text"
								text="Are you creative, smart, experimental, curious and result-driven? Join our team!"
							/>

							<CallToAction
								buttonText="See all opportunities"
								url="https://hikeone.homerun.co/"
								isExternalLink={true}
							/>
						</div>
					)}

					{currentForm && (
						<>
							{showBody && (
								<TextCenter
									classes="text-center-text"
									text={`<p>Drop us a line using the form below, or e-mail us directly at <a href='mailto:hello@hike.one?subject=Let's talk about ${selectedItemLabel}'>hello@hike.one</a></p>`}
								/>
							)}

							<form className="form" onSubmit={this.handleSubmit}>
								{currentForm.formFields.map((field, index) => (
									<InputField
										key={field.id}
										name={field.name}
										label={field.label}
										type={field.inputType}
										onChange={this.handleChange}
										value={this.state[field.name]}
										isRequired={field.required}
										autoFocus={index === 0 && !singleForm}
										formLength={currentForm.formFields.length}
									/>
								))}

								<input
									type="hidden"
									name="_gotcha"
									value={_gotcha}
									style={{ display: 'none' }}
									onChange={this.handleChange}
								/>
							</form>

							<small className="required-warning">Fields marked with an * are required.</small>

							<ButtonPrimary classes="submit-btn btn-large" onClick={this.handleSubmit}>
								{currentForm.submitButtonLabel}
							</ButtonPrimary>
						</>
					)}
				</div>
			);
		}

		return (
			<div className="contact-form container">
				<h2 className="form-title">{title}</h2>

				{selectedItemId === 'job-application' && (
					<div className="work-with-us">
						<TextCenter
							classes="text-center-font-large work-with-us-text"
							text="Are you creative, smart, experimental, curious and result-driven? Join our team!"
						/>

						<CallToAction
							buttonText="See all opportunities"
							url="https://hikeone.homerun.co/"
							isExternalLink={true}
						/>
					</div>
				)}

				{currentForm && !isSent && (
					<>
						<TextCenter
							classes="text-center-text"
							text={`<p>Send us a line using the form below, <a href='mailto:hello@hike.one?subject=Let's talk about ${selectedItemLabel}'>or e-mail us directly</a>.</p>`}
						/>

						<form className="form" onSubmit={this.handleSubmit}>
							{currentForm.formFields.map((field, index) => (
								<InputField
									key={field.id}
									name={field.name}
									label={field.label}
									type={field.inputType}
									onChange={this.handleChange}
									value={this.state[field.name]}
									isRequired={field.required}
									autoFocus={index === 0}
									formLength={currentForm.formFields.length}
								/>
							))}
							<input
								type="hidden"
								name="_gotcha"
								value={_gotcha}
								style={{ display: 'none' }}
								onChange={this.handleChange}
							/>
						</form>
						<ButtonPrimary classes="submit-btn btn-large" onClick={this.handleSubmit}>
							{currentForm.submitButtonLabel}
						</ButtonPrimary>
					</>
				)}

				{isSent && (
					<div className="message-sent container">
						<TextCenter
							classes="text-center-font-large text-center-spacing-small"
							text={thankYouMessage}
						/>
					</div>
				)}
			</div>
		);
	}
}

ContactForm.propTypes = {
	form: PropTypes.object,
	showBody: PropTypes.bool,
	singleForm: PropTypes.bool,
};

export default ContactForm;
