import fields from './mailchimp.config'

const MailchimpInput = ({ name, label, required, classes='' }) => (
	<div className={`input-field ${classes}`}>
		<label htmlFor={`mce-${fields[name].id}"`} className="label">
			{label} {required ? '*' : ''}
		</label>
		<input
			type={fields[name].type}
			name={fields[name].id}
			id={`mce-${fields[name].id}"`}
			className={`input ${required ? 'required' : ''}`}
			required={required}
		/>
	</div>
)

export default MailchimpInput
