import React from 'react';
import {Carousel,Image} from 'react-bootstrap';
import { Typography } from '@material-ui/core';
import { withStyles,makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import p1 from '../MainPage/images/p1.png';
import p2 from '../MainPage/images/p2.jpg';
import p3 from '../MainPage/images/p3.jpg';
import p4 from '../MainPage/images/p4.png';
import p5 from '../MainPage/images/p5.png';
import '../NavBar/NavBar.css';
import styled from "styled-components";
import { letterSpacing } from '@material-ui/system';
import './Carousels.css';

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);



const Carousels = () => {

  return (
    <div>
      <Box mt={3}>
 
        <Carousel
         indicators={false} 
        //  prevIcon={<span className="carousel-control-prev-icon"

      
        //   />}
        className="carousels"
          >
         <Carousel.Item >
           <img
             className="d-block  mx-auto carouselItems "
            //  style={{height:"500px",width:"70%", position: "relative"}}
             src={p1}
             alt="First slide"
           />
    
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="d-block  mx-auto carouselItems"
            //  style={{height:"500px",width:"70%", position: "relative"}}
             src={p2}
             alt="Second slide"
           />
       
        
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="d-block  mx-auto carouselItems"
            //  style={{height:"500px",width:"70%", position: "relative"}}
             src={p3}
             alt="Third slide"
           />
       
         </Carousel.Item>
      
       </Carousel>
      
    </Box>
    <hr className="hrMainPage"/>
      <div className=" text-center">
        <Image src={p4} className="powapowaImage  "/>
        <Image src={p5} className="wowakaImage "/>
       
      </div>
      {/* <WhiteTextTypography 
      style={{
      fontFamily:"Zhi Mang Xing", 
      marginTop:"0.4em",
      letterSpacing:"0.2em"
      }}
      variant="h1" 
      align='center'
      >
      衣不如新  人不如旧
      </WhiteTextTypography> */}
      <h1 className="words text-center" >  衣不如新  人不如旧 </h1>
    </div>  


  );
};

export default Carousels;