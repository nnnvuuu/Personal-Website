
import './blogs.css'
import { Divider } from '@material-ui/core';
import moment from 'moment';
import * as strapButton from 'react-bootstrap';
import {Modal,Form} from 'react-bootstrap';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import React, {Component,useState,useRef, useEffect, Fragment} from 'react';
import uuid from 'react-uuid';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './Posts.css';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import EditBlog from './editBlog';
import PostForm from '../postForm/postForm';
import MarkDownEditor from '../postForm/markdownEditor';
// import Article from './blogs';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));




 let randomColorArr = [
   "primary","secondary","success","warning","danger","light","outline-primary",
   "outline-secondary","outline-success","outline-warning","outline-danger","outline-info",
   ,"outline-dark"
  ];

//   let randomvariantArr = [
//     "primary","secondary","success","warning","danger","light","outline-primary",
//     "outline-secondary","outline-success","outline-warning","outline-danger","outline-info",
//     ,"outline-dark"
//    ];
 let currentPageSubTags =[];

 const HelperFunction =(props) => {
  return(
  props.map(
    post => 
    <div className = "postsCNfont post-list-items" key={post._id}>
          <div>
            <div>
            {   
             post.subTag.map(p => 
              <span key={post._id}>
             {/* { setCurrentSubTag(currentPageSubTags.push(p))} */}
              {currentPageSubTags.push(p)}
              </span>
             
              )
            }
              </div>
          </div>       
    </div>  

  )
    );
 }

 function MarkDownSpreadSign (props){
   return(
    console.log(props.markdown)
   );
 }


const Post =(props) => {
  const {isAuthenticated } =  props.auth;
  console.log(isAuthenticated);
      currentPageSubTags = [];
      HelperFunction(props.posts);
      const[postState, setPostState] = useState([]);
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const [newTitle, setNewTitle] = useState('');
      const [newSubTag, setNewSubTag] = useState('');
      const [newMarkDown, setNewMarkDown] = useState('');
      //const handleShow = () => setShow(true);

    //  const[t, sett] = useState([]);
     

      useEffect(()=>{
        // sett(posts);
        setPostState(props.posts);
      })


 const  handleDelete = (id) =>{
    console.log("deleting: "+id)
     axios.delete('/articles/'+id)
     .then(res => {
       console.log(res.data);
      //  axios.get('http://localhost:5000/articles/tag/leetcode')
      //  .then(res => {
      //    setPostState(res.data);
      //    console.log("W");
      //  })
     })
     .catch((error)=>{ 
       console.log(error);
     })
  }

  const handleEdit = (post) =>{
  
    setShow(true);
    setNewTitle(post.title);
    // setNewSubTag(post.subTag);
    setNewMarkDown(post.markdown);
   // console.log("w: "+post.title);
  }

  const handleNewTitle = (e) =>{
      setNewTitle(e.target.value);
      console.log(newTitle);
  }

  const handleNewMarkDown = (e) =>{
      setNewMarkDown(e.target.value);
  }

  const handleSubmit = (id,e) =>{
    e.preventDefault();

    const article = {
      title : newTitle,
      Markdown: newMarkDown,
    }
    // const id = e.target.value;
  
   
    
      axios.post('/articles/update/'+id,article)
      .then(res =>{
        console.log(res);
        console.log(res.data); })
        .catch((error) => {
          if (error.response) console.log(error.response);
          else if(error.request)  console.log(error.request);
          else if(error.message) console.log(error.message);
      })
      setShow(false);
  }


  const classes = useStyles();
      //console.log("im state:"+ postState);
     
return(
 
  postState.map(
    post => 
    <div className = "postsCNfont post-list-items" key={post._id}>
      <Link to={{
         pathname: '/postBodyContent', 
         state: { _id : post._id } 
         }}>
          <h3 className = "ml-1 title">{post.title}</h3>
        </Link>

        {
          
          isAuthenticated? 
          <Fragment>
           <Button
           variant="contained"
           color="secondary"
           className={classes.button}
           startIcon={<DeleteIcon />}
           onClick={()=> handleDelete(post._id)}
         >
           Delete
         </Button>
   
         <Button
           variant="contained"
           color="secondary"
           className={classes.button}
           startIcon={<EditIcon />}
           onClick={()=> handleEdit(post)}
         >
           Edit
         </Button>
         </Fragment>
          :null}
      
      
      


         {/* {console.log(post._id)} */}
          <span className="subTag">
          <div>
            <div>
            {   
             post.subTag.map(p => 
              <span key={uuid()}>
             <strapButton.Button className="ml-2" variant={randomColorArr[currentPageSubTags.indexOf(p)]}>
                {p}
              </strapButton.Button>
              </span>
             
              )
            }
              <span className="text-muted float-sm-right">
                <h6 >

              {moment(post.date).format('MMMM Do YYYY, h:mm:ss a')}
                </h6>
             </span>
              </div>    
          </div>
          </span>
       
          <div className="markdown"> 
          {post.markdown.substring(0,150) } 
          {/* <Link><p style={{display:"inline",letterSpacing:"0.2rem"}}>.....</p></Link> */}
          </div>
           <Divider />  
         

                 {/* Edit post Modal */}
                 <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
      >
        <Modal.Header closeButton  >
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Form>
             <Form.Group className="text-center">
               <Form.Label >New Title</Form.Label>
               <Form.Control  defaultValue={newTitle}  onChange = {handleNewTitle}/>

               <Form.Label className="mt-4 ">New Markdown</Form.Label>
               <Form.Control  defaultValue={newMarkDown}  onChange = {handleNewMarkDown}/>
             </Form.Group>
             <MarkDownEditor />
             
           </Form>
        <Modal.Body>

        </Modal.Body>


        <Modal.Footer >
          <strapButton.Button variant="secondary" onClick={handleClose}>
            Close
          </strapButton.Button >  
          <strapButton.Button onClick={(e)=>handleSubmit(post._id,e)} variant="primary">Submit</strapButton.Button >
          
        </Modal.Footer>
      </Modal>
    
    </div>  

  )
  
  
    
);
}
Post.propTypes = {
  auth: PropTypes.object.isRequired

}

const mapStateToProps = state  =>({
  auth: state.auth
});

export default connect(mapStateToProps,null)(Post); //,login

