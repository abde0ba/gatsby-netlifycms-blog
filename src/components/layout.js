import * as React from "react"
import { Link } from "gatsby"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaFacebookF, FaTwitter, FaInstagram} from "react-icons/fa";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

 
    header = 
       (
        
        <div className="navbar-wrapper">
        <Navbar collapseOnSelect expand="lg" >
          
      <Container className='navbar-container'>
      
        <Navbar.Brand className='Logo'>
        <h1 className='main-heading'>
        <Link to="/">{title}</Link>
        </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav className='nav-links'>
            <li><a href='https://www.facebook.com/'><FaFacebookF /></a></li>
            <li><a href='https://twitter.com/'><FaTwitter /></a></li>
            <li><a href='https://instagram.com/'><FaInstagram /></a></li>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
      
    </Navbar>
    </div>
      
       )
       
     
  {/*
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
    */}

  return (
    
    <div data-is-root-path={isRootPath}>
      <div style={{width: "100% !important", borderBottom: '1px solid black'}}>
      <header className="gh">{header}</header>
      </div>
      <div className="global-wrapper">
      <main>{children}</main>
      </div>
      <div className='footer-section'>
      <footer className='global-wrapper'>
        <div className='footer-links'>
        <Link to='/contact'>Contact</Link>
        <Link to='/privacy-policy'>Privacy Policy</Link>
        </div>
        <p>© {new Date().getFullYear()} Copyright Abde Blog, All rights reserved.</p>
        {` `}
      </footer>
      </div>
    </div>
  )
}

export default Layout
