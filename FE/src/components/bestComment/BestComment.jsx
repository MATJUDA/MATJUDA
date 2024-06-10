import React from 'react';
import './style.css';

const BestComment = ({ bestComment }) => {
  return (
    <div className='comment_frame'>
      <h2 className='commentTitle'>베스트 댓글</h2>
      <p className='bestComment'>{bestComment}</p>
    </div>
  );
}

export default BestComment;