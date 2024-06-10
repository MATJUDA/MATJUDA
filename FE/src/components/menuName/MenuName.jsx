import React from 'react';
import './style.css';

const MenuName = ({ corner, menuName }) => {
  return (
    <div>
      <p className='corner' id='corner'>{corner}</p>
      <p className="menu_name">{menuName}</p>
    </div>
  );
}

export default MenuName;