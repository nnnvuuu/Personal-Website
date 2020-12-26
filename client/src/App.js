import React, { Component,Fragment } from 'react';

import './index.css';
import NavBar from './components/NavBar/NavBar';
// import Blogs from '/components/blog/blogs';
import LoginPage from './components/LoginPage/LoginPage';
import PostForm from './components/blog/postForm/postForm';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from 'react-router-dom';
import PostBodyContent from './components/blog/blogs/postBodyContent';
import {
  Switch,
  Route,
} from "react-router-dom";
import Blog from './components/blog/blogs/blogs';
import {Provider} from 'react-redux';
import store from './redux/stores/store';
import { loadUser } from './redux/actions/authAction';
import Posts from './components/blog/blogs/Post';
import MainPage from './components/MainPage/MainPage';
import MainNavBar from './components/NavBar/MainNavBar';
import Music from './components/Music/Music';
class App extends Component{

  componentDidMount(){
    store.dispatch(loadUser());
    
}

  render() {
    return (
      <Fragment>
         <Provider store = {store}>
        <BrowserRouter>
          <Switch>
            <Route path = "/" exact component = {MainPage}/> 
         

            <Route path="/home" exact component = {MainPage}/>
         

             <Route  path="/postArticles" render={ props=>
                 <div>
                 <MainNavBar />
                <PostForm/>
                   <Music/>
                 </div>
               } />  
              
           

              <Route path="/blog" render={ props=>
              <div>
                <MainNavBar/>
                <Blog/>
                <Music/>
              </div>
            } />  
      
      
             <Route path = "/Login" render = { props=>
                 <div>
                 <MainNavBar />
                 <LoginPage/>
                 </div>
             }/>
       

          <Route path="/postBodyContent" exact component = {PostBodyContent}/>  

        

          </Switch>
        </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}
export default App;
