import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const AppBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Activity</Nav.Link>
            <Nav.Link href="">Attendance</Nav.Link>
            <NavDropdown title="Leave" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Leave Availed</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Leave Balance</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Leave Request/Approval</NavDropdown.Item>
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
            <Nav.Link href="">TA/OD Details</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default AppBar
