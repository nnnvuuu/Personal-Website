
import React, {Component,useState,useEffect} from 'react';
import { Container, Row, Col, 
   Button, Nav, NavDropdown,
   Navbar, Form, FormControl,Pagination} from 'react-bootstrap';
import axios from 'axios';
import Paginations from './Paginations';
import './blogs.css';
import Post from './Post';
import Footer from '../../footer/footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//************************************Pagination******************************\\
//get current posts



//*********************************************************************************\\
export default class Blog extends Component{
    constructor(props){
      super();
      this.state ={
        articles:[],
        postStatus:"Recently Post",
        currentPage:1,
        postsPerPage:6,
        totalPosts:0,
        _uniqueSubTags:[],
        currentSubTag:"",
        subTagCounter:[],

   
      };
    
     
      
    }
  
    componentDidMount() {
      this.onClickHome();
      this.onClickSortAscending();
    }

   

    onClickSortAscending = ()=>{
      axios.get('/articles/timeline/sortAscending')
      .then(res => {
        this.setState({
           articles : res.data,
           totalPosts: res.data.length,
           });
        console.log(res.data);
      })
      .catch((error)=>{
        console.log(error);
      })
    }

    onClickSortDescending = ()=>{
      axios.get('/articles/timeline/sortDescending')
      .then(res => {
        this.setState({
           articles : res.data,
           totalPosts: res.data.length,
           });
        console.log(res.data);
      })
      
      .catch((error)=>{
        console.log(error);
      })
    }

    
    onClickHome = () => {
      axios.get('/articles')
      .then(res => {
        this.setState({
           articles : res.data,
           totalPosts: res.data.length,
           postStatus:"Recently Post",
           currentPage:1,

          });
        console.log(res.data);
      })
      .catch((error)=>{
        console.log(error);
      })
    }


    onClickLeetcode = ()=>{
      let allSubTags =  axios.get('/articles/tag/leetcode');
      let uniqueSubTags = axios.get('/articles/tag/leetcode/uniqueSubTag');
  
      axios.all([allSubTags ,uniqueSubTags ])
      .then(axios.spread( (_allSubTags, _allUniqueSubTags)=> {
        this.setState({ 
             ///////////All leetcode subTags////////////////
               articles : _allSubTags.data, 
               totalPosts: _allSubTags.data.length,
               postStatus:"刷题找工",
             ///////////////////////////////////////////////

            ///////////unique leetcode subTags////////////////
            _uniqueSubTags : _allUniqueSubTags.data, 
            ///////////////////////////////////////////////
              })     
      }));

      // console.log(this.state._uniqueSubTags);
    }




    onClickStudyRecord = ()=>{
      let allSubTags =  axios.get('/articles/tag/studyRecord');
      let uniqueSubTags = axios.get('/articles/tag/studyRecord/uniqueSubTag');
  
      axios.all([allSubTags ,uniqueSubTags ])
      .then(axios.spread( (_allSubTags, _allUniqueSubTags)=> {
        this.setState({ 
             ///////////All leetcode subTags////////////////
               articles : _allSubTags.data, 
               totalPosts: _allSubTags.data.length,
               postStatus:"学习记录",
             ///////////////////////////////////////////////

            ///////////unique leetcode subTags////////////////
            _uniqueSubTags : _allUniqueSubTags.data, 
            ///////////////////////////////////////////////
              })     
      }));
    }


  onClickProjectRelated = ()=>{
    let allSubTags =  axios.get('/articles/tag/projectRelated');
    let uniqueSubTags = axios.get('/articles/tag/projectRelated/uniqueSubTag');
  
      axios.all([allSubTags ,uniqueSubTags ])
      .then(axios.spread( (_allSubTags, _allUniqueSubTags)=> {
        this.setState({ 
             ///////////All leetcode subTags////////////////
               articles : _allSubTags.data, 
               totalPosts: _allSubTags.data.length,
               postStatus:"项目相关",
             ///////////////////////////////////////////////

            ///////////unique leetcode subTags////////////////
            _uniqueSubTags : _allUniqueSubTags.data, 
            ///////////////////////////////////////////////
              })     
      }));
    }

    onClickEnjoyLife = ()=>{
    let allSubTags =  axios.get('/articles/tag/enjoyLife');
    let uniqueSubTags = axios.get('/articles/tag/enjoyLife/uniqueSubTag');
  
      axios.all([allSubTags ,uniqueSubTags ])
      .then(axios.spread( (_allSubTags, _allUniqueSubTags)=> {
        this.setState({ 
             ///////////All leetcode subTags////////////////
               articles : _allSubTags.data, 
               totalPosts: _allSubTags.data.length,
               postStatus:"吃喝玩乐",
             ///////////////////////////////////////////////

            ///////////unique leetcode subTags////////////////
            _uniqueSubTags : _allUniqueSubTags.data, 
            ///////////////////////////////////////////////
              })     
      }));
    }


    onClickDailyLife = ()=>{
      let allSubTags =  axios.get('/articles/tag/dailyLife');
      let uniqueSubTags = axios.get('/articles/tag/dailyLife/uniqueSubTag');
  
      axios.all([allSubTags ,uniqueSubTags ])
      .then(axios.spread( (_allSubTags, _allUniqueSubTags)=> {
        this.setState({ 
             ///////////All leetcode subTags////////////////
               articles : _allSubTags.data, 
               totalPosts: _allSubTags.data.length,
               postStatus:"生活而已",
             ///////////////////////////////////////////////

            ///////////unique leetcode subTags////////////////
            _uniqueSubTags : _allUniqueSubTags.data, 
            ///////////////////////////////////////////////
            
              })     
      }));
      
    }

    // onClickUniqueSubTags = () =>{
    //   console.log(this.currentSubTag);
    // }


    filterSubTag = (currentSubTag) =>{
      
          
        axios.get('/articles/filterSubTag',{
          params: {
            targetSubTag:currentSubTag,
          }})
       .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({
          articles:res.data,
          totalPosts:res.data.length
        })
       })
        .catch((error) => {
          if (error.response) console.log(error.response);
          else if(error.request)  console.log(error.request);
          else if(error.message) console.log(error.message);
        });
   
    }

    

    selectSubTag = (e) =>{
      // console.log('we did it ' + e);
      e.preventDefault();
      this.filterSubTag(e.target.value);
    
    }
    
//没有完成，这里是要给tag 下拉栏里的数据都加上各自的count 比如arraylist 【6】 ...[..] 这样 以后技术有了就写

    // subTagCount = () =>{
    //   const targetSubTag =  this.state._uniqueSubTags
      
    //   axios.get('http://localhost:5000/articles/tag/uniqueSubTag/counter', {
    //     params:{
    //       targetSubTag: this.state._uniqueSubTags
    //     }
    //   })
    //  .then(res => {
    //   console.log(res);
    //   console.log(res.data);
    //  })
    //   .catch((error) => {
    //     if (error.response) console.log(error.response);
    //     else if(error.request)  console.log(error.request);
    //     else if(error.message) console.log(error.message);
    //   });
   
    // }


    handleSubTags = () =>{

    
      return(
        <NavDropdown title="Tags" id="basic-nav-dropdown" >
        {
      this.state._uniqueSubTags.map((uniqueSubTag,index)=>  
          
         
         <NavDropdown.Item  key={index}>
         
              <Button 
              value={uniqueSubTag} 
              onClick={this.selectSubTag}
              variant="outline-dark" 
              block
               >
                  {uniqueSubTag}
            
             </Button> 
        
          </NavDropdown.Item >
       )
        }
       </NavDropdown>
      )

    }

   
    
  render(){
    //Get current posts
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPost = this.state.articles.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => this.setState({
      currentPage: pageNumber
    })

 

    return(
      <div className = "mt-4">
      
        <Link to = "/blog"/> 
        <Container className='tagButton'>
          <Row>
             <Col className = "md-auto">
               <Button variant="outline-dark"  onClick={this.onClickLeetcode}>刷题找工</Button>
             </Col> 
             <Col className = "md-auto">
               <Button variant="outline-dark"onClick={this.onClickStudyRecord}>学习记录</Button>
             </Col> 
             <Col className = "md-auto">
               <Button variant="outline-dark"  onClick={this.onClickProjectRelated}>项目相关</Button>
             </Col> 
             <Col className = "md-auto">
               <Button variant="outline-dark"  onClick={this.onClickEnjoyLife}>吃喝玩乐</Button>
             </Col> 
             <Col className = "md-auto">
               <Button variant="outline-dark"  onClick={this.onClickDailyLife}>生活而已</Button>
             </Col> 
           </Row>
           
        </Container>
      
        <hr className = "bg-dark"/>
       
    


       
    <Container  >
    <Row>
      <Col xs= {12} sm={12}  md={12} lg={12}>
      <Navbar bg="light" expand="lg">
    <img src="https://vignette.wikia.nocookie.net/vocaloid/images/1/18/Neru_icon.jpg/revision/latest?cb=20180613022348" className="mr-3 rounded .img-fluid"  alt=""/>
  <Navbar.Brand href="#"><h2>{this.state.postStatus}</h2></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link onClick={this.onClickHome}>Home</Nav.Link>
      <NavDropdown title="Timeline" id="basic-nav-dropdown">
        <NavDropdown.Item  onClick={this.onClickSortAscending}>Sort Neweast</NavDropdown.Item>
        <NavDropdown.Item  onClick={this.onClickSortDescending}>Sort Oldest</NavDropdown.Item>
      </NavDropdown>
          <this.handleSubTags />
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

      </Col>
      <Col  >
        <div className="mt-4"/>
         <Post posts={currentPost} />
          </Col>
       </Row>
       </Container>
    
      <Paginations 
        postsPerPage={this.state.postsPerPage} 
        totalPosts = {this.state.totalPosts}
        paginate ={paginate}
        currentPage = {this.state.currentPage}
      />
       
          <Footer/>

      </div>
    );
  }
  
}




