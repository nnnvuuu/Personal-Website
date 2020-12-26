 // import React, {Fragment} from 'react';
 // import {Navbar,Nav,NavDropdown,NavItem} from 'react-bootstrap';
 // import {NavLink, Link} from 'react-router-dom';
 // import Logout from '../Logout/Logout';
 // import {connect} from 'react-redux';
 // import PropTypes from 'prop-types';
 
 
 
 // function  NavBar (props){
   
 //   const {isAuthenticated,user } =  props.auth;
 
 //   const authLinks = (
 //     <Fragment>
 //       <NavItem  >
 //       <Nav.Link href="postArticles"  className={"px-3"}>Post Blog</Nav.Link>
         /* <strong className="fontSize4" >{user?`Welcome, ${user.username}`: '' }</strong> */
   //     </NavItem>
   //     <Nav.Item>
   //        <Logout/>
   //      </Nav.Item>
   //   </Fragment>
   // )
   // // {user?`Welcome, ${user.username}`: '' }
   // const guestLinks = (
   //   <Fragment>
   //     <Nav.Link  as={NavLink} to= '/Login' className={"px-3"}>
   //        {/* <h4 className={"fontSize4"}>Login</h4> */}
   //         Login
   //     </Nav.Link>
   //   </Fragment>
   // )
     // return(
 /* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
   <Navbar.Brand href="home" className={"px-3"}>Home</Navbar.Brand>
   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
   <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="mr-auto">
       <Nav.Link href="#features" className={"px-3"}>Resume</Nav.Link>
       <Nav.Link href="blog"  className={"px-3"}>Blogs</Nav.Link>
       <Nav.Link href="#pricing"  className={"px-3"}>Peing</Nav.Link>
       <NavDropdown title="Projects" className={"px-3"} id="collasible-nav-dropdown">
         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
         <NavDropdown.Divider />
         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
       </NavDropdown>
     </Nav>
     <Nav>
     {isAuthenticated ? authLinks : guestLinks}
       <Nav.Link eventKey={2} className={"px-3"} href="#memes">
         Contact
       </Nav.Link>
     </Nav>
   </Navbar.Collapse>
 </Navbar> */
 
 
 //     );
 //   }
 //   NavBar.propTypes = {
 //     auth: PropTypes.object.isRequired
   
 //   }
   
 //   const mapStateToProps = state  =>({
 //     auth: state.auth
 //   });
   
 //   export default connect(mapStateToProps,null)(NavBar);
   
 
 
 // import React,{useState} from 'react';
 // import Grid from '@material-ui/core/Grid';
 // import { Typography,AppBar,Toolbar,Button,IconButton,MenuIcon } from '@material-ui/core';
 // import { withStyles,makeStyles } from "@material-ui/core/styles";
 // import  './NavBar.css';
 // import {Navbar,Nav,NavDropdown,NavItem} from 'react-bootstrap';
 // import Box from '@material-ui/core/Box';
 // import {Link} from 'react-router-dom';
 
 
 // const WhiteTextTypography = withStyles({
 //   root: {
 //     color: "#FFFFFF"
 //   }
 // })(Typography);
 
 
 // const useStyles = makeStyles((theme) => ({
 //   root: {
 //     flexGrow: 1,
//   },

// }));


// const NavBar =() => {
//   const classes = useStyles();
//   const [click, setClick] = useState(false);
//   const [dropdown, setDropdown] = useState(false);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);
//   return (
//     <div >
//        <Box pt={5}>
//         <WhiteTextTypography variant='h4' style={{letterSpacing:"15px"}} align='center'>DON'T WAKE ME</WhiteTextTypography>
//        </Box>
//        <Box mt={8}>
            
//           <Grid container justify="center" className={classes.root}  spacing={9} >
//              <Grid item className='menu-icon' onClick={handleClick}>
//                     <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//               </Grid>
//               <Grid item >
//                 <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                    <WhiteTextTypography variant='caption'>HOME</WhiteTextTypography>
//                 </Link>
//               </Grid>
//               <Grid item >
//                 <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                     <WhiteTextTypography variant='caption'>BLOG</WhiteTextTypography>
//                 </Link>
//               </Grid>
//               <Grid item >
//                 <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                     <WhiteTextTypography variant='caption'>RESUME</WhiteTextTypography>
//                 </Link>
//               </Grid>
//               <Grid item >
//               <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                     <WhiteTextTypography variant='caption'>PROJECT</WhiteTextTypography>
//                 </Link>
//               </Grid>
//               <Grid item >
//               <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                     <WhiteTextTypography variant='caption'>LOGIN</WhiteTextTypography>
//                 </Link>
//               </Grid>
//               <Grid item >
//               <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                     <WhiteTextTypography variant='caption'>CONTACT</WhiteTextTypography>
//                 </Link>
//               </Grid>
//            </Grid>
//          </Box>
     
        
//      </div>
//   );
// };

// export default NavBar;


import React,{useState}from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography,AppBar,Toolbar,Button,IconButton,MenuIcon } from '@material-ui/core';
import { withStyles,makeStyles } from "@material-ui/core/styles";
import  './NavBar.css';
import {Navbar,Nav,NavDropdown,NavItem} from 'react-bootstrap';
import Box from '@material-ui/core/Box';
import {NavLink, Link} from 'react-router-dom';
import Logout from '../Logout/Logout';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

}));


const NavBar =(props) => {
  const classes = useStyles();
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  const {isAuthenticated,user } =  props.auth;

     const authLinks = (
       <>
         {/* <NavItem className="ThenavItem" > */}
        <Link to="postArticles" className='nav-links' onClick={closeMobileMenu}>    
          <WhiteTextTypography variant='caption' style={{letterSpacing:"3px"}} align='center'>POST</WhiteTextTypography>
        </Link>
           {/* <WhiteTextTypography  
           onClick={closeMobileMenu}  
           style={{letterSpacing:"3px"}} 
           variant='caption'
           align='center'
           className='nav-links'
            >
            {user?`Welcome, ${user.username}`: '' }
            </WhiteTextTypography>  */}
         {/* </NavItem>
         <Nav.Item>
        
         </Nav.Item> */}
       </>
     )
    //  {user?`Welcome, ${user.username}`: '' }
     const guestLinks = (
       <>
         <Nav.Link  as={NavLink} to= '/Login' className='nav-links' onClick={closeMobileMenu}>
            {/* <h4 className={"fontSize4"}>Login</h4> */}
            <WhiteTextTypography variant='caption' style={{letterSpacing:"3px"}} align='center'>LOGIN</WhiteTextTypography>
        </Nav.Link>
       </>
     )

  return (
    <div >
       <Box pt={5}>
        <WhiteTextTypography  variant='h4' style={{letterSpacing:"15px"}} align='center'>DON'T WAKE ME</WhiteTextTypography>
       </Box>
        <nav className='Thenavbar '>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div> 
          <ul className={click ? 'ThenavMenu active' : 'ThenavMenu'}>
            <li className='ThenavItem'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <WhiteTextTypography variant='caption' style={{letterSpacing:"4px"}} align='center'>HOME</WhiteTextTypography>
              </Link>
            </li>
            <li className='ThenavItem'>
              <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
              <WhiteTextTypography variant='caption' style={{letterSpacing:"3px"}} align='center'>BLOG</WhiteTextTypography>
              </Link>
            </li>
            <li className='ThenavItem'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <WhiteTextTypography variant='caption' style={{letterSpacing:"3px"}} align='center'>RESUME</WhiteTextTypography>
              </Link>
            </li>
            <li className='ThenavItem'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <WhiteTextTypography variant='caption' style={{letterSpacing:"3px"}} align='center'>PROJECT</WhiteTextTypography>
              </Link>
            </li>
            <li className='ThenavItem'>
              {/* <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <WhiteTextTypography variant='caption' style={{letterSpacing:"3px"}} align='center'>LOGIN</WhiteTextTypography>
              </Link> */}
                {isAuthenticated ? authLinks : guestLinks}
            </li>
            <li className='ThenavItem'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <WhiteTextTypography variant='caption' style={{letterSpacing:"3px"}} align='center'>CONTACT</WhiteTextTypography>
              </Link>
            </li>
          </ul>
        </nav>
        
     </div>
  );
};
  
  NavBar.propTypes = {
    auth: PropTypes.object.isRequired
  
  }
  
  const mapStateToProps = state  =>({
    auth: state.auth
  });
  
  export default connect(mapStateToProps,null)(NavBar);