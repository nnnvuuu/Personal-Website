import React, {Component} from 'react';
import uuid from 'react-uuid'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Form, Button, Col, Row, Badge} from 'react-bootstrap';
import MarkdownEditor from './markdownEditor';
import MDEditor from '@uiw/react-md-editor';

// import {FormGroup,Label,Input} from 'reactstrap';


const Title = {
  width: '200px',
  margin: 'auto',
  border: '1px solid red',
  borderRadius: '10px',
  backgroundColor: '#f8f8f8',
}
const textCenter = {
  width:"100%",
  marginTop:'30px',
}


const Tag = {
  width: '110px',
  margin: 'auto',
  border: '1px solid red',
  borderRadius: '10px',
  backgroundColor: '#f8f8f8',
}

const Markdown = {
  width: '80%',
  margin: 'auto',
  border: '1px solid red',
  borderRadius: '10px',
  backgroundColor: '#f8f8f8',
}

const subtag ={
  width: '8rem',
  margin: 'auto',
  border: '1px solid red',
  borderRadius: '10px',
  backgroundColor: '#f8f8f8',
}

export default class PostFrom extends Component{
  constructor(props){
    super(props);
  
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onSelectedTag = this.onSelectedTag.bind(this);
    this.onChangeSubTag = this.onChangeSubTag.bind(this);
    this.onChangeMarkdown = this.onChangeMarkdown.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.onSelectSubTag=this.onSelectSubTag.bind(this);
    this.onClickSubTag = this.onClickSubTag.bind(this);


  this.state = {
    title: '',
    tag:'',
    markdown:'',
    subTag:[],
    date: new Date(),
    posts:[],
    selectedSubTag:'',
    uniqueSubTags:[],
    currentTag:'',
    currentsubTag:'',
  }
}

  mapOverSubTags = () => {
  
    return(
      this.state.uniqueSubTags.map((uniqueSubTag,index)=>      
      <option  key={index} value={uniqueSubTag}>{uniqueSubTag}</option>
    )
    );
   
    }
    
    onClickSubTag(){
      this.setState({
        subTag: [...this.state.subTag,this.state.currentsubTag]
      })
    }


  onChangeTitle (e) {
    this.setState({
       title: e.target.value,
      });
      
  }

  onSelectedTag (e)  {
      if(e.target.value =="刷题找工"){
        axios.get('/articles/tag/leetcode')
        .then(res => {
          this.setState({
             posts:res.data,
             currentTag:"刷题找工"
            });
        })
        .catch((error)=>{
          console.log(error);
        })
        

      }  


      else if(e.target.value =="学习记录"){
        axios.get('/articles/tag/studyRecord')
        .then(res => {
          this.setState({
             posts:res.data,
             currentTag:"学习记录"
            });
          console.log(res.data);
        })
        .catch((error)=>{
          console.log(error);
        })
       
      }   

      
      else if(e.target.value =="项目相关"){
        axios.get('/articles/tag/projectRelated')
        .then(res => {
          this.setState({
             posts:res.data,
             currentTag:"项目相关"
            });
          console.log(res.data);
        })
        .catch((error)=>{
          console.log(error);
        })
       
      }   

      else if(e.target.value =="吃喝玩乐"){
        axios.get('/articles/tag/enjoyLife')
        .then(res => {
          this.setState({
             posts:res.data,
             currentTag:"吃喝玩乐"
            });
          console.log(res.data);
        })
        .catch((error)=>{
          console.log(error);
        })
       
      }  

     else if(e.target.value =="生活而已") {
        axios.get('/articles/tag/dailyLife')
        .then(res => {
          this.setState({
             posts:res.data,
             currentTag:"生活而已"
            });
          console.log(res.data);
        })
        .catch((error)=>{
          console.log(error);
        })
      }   
 
      this.setState({
        tag:e.target.value,
      });
    
     
  }
  onChangeSubTag (e) {

    if(this.state.currentTag == "刷题找工"){
      axios.get('/articles/tag/leetcode/uniqueSubTag')
      .then(res=>{
        this.setState({
          uniqueSubTags:res.data,
        });
        console.log(res.data);
      })
      .catch((error)=>{
        console.log(error);
      })
      console.log(this.state.uniqueSubTags);
    }



    else if(this.state.currentTag == "学习记录"){

    axios.get('/articles/tag/studyRecord/uniqueSubTag')
    .then(res=>{
      this.setState({
        uniqueSubTags:res.data,
      });
      console.log(res.data);
    })
    .catch((error)=>{
      console.log(error);
    })

  }

  else if(this.state.currentTag == "项目相关"){
    axios.get('/articles/tag/projectRelated/uniqueSubTag')
    .then(res=>{
      this.setState({
        uniqueSubTags:res.data,
      });
      console.log(res.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  }


  else if(this.state.currentTag == "吃喝玩乐"){

    axios.get('/articles/tag/enjoyLife/uniqueSubTag')
        .then(res=>{
          this.setState({
            uniqueSubTags:res.data,
          });
          console.log(res.data);
        })
        .catch((error)=>{
          console.log(error);
        })

  }


  else if(this.state.currentTag == "生活而已"){

    axios.get('/articles/tag/studyRecord/uniqueSubTag')
    .then(res=>{
      this.setState({
        uniqueSubTags:res.data,
      });
      console.log(res.data);
    })
    .catch((error)=>{
      console.log(error);
    })

  }

  this.setState({
    currentsubTag:  e.target.value
   });
  }

  onSelectSubTag (e) {
    this.setState({
      subTag: e.target.value,
     });
  }

  onChangeMarkdown(e)  {
    this.setState({
       markdown: e.target.value,
      });
   
  }

  onChangeDate(date){
    this.setState({
      date: date,
    });
  }

  onSubmit (e)  {
    e.preventDefault();
    const article = {
      title: this.state.title,
      tag: this.state.tag,
      markdown: this.state.markdown,
      subTag: this.state.subTag,
      date: this.state.date,
    };

    // console.log(article);


    axios.post('/articles/add', article)
     .then(res => {
      console.log(res);
      console.log(res.data); })
      .catch((error) => {
        if (error.response) console.log(error.response);
        else if(error.request)  console.log(error.request);
        else if(error.message) console.log(error.message);
      });
      window.location = '/blog';
  }


  render(){
    
     
  //  const zz= this.state.subTag.map(post => 
  //     <div>
        
  //   { console.log(post)}
        
  //     </div>
  //    )
    
    
     
    return(
      <div>

      <Form onSubmit = {this.onSubmit}>
      <h1 className="text-center">Blog Post</h1>
      <hr />
      <Form.Group role="form" controlId="formTitle">
         <Form.Label className="text-center" style={textCenter}>
           <h2><Badge variant="secondary">Title</Badge></h2>
         </Form.Label>
         <Form.Control 
          required
          onChange={this.onChangeTitle}
          as="textarea"
          rows="1" 
          style = {Title}
          type="text"/>
      </Form.Group >   
        <br/>
      <Form.Group role="form" controlId="formTag">
         <Form.Label className="text-center" style={textCenter}>
           <h2><Badge variant="secondary">Tag</Badge></h2>
         </Form.Label>
         <Form.Control
          required
          onChange={this.onSelectedTag}
           as="select"
           rows="1" 
           style = {Tag}
           defaultValue="Choose..."
           type="text">
           <option value="selected">Choose...</option>
           <option value="刷题找工">刷题找工</option>
           <option value="学习记录">学习记录</option>
           <option value="项目相关">项目相关</option>
           <option value="吃喝玩乐">吃喝玩乐</option>
           <option value="生活而已">生活而已</option>
           </Form.Control>  
       </Form.Group>  
        <br/>
    <Row>
      <Col md={6}>
       <label 
       className="text-center" style={textCenter}><h2><Badge variant="secondary">Existing Sub Tag</Badge></h2></label>
       <select  
       className="form-control "
       rows="1" 
       onClick={this.onChangeSubTag}
       onChange={this.onSelectSubTag}
       style = {Tag}
      >
       
       <option defaultValue="Choose...">Choose...</option>
        <this.mapOverSubTags />
        
        </select>
      

        </Col>

        <Col md={6}>
    
      <Form.Label className="text-center " style={textCenter}>
         <h2><Badge variant="secondary">Add Sub Tag</Badge></h2>
      </Form.Label>
       <Form.Group role="form" controlId="formSubTag" >
         <Form.Control 
          onChange={this.onChangeSubTag}
          as="textarea"
          rows="1" 
          style = {subtag}
          type="text"/>
      </Form.Group >  
      <div className="text-center">
      <Button variant = "dark" type="submit" onClick={this.onClickSubTag}> 
           Confirm
      </Button>
      </div>
     
      </Col>
   </Row>
   <br/>

      <MarkdownEditor/>

      <br/>
       <Form.Group role="form" controlId="formMarkDown">
          <Form.Label className="text-center" style={textCenter}>
           <h2><Badge variant="secondary">MarkDown</Badge></h2>
          </Form.Label>
          <Form.Control 
          required
          onChange={this.onChangeMarkdown} 
          as="textarea" 
          rows="20" 
          style = {Markdown}
          type="text"/>
      </Form.Group>  
          
        <br/>
      <div className = "row justify-content-center mb-5" >
         <DatePicker 
            selected = {this.state.date}
            onChange = {this.onChangeDate}
            showTimeSelect
            timeIntervals
            dateFormat="Pp"
         />    
      </div>
      
        
        <Form.Group className = "text-center">
           <Button type = "submit" variant="dark" size = "lg" >Submit</Button>
        </Form.Group>
        <br/>

       
    </Form> 
    </div>
    )
      
  }

     
}


