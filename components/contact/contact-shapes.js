import React from 'react'
import Parallax from '../parallax/parallax';
import Triangle from '../shapes/triangle/triangle';

export const variation1Front = () => {
  return (
    <div className="contact-shapes">
      <Parallax speed="1.25" >
        <Triangle classes="shape-triangle-2" color="red" />
        <Triangle classes="shape-triangle-4" color="yellow" />
      </Parallax>
      <Parallax speed="1.5">
        <Triangle classes="shape-triangle-1" color="blue" />
        <Triangle classes="shape-triangle-3" color="purple" />
      </Parallax>
    </div>
  );
};
