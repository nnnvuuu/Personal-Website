  import React, {Fragment} from 'react';
  import {Navbar,Nav,NavDropdown,NavItem} from 'react-bootstrap';
  import {NavLink, Link} from 'react-router-dom';
  import Logout from '../Logout/Logout';
  import {connect} from 'react-redux';
  import PropTypes from 'prop-types';
 
 
 
  function  MainNavBar (props){
   
    const {isAuthenticated,user } =  props.auth;
 
    const authLinks = (
      <Fragment>
        <NavItem  >
        <Nav.Link href="postArticles"  className={"px-3"}>Post Blog</Nav.Link>
        </NavItem>
        <Nav.Item>
           <Logout/>
         </Nav.Item>
      </Fragment>
    )

    const guestLinks = (
      <Fragment>
        <Nav.Link  as={NavLink} to= '/Login' className={"px-3"}>
          {/* { <h4 className={"fontSize4"}>Login</h4> } */}
            Login
        </Nav.Link>
      </Fragment>
    )
      return(
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
   <Navbar.Brand href="home" className={"px-3"}>Home</Navbar.Brand>
   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
   <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="mr-auto">
       <Nav.Link href="#features" className={"px-3"}>Resume</Nav.Link>
       <Nav.Link href="blog"  className={"px-3"}>Blogs</Nav.Link>
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
       <Nav.Link href="Contact"  className={"px-3"}>
         Contact
       </Nav.Link>
     </Nav>
   </Navbar.Collapse>
 </Navbar> 
 
 
     );
   }
   MainNavBar.propTypes = {
     auth: PropTypes.object.isRequired
   
   }
   
   const mapStateToProps = state  =>({
     auth: state.auth
   });
   
   export default connect(mapStateToProps,null)(MainNavBar);