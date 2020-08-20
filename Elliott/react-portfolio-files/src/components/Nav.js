import React from "react";
import {Link} from "react-router-dom"
import {Navbar, Nav as Nav1} from "react-bootstrap"
const Nav = (props) => {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand ><Link to="/">Elliott Lockwood</Link></Navbar.Brand>
        <Nav1 className="mr-auto">
          <Nav1.Link ><Link to="/" className="nav-item">Home</Link></Nav1.Link>
          <Nav1.Link ><Link to="/projects">Projects</Link></Nav1.Link>
          <Nav1.Link ><Link to="/">Contact</Link></Nav1.Link>
        </Nav1>
      </Navbar>
    )
}
export default Nav;



