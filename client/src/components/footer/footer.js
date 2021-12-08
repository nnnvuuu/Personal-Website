import React, {useState,useEffect} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Github from './../footer/images/github.png';
import WeChat from './../footer/images/weChat.png';
import Twitter from './../footer/images/Twitter.png';
import Linkedin from './../footer/images/Linkedin.png';
import Bilibili from './../footer/images/bilibili.png';
import Coffee from './../footer/images/coffee.png';
import Cat from './../footer/images/cat.png';
import Love from './../footer/images/love.png';
import Cry from './../footer/images/Cry.png';
import Music from './../footer/images/music.png';
import Plus from './../footer/images/plus.png';
import Google from  './../footer/images/google.png';
import Equal from  './../footer/images/equal.png';
// import {Button} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import  './footer.css';
import {Link} from 'react-router-dom';


 function Copyright (){
  return (
  <div>
    <p className="copyright">
      {'Copyright © '}
      {/* <Link color="inherit" href="nnnvuuu">
        nnnvuuu
      </Link>{' '} */}
      {new Date().getFullYear()}
      {'. '}
      
           All Rights Reserved
        
    </p>
    
    </div>
  );
}


const footer =() => {
  return(

    <Container fluid className="outerContainer mt-5"> 
       <Row >
            <Col xs ={1} sm = {1} md={3}  />
            
            <Col xs ={2} sm = {2} md={1}  >
              <a className={"buttonPosition"}>
                   <Image src ={Github} className={"imageSize"} alt="GithubIcon" />
                </a>
            </Col >
            
            <Col xs ={2} sm = {2}  md={1}>
            <a className={"buttonPosition"}><Image src ={Linkedin} className={"imageSize"} alt="LinkedinIcon"  /></a>
            </Col>

            <Col xs ={2} sm = {2}  md={1}>  
            <a className={"buttonPosition"}><Image src ={WeChat} className={"imageSize"} alt="weChatIcon"  /></a>
            </Col >
            
            <Col xs ={2} sm = {2}  md={1}>
            <a className={"buttonPosition"}><Image src ={Bilibili} className={"imageSize"} alt="BilibiliIcon"  /></a>
             </Col>

            <Col xs ={2} sm = {2}  md={1}>
            <a className={"buttonPosition"}><Image src ={Twitter} className={"imageSize"} alt="TwitterIcon"  /></a>
            </Col>

            <Col xs ={1} sm = {1}  md={3}/>
            
       </Row>
          <hr className = "footerHr"/>
          
        <h5 className="footerWords">
        我喜欢我的懦弱，痛苦和难堪也喜欢。喜欢夏天的光照，风的气息，蝉的鸣叫，喜欢这些，喜欢得不得了。
      <div>
        <Image className = {"builtByImages"} src = {Coffee}/>
        <Image className = {"plus"} src  ={Plus}/>
        <Image className = {"builtByImages"} src = {Music}/>
        <Image className = {"plus"} src  ={Plus}/>
        <Image className = {"builtByImages"} src = {Cat}/>
        <Image className = {"plus"} src  ={Plus}/>
        <Image className = {"builtByImages"} src = {Google}/>
        <Image className = {"plus"} src  ={Plus}/>
        <Image className = {"builtByImages"} src = {Cry}/>
        <Image className = {"plus"} src  ={Equal}/>
        <Image className = {"builtByImages"} src = {Love}/>
      </div>
        </h5>


        <Copyright />
  
    </Container>
       
  );

    

}

export default footer;