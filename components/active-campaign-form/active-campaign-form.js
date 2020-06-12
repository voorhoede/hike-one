import { Component } from 'react';
import PropTypes from 'prop-types';

class ActiveCampaignForm extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const script = document.createElement('script');

		script.src = `https://hike25515.activehosted.com/f/embed.php?id=${this.props.activeCampaignId}`;
		script.async = true;

		document.body.appendChild(script);
	}

	render() {
		return <div id="active-campaign-form" className={`_form_${this.props.activeCampaignId}`} />;
	}
}

ActiveCampaignForm.propTypes = {
	activeCampaignID: PropTypes.number,
};

export default ActiveCampaignForm;
