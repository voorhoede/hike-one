import React from 'react'
import Facebook   from '../icons/facebook-circle';
import Twitter     from '../icons/twitter-circle';
import LinkedIn   from '../icons/linkedin-circle';

const SocialShare = ({facebookLink='', linkedinLink='', twitterLink=''}) => (
  <div className="social-share">
    <a href={facebookLink} className="social-share-item" target="_blank"><Facebook color="facebook-blue" /></a>
    <a href={twitterLink} className="social-share-item" target="_blank"><Twitter color="twitter-blue" /></a>
    <a href={linkedinLink} className="social-share-item" target="_blank"><LinkedIn color="linkedin-blue" /></a>
  </div>
);

export default SocialShare;
