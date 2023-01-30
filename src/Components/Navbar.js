import { Outlet } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const NavbarLayout = () => {
  return (
    <div>
      <Navbar bg="ligth" variant="light" expand="lg" sticky="top">
        <Container >
          <Navbar.Brand href="/">
            <img
              src="/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/publication">+Post</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/sign-in">Login</Nav.Link>
              <Nav.Link href="/sign-up">Sign up</Nav.Link>

            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="light" className="nav-button" href="/login">Login</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />

    </div>
  )
}