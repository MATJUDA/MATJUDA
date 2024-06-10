import React from 'react';
import noPicture from "./images/noPicture.svg";
import './style.css';

const Picture = ({ url }) => {
  const isPlaceholder = url.startsWith('https://via.placeholder.com/');
  const displayUrl = isPlaceholder ? noPicture : url;

  return (
    <div>
      <img src={url} alt="" className='food_picture' />
      {isPlaceholder && <img src={displayUrl} alt="" className='no_picture' />}
    </div>
  );
}

export default Picture;
