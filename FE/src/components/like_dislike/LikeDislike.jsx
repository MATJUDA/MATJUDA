import React, { useState } from 'react';
import './style.css';
import thumbDown from './images/thumb-down.svg';
import thumbUp from './images/thumb-up.svg';

const LikeDislike = ({ downRate, upRate, onLike, onDislike }) => {
  const [hasClicked, setHasClicked] = useState(false);

  const handleLike = () => {
    if (!hasClicked) {
      alert('좋아요!');
      onLike();
      setHasClicked(true);
    }
  };

  const handleDislike = () => {
    if (!hasClicked) {
      alert('아쉬워요!');
      onDislike();
      setHasClicked(true);
    }
  };

  return (
    <div className="rate">
      <div className="item">
        <button onClick={handleDislike} disabled={hasClicked}>
          <img src={thumbDown} alt="Thumb Down" />
          <p>{downRate}</p>
        </button>
      </div>
      <div className="item">
        <button onClick={handleLike} disabled={hasClicked}>
          <img src={thumbUp} alt="Thumb Up" />
          <p>{upRate}</p>
        </button>
      </div>
    </div>
  );
};

export default LikeDislike;
