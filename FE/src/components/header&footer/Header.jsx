// import React, { useState } from 'react';
// import './header.css';

// const Header = () => {
//   const [isDisabled, setIsDisabled] = useState(false);

//   const handleImageClick = () => {
//     setIsDisabled(true);
//   };

//   return (
//     <>
//       {!isDisabled && (
//         <div className="App">
//           <header className="App-header">
//             <img 
//               src="https://capsule-render.vercel.app/api?type=venom&height=300&color=gradient&text=&stroke=２１３２１００&fontColor=fffffff" 
//               alt="Header"
//               onClick={handleImageClick}
//             />
//             <span>오늘의 식당<br/></span>
//           </header>
//         </div>
//       )}
//       {isDisabled && (
//         <header className="header">
//           <h1 className="header-title">오늘의 식당</h1>
//           <div className="header-subtitle">
//             <span>MATJUDA</span>
//           </div>
//         </header>
//       )}
//     </>
//   );
// }

// export default Header;
import React from 'react';
import './header.css';

const Header = ({ onImageClick, isImageClicked }) => {
  return (
    <>
      {!isImageClicked && (
        <div className="App">
          <header className="App-header">
            <img 
              src="https://capsule-render.vercel.app/api?type=venom&height=300&color=gradient&text=&stroke=２１３２１００&fontColor=fffffff" 
              alt="Header"
              onClick={onImageClick}
            />
            <span>오늘의 식당</span>
          </header>
        </div>
      )}
      {isImageClicked && (
        <header className="header">
          <h1 className="header-title">오늘의 식당</h1>
          <div className="header-subtitle">
            <span>MATJUDA</span>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;