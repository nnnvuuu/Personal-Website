import React from 'react';
import NavBar from '../NavBar/NavBar';
import Carousel from '../Carousels/Carousels';
import  '../NavBar/NavBar.css';
import Music from '../Music/Music';

const mainPage = () => {
  return (
    <div className="outerBox">
        <NavBar/>
        <Carousel/>
        {/* <Music/> */}
    </div>
  );
};

export default mainPage;