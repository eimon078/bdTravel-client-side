import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, googleSignOut, userName } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>bd<span className='text-warning fs-3'>T</span>rave<span className='text-warning fs-3'>l</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home" className="text-white">Home</Nav.Link>
                        {
                            user.email ? <span className="header_link">
                                <Nav.Link as={Link} to="/mybooking" className="text-white">My Booking</Nav.Link>
                                <Nav.Link as={Link} to="/managebooking" className="text-white">Manage Booking</Nav.Link>
                                <Nav.Link as={Link} to="/addpackage" className="text-white">Add Package</Nav.Link>
                                <Button size='sm' className="me-2 bg-black" onClick={googleSignOut}>Log Out</Button>
                            </span> : <Nav.Link as={Link} to="/login" className="text-white">Login</Nav.Link>
                        }
                        <Navbar.Text className='text-white'>
                            {userName && <span>{userName}</span>}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;