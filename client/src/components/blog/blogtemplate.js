//备份

import React, {Component,useState,useEffect} from 'react';
import { Route,Link} from "react-router-dom";
import { Container, Row, Col, 
   Button, Nav, NavDropdown,
   Navbar, Form, FormControl,Pagination } from 'react-bootstrap';
import { Divider } from '@material-ui/core';
import axios from 'axios';
import moment from 'moment';
import './blogs.css';
//************************************Pagination******************************\\





//*********************************************************************************\\
export default class Blog extends Component{
    constructor(props){
      super();
      this.state ={
        articles:[],
        postStatus:"Recently Post",
        postsCounter:0,
        paginationPages:1,
      };
      
    }
  


    onClickLeetcode = ()=>{
      axios.get('/articles/tag/leetcode')
      .then(res => {
        this.setState({
           articles : res.data, 
           postsCounter: res.data.length,
           postStatus:"刷题找工",
          });
      })
      .catch((error)=>{
        console.log(error);
      })

      //set random color to the subTags

    }

    onClickStudyRecord = ()=>{
      axios.get('/articles/tag/studyRecord')
      .then(res => {
        this.setState({
           articles : res.data,
           postsCounter: res.data.length,
           postStatus:"学习记录",
          });
        console.log(res.data);
      })
      .catch((error)=>{
        console.log(error);
      })
    }

    onClickProjectRelated = ()=>{
      axios.get('/articles/tag/projectRelated')
      .then(res => {
        this.setState({
           articles : res.data,
           postsCounter: res.data.length,
           postStatus:"项目相关",
           });
        console.log(res.data);
      })
      .catch((error)=>{
        console.log(error);
      })
    }

    onClickEnjoyLife = ()=>{
      axios.get('/articles/tag/enjoyLife')
      .then(res => {
        this.setState({
           articles : res.data,
           postsCounter: res.data.length,
           postStatus:"吃喝玩乐",
          });
        console.log(res.data);
      })
      .catch((error)=>{
        console.log(error);
      })
    }


    onClickDailyLife = ()=>{
      axios.get('/articles/tag/dailyLife')
      .then(res => {
        this.setState({
           articles : res.data,
           postsCounter: res.data.length,
           postStatus:"生活而已",
           });
        console.log(res.data);
      })
      .catch((error)=>{
        console.log(error);
      })
    }




    componentDidMount() {
      axios.get('/articles')
        .then(res => {
          this.setState({
             articles : res.data,
             postsCounter: res.data.length,
            });
          console.log(res.data);
        })
        .catch((error)=>{
          console.log(error);
        })
        
      
    }


  render(){
    console.log(this.state.postsCounter);
    return(
      <div className = "mt-4">
        {/* {this.postsCounter} */}
        <Link to = "/blog"/> 
        <Container className='tagButton'>
          <Row>
             <Col className = "md-auto">
               <Button variant="outline-dark" onClick={this.onClickLeetcode}>刷题找工</Button>
             </Col> 
             <Col className = "md-auto">
               <Button variant="outline-dark" onClick={this.onClickStudyRecord}>学习记录</Button>
             </Col> 
             <Col className = "md-auto">
               <Button variant="outline-dark" onClick={this.onClickProjectRelated}>项目相关</Button>
             </Col> 
             <Col className = "md-auto">
               <Button variant="outline-dark" onClick={this.onClickEnjoyLife}>吃喝玩乐</Button>
             </Col> 
             <Col className = "md-auto">
               <Button variant="outline-dark" onClick={this.onClickDailyLife}>生活而已</Button>
             </Col> 
           </Row>
        </Container>
      
        <hr className = "bg-dark"/>
       
        <Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link href="/home">Active</Nav.Link>
  <Nav.Link eventKey="link-1">Link</Nav.Link>
  <Nav.Link eventKey="link-2">Link</Nav.Link>
  <Nav.Link eventKey="disabled" disabled>
    Disabled
  </Nav.Link>
</Nav>
        {/* <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Welcome</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar> */}

<h3 className="text-center mt-3">{this.state.postStatus}</h3>

  



       
    <Container fluid>
       {/* <h2 class="text-center">
         {this.state.postStatus}
      </h2> */}

    <Row>
      <Col sm={2}  >
         <div className ="mt-4">
            <h1>hi</h1>
         </div>
      </Col>

      <Col sm={10} >
        <div className="mt-4"/>
        {this.state.articles.map(
          articles =>
          <div className = "postsCNfont post-list-items" key={articles._id}>
              <h3 className = "title">{articles.title}</h3>
                <span className="subTag">{articles.subTag}</span>
                <span className="text-muted float-sm-right">
                  <h6>
                    {moment(articles.date).format('MMMM Do YYYY, h:mm:ss a')}
                  </h6>
                 </span>
                <div className="markdown"> {articles.markdown}</div>
                 <Divider />  
          </div>  
        )
          }
          </Col>
       </Row>
       </Container>


        {/* <Container>
          <Row>
            <Col></Col>
          </Row>
        </Container> */}

     
        <h1>footer section</h1>
      </div>
    );
  }
}

