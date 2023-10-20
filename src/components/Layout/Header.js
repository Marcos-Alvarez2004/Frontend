import React from 'react';
import "../../styles/components/layout/Header.css"

const Header = (props) => {
  return (
    <header>
      <div className='holder'>
        <div>
          <img src="./images/logo.jpg" alt="Transportes X" width="100" />
          <h1>Transportes X</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;