import { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Logo from '../logo/logo';
import MailchimpForm from '../mailchimp/mailchimp-form';
import SocialMedia from '../social-media/social-media';

class Footer extends Component {
	constructor(props) {
		super(props);
		this.currentYear = new Date().getFullYear();
	}

	render() {
		const { form } = this.props;

		return (
			<footer ref={node => (this.footer = node)} className="footer">
				<div className="container-inner">
					<Link href="/">
						<a className="footer-logo">
							<Logo color="white" />
							<h1 className="a11y-sr-only">Hike one</h1>
						</a>
					</Link>

					<div className="footer-main-content">
						<div className="footer-left">
							<div className="footer-links">
								<ul className="footer-link-list">
									<li>
										<Link href="/services-overview" as="/services">
											<a>Services</a>
										</Link>
									</li>
									<li>
										<Link href="/work">
											<a>Work</a>
										</Link>
									</li>
									<li>
										<Link href="/updates">
											<a>Updates</a>
										</Link>
									</li>
									<li>
										<Link href="/team?slug=culture" as="/team/culture">
											<a>Team</a>
										</Link>
									</li>
									<li>
										<Link href="/contact">
											<a>Contact</a>
										</Link>
									</li>
									<li>
										<a href="https://hikeone.homerun.co/" target="_blank">
											Jobs
										</a>
									</li>
								</ul>
							</div>
							<MailchimpForm
								title={form.title}
								description={form.description}
								listId={form.listId}
								buttonLabel={form.button}
								inputFields={form.extraInputFields}
								hasShadow={form.hasShadow}
							/>
						</div>

						<div className="footer-right">
							<div className="footer-contact">
								<h3>Get in touch</h3>
								<a href="mailto:hello@hike.one" className="footer-contact-email">
									hello@hike.one
								</a>
								<a href="tel:+31-202044577" className="footer-contact-tel">
									+31 20 204 45 77
								</a>
							</div>
							<SocialMedia />
							<div className="footer-links">
								<h3>Our offices</h3>
								<ul className="footer-link-list">
									<li>
										<Link
											href="/topic?slug=digital-designers-in-amsterdam"
											as="/topic/digital-designers-in-amsterdam"
										>
											<a>Amsterdam</a>
										</Link>
									</li>
									<li>
										<Link
											href="/topic?slug=digital-designers-in-rotterdam"
											as="/topic/digital-designers-in-rotterdam"
										>
											<a>Rotterdam</a>
										</Link>
									</li>
									<li>
										<Link
											href="/topic?slug=digital-designers-in-eindhoven"
											as="/topic/digital-designers-in-eindhoven"
										>
											<a>Eindhoven</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<p className="footer-copyright">&copy; Hike One {this.currentYear}</p>
					<a className="footer-copyright" href="/topic/privacy-statement">
						privacy statement
					</a>
					<a className="footer-copyright" href="/topic/cookie-policy">
						cookie policy
					</a>
				</div>
			</footer>
		);
	}
}

Footer.propTypes = {
	form: PropTypes.object,
};

export default Footer;
