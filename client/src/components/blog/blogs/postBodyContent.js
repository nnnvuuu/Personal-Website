import React, {Component} from 'react';
import axios from 'axios';
import MDEditor from '@uiw/react-md-editor';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import Footer from '../../footer/footer';
import Love from '../../footer/images/love.png';
import Image from 'react-bootstrap/Image';
import MainNavBar from '../../NavBar/MainNavBar';
import Music from '../../Music/Music';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class PostBodyContent extends Component{
   constructor(){
     super();

     this.state={
      articles:[],
      // value:"",
      tag:"",
     }
   }


  componentDidMount(){
  const {_id} = this.props.location.state;
  axios.get("/articles/"+_id)
  .then(res => {
      this.setState({
        articles:res.data,
        tag:res.data.tag
      })
      console.log("The User Click on this Post of ID =  " + res.data._id);
  })
    .catch((error)=>{
      console.log(error); 
    })
  }


    render(){
    
      return(
        <div>
        <MainNavBar/>
        <Music/>
        <div className="container mt-4  "  >
              <h1 className="text-center">{this.state.articles.title}</h1>
              <hr/>
            
        <MDEditor.Markdown 
      
        source={
          // "#  Markdown Editor for React"
          this.state.articles.markdown
          
        }
      
          />
     
    
      </div>  
      {/* <Footer/> */}
      {/* <Router>
        <Link to="刷题找工">hi</Link>
      </Router> */}
      </div>
      
        
      );
      
    }




}



export default PostBodyContent;