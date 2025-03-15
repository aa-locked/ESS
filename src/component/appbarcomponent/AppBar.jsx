import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

const AppBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">Activity</NavLink>
            <NavLink className="nav-link" to="/attendance">Attendance</NavLink>
            <NavDropdown title="Leave" id="basic-nav-dropdown">
              <NavDropdown.Item href="leave-dtl">Leave Availed</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Leave Balance</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="leave-req">Leave Request/Approval</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="TDS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Declaration</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Actual</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">FlexiPay</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Report" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Salary Slip</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">TDS Computation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Employee Tracker</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">PF Contribution</NavDropdown.Item>
            </NavDropdown>
            <NavLink className="nav-link" to="">TA/OD Details</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default AppBar
