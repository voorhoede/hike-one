import React from 'react'
import Icon from '../icon/icon';
import Link from 'next/link';

const ImageFeed = ({socialImagesInstagram, socialImagesDribble, linkDribble, linkInstagram}) => (
  <div className="image-feed-container">
    <Link href={linkDribble}>
      <a>
        <div className="image-feed">
          <div className="image-feed-image">
            <img src={socialImagesInstagram} alt=""/>
          </div>
          <div className="image-feed-icon">
            <Icon icon="instagram" classes="icon" />
          </div>
        </div>
      </a>
    </Link>
    <Link href={linkInstagram}>
      <a>
        <div className="image-feed">
          <div className="image-feed-image">
            <img src={socialImagesDribble} alt=""/>
          </div>
          <div className="image-feed-icon">
            <Icon icon="dribble" classes="icon" />
          </div>
        </div>
      </a>
    </Link>
  </div>
);

export default ImageFeed;
