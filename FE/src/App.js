// import logo from './logo.svg';
// import './App.css';
// import MenuCard from './components/menuCard/MenuCard';
// import MenuCardList from './components/menuCardList/MenuCardList';
// import Header from './components/header&footer/Header';
// import Footer from './components/header&footer/Footer';
// function App() {
//   return (
    
//     <div className="app-container">
//       <Header />
//       <main className="main-content">
//         <MenuCardList />
//       </main>
//       <Footer />
//     </div>
    
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';
import MenuCardList from './components/menuCardList/MenuCardList';
import Header from './components/header&footer/Header';
import Footer from './components/header&footer/Footer';

function App() {
  const [isHeaderImageClicked, setIsHeaderImageClicked] = useState(false);

  const handleHeaderImageClick = () => {
    setIsHeaderImageClicked(true);
  };

  return (
    <div className="app-container">
      <Header onImageClick={handleHeaderImageClick} isImageClicked={isHeaderImageClicked} />
      {isHeaderImageClicked && (
        <>
          <main className="main-content">
            <MenuCardList />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;