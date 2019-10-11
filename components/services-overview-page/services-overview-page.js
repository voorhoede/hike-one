import { Component } from 'react';
import PropTypes from 'prop-types';
import CaseExtractSmall from '../case-extract-small/case-extract-small';
import Contact from '../contact/contact';
import ContactShapes from '../contact/contact-shapes';
import UpdateExtractSmall from '../update-extract-small/update-extract-small';
import TextCenter from '../text-center/text-center';

class ServicesOverviewPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			contact = {},
			highlightedCasesTitle = '',
			highlightedCasesBody = '',
			highlightedCases = [],
			highlightedUpdatesTitle = '',
			highlightedUpdatesBody = '',
			highlightedUpdates = [],
		} = this.props;

		return (
			<div className="services-overview-page">
				{Object.entries(contact).length !== 0 &&
					contact.constructor === Object && (
						<Contact
							title={contact.title}
							button={contact.button}
							link={contact.externalLink}
						>
							<ContactShapes position="front" />
						</Contact>
					)}
				<section className="work-overview">
					<div className="container">
						<TextCenter
							title={highlightedCasesTitle}
							text={highlightedCasesBody}
						/>
						<div className="container-inner">
							{highlightedCases.map((item, index) => (
								<CaseExtractSmall
									key={index}
									title={item.title}
									subtitle={item.subtitle}
									image={item.image}
									companyName={item.case.companyName}
									color={item.case.caseThemeColor.hex}
									slug={item.case.slug}
								/>
							))}
						</div>
					</div>
				</section>
				<section className="update-overview">
					<div className="container">
						<TextCenter
							title={highlightedUpdatesTitle}
							text={highlightedUpdatesBody}
						/>
						<div className="container-inner">
							{highlightedUpdates.map((item, index) => (
								<UpdateExtractSmall
									key={index}
									index={index}
									authors={item.authors}
									category={item.category.name}
									color={item.themeColor.hex}
									date={item.date}
									link={item.externalLink}
									slug={item.slug}
									image={item.image.url}
									target={item.externalLink ? true : false}
									title={item.title}
									topic={item.topic}
								/>
							))}
						</div>
					</div>
				</section>
			</div>
		);
	}
}

ServicesOverviewPage.propTypes = {
	contact: PropTypes.object,
	highlightedCasesTitle: PropTypes.string,
	highlightedCasesBody: PropTypes.string,
	highlightedCases: PropTypes.array,
	highlightedUpdatesTitle: PropTypes.string,
	highlightedUpdatesBody: PropTypes.string,
	highlightedUpdates: PropTypes.array,
};

export default ServicesOverviewPage;
