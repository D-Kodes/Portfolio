//import 'bootstrap/dist/css/bootstrap.css
import React from 'react';
import {Link} from 'react-scroll';
import './navbar.css';
const Navbar = () => {
  return (
      <nav className="navbar">
            <img src="https://th.bing.com/th/id/R.5e3de5fe8526faa89c10fef9d250dc1b?rik=tSts3wR2FdJvfQ&riu=http%3a%2f%2fwww.drodd.com%2fimages15%2fletter-d18.jpg&ehk=64qvgaLfY2dJTLDiz3wG19LZJOn3yegfRX9oov4VTgA%3d&risl=&pid=ImgRaw&r=0" alt="logo" className='logo'/>
            <div className="menu">
              <Link className="menuItems">Home</Link>
              <Link className="menuItems">About</Link>
              <Link className="menuItems">Skills</Link>
              <Link className="menuItems">Experience</Link>
              <Link className="menuItems">Education</Link>              
              <Link className="menuItems">Projects</Link>
              <Link className="menuItems">Resume</Link>
            </div>
            <div className="menuBtn">Contact Me</div>
      </nav>
    
  )
}

export default Navbar
