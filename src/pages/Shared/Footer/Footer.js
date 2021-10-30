import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faEnvelope, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark text-white mt-2 p-3 pb-5">
            <Container>
                <Row>
                    <Col>
                        <h4>Quick Links</h4>
                        <ul className="footer-link text-white">
                            <li><Link className="text-decoration-none text-body me-5" to="/home"><span className="text-white">Home</span></Link></li>
                            <li><Link className="text-decoration-none text-body me-5" to="/appointment"><span className="text-white">Appointment</span></Link></li>
                            <li><Link className="text-decoration-none text-body me-5" to="/about"><span className="text-white">About</span></Link></li>
                        </ul>
                    </Col>
                    <Col>
                        <h4>Follow Us</h4>
                        <ul className="footer-link">
                            <li><Link className="text-decoration-none text-body me-5" to="/facebook"><span className="text-white">Facebook</span></Link></li>
                            <li><Link className="text-decoration-none text-body me-5" to="/twitter"><span className="text-white">Twitter</span></Link></li>
                            <li><Link className="text-decoration-none text-body me-5" to="/instagram"><span className="text-white">Instagram</span></Link></li>
                            <li><Link className="text-decoration-none text-body me-5" to="/linkedin"><span className="text-white">Linkedin</span></Link></li>
                        </ul>
                    </Col>
                    <Col>
                        <h4>Contact Us</h4>
                        <div>
                            <p className="mb-0"><span className="text-warning p-1"><FontAwesomeIcon icon={faMobile} /></span>+880 123-456-7890</p>
                            <p className="mb-0"><span className="text-warning p-1"><FontAwesomeIcon icon={faEnvelope} /></span> example@gmail.com</p>
                            <p className="mb-0"><span className="text-warning p-1"><FontAwesomeIcon icon={faLocationArrow} /></span> Lakshmipur Sadar, Lakshmipur</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;