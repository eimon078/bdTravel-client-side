import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    // const { user, googleSignOut, userName } = useAuth()
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>bd<span className='text-warning fs-3'>T</span>rave<span className='text-warning fs-3'>l</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/appointment">Appointment</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        {/*  {
                            user.email ? <Button size='sm' className="me-2" onClick={googleSignOut}>Log Out</Button> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            {userName && <span>{userName}</span>}
                        </Navbar.Text> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;