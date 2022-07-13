import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";

const NavBar = () => {
  const [isOpen,setIsOpen] = React.useState(sessionStorage.getItem("email") || false)
  const handleClick =() =>{
    setIsOpen(false)
    sessionStorage.clear()
  }



  return (
    <div>
      <Navbar className='p-3' bg="dark" variant="dark">
        {isOpen ? (<Container>
          <Navbar.Brand href="/home">NarmFood</Navbar.Brand>
          <Nav className="me-auto  " >
            <NavLink className="a" to="/about">About</NavLink>
            <NavLink className="a" to="/github">Github</NavLink>
            <NavLink className="a" to="/logout" onClick={handleClick}>Logout</NavLink>
          </Nav>
        </Container>) :(<Container>
          <Navbar.Brand href="/home">NarmFood</Navbar.Brand></Container>)}
      </Navbar>
    </div>
  )
}

export default NavBar