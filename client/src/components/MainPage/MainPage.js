import React from 'react';
import NavBar from '../NavBar/NavBar';
import Carousel from '../Carousels/Carousels';
import  '../NavBar/NavBar.css';

const MainPage = () => {
  return (
    <div className="outerBox">
        <NavBar/>
        <Carousel/>
    </div>
  );
};

export default MainPage;