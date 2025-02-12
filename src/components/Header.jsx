import React, { useState } from 'react';
import cellbeansLogo from '../assets/CellBeans-logo2.png';
import { FaUserCircle } from 'react-icons/fa';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
  } from 'reactstrap';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
   
  return (
    <div>
      <Navbar 
       style={{
        backgroundColor: 'white',
        borderBottom: '2px solid black',
        height: '50px',
        padding: '5px 5px', 
        position: 'fixed',
        width: '100%',
        zIndex: '1000',
    }}
      
      expand ='md'
    
        >
        <NavbarBrand href="/">
        <img src={cellbeansLogo} alt="Logo" style={{ height: '40px' }} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            
          </Nav>
          <NavbarText style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>Shahanaj Gaddi</span>
          <FaUserCircle size={24} color="#1d99d6" />
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header;
