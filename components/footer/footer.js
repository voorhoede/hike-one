import React from 'react';
import Link from 'next/link';

import Logo from '../logo/logo';
import FooterLocations from '../footer-locations/footer-locations';
import SocialMedia from '../social-media/social-media';
import Icon from '../icon/icon';

class Footer extends React.Component {
  constructor() {
    super();
    this.ticking = false;
    this.onResize = this.onResize.bind(this);
    this.setFixedState = this.setFixedState.bind(this);
  }

  componentDidMount() {
    const { disableParallax } = this.props;
    this.mainContainer = document.querySelector('.js-main');

    if (typeof window.requestAnimationFrame !== 'undefined' && this.mainContainer && !disableParallax) {
      this.footerHeight = this.footer.getBoundingClientRect().height;
      this.setFixedState();
      window.addEventListener('resize', this.onResize);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  setFixedState() {
    if (window.innerHeight > this.footerHeight) {
      this.footer.classList.add('is-fixed');
      this.mainContainer.style.paddingBottom = `${this.footerHeight}px`;
    } else {
      this.footer.classList.remove('is-fixed');
      this.mainContainer.style.paddingBottom = `0px`;
    }
  }

  onResize() {
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.setFixedState();
        this.ticking = false;
      });
    }

    this.ticking = true;
  }

  render() {
    const { callToActionUrl, callToActionLabel } = this.props;
    return (
      <footer ref={node => this.footer = node} className="footer">
        <div className="container-inner">
          <Link href="/">
            <a className="footer-logo">
              <Logo color="white"/>
              <h1 className="a11y-sr-only">Hike one</h1>
            </a>
          </Link>

          <div className="footer-main-content">
            <div className="footer-left">
              <div className="footer-links">
                <ul className="footer-link-list">
                  <li><Link href="/team?slug=culture"
                        as="/team/culture">
                    <a>Team</a></Link>
                  </li>
                  <li><Link href='/service?slug=new-product-design'
                        as="/service/new-product-design">
                    <a>Services</a></Link>
                  </li>
                  <li><Link href="/work"><a>Work</a></Link></li>
                  <li><Link href="/contact"><a>Contact</a></Link></li>
                  <li><Link href="/updates"><a>Updates</a></Link></li>
                </ul>
              </div>
              <a className="footer-join-link" href={ callToActionUrl } target="_blank">
                { callToActionLabel } <Icon icon="arrowRightCircle" />
              </a>
            </div>

            <div className="footer-right">
              <div className="footer-contact">
                <a href="tel:+31-202044577" className="footer-contact-tel">+31 20 204 45 77</a>
                <a href="mailto:hello@hike.one" className="footer-contact-email">hello@hike.one</a>
              </div>

              <FooterLocations />
              <SocialMedia />
            </div>
          </div>

          <p className="footer-copyright">@ Hike One 2017</p>
          <a className="footer-copyright" href="/static/root/hike-one-privacy-statement-en.pdf">privacy statement</a>
          <a className="footer-copyright" href="/static/root/hike-one-cookie-statement-nl.pdf">cookie statement</a>
        </div>
        <script dangerouslySetInnerHTML={{__html: '_linkedin_partner_id = "361124"; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push(_linkedin_partner_id);' }}></script>
        <script dangerouslySetInnerHTML={{__html: '(function(){var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript";b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s);})();'}}></script>
        <noscript><img height="1" width="1" style={{ display: 'none' }} alt="img" src="https://dc.ads.linkedin.com/collect/?pid=361124&fmt=gif" /></noscript>
      </footer>
    );
  }
}

export default Footer;
