import React from 'react';
import x from './images/X.svg';
import v from './images/V.svg';
import './style.css';

const State = ({ getSignal }) => {
  const signal = getSignal ? v : x;
  return (
    <img src={signal} alt="" className='state' />
  );
}

export default State;