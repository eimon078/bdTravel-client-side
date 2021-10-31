import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const MiddleHome = () => {
    return (
        <div className="mt-3">
            <Container className="mt-5">
                <Row className="justify-content-center mb-5">
                    <Col lg="6">
                        <h1>BEFORE YOU BOOK</h1>
                        <p>Your Inspirato membership grants you access to a dedicated Care team of in-house travel experts who help you find and book the perfect vacations.</p>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-5">
                    <Col lg="4">
                        <img src="https://cms.inspirato.com/ImageGen.ashx?image=/media/9445998/insp-pm-careservice-webpage_careteam2.jpg" alt="" />
                    </Col>
                    <Col lg="7">
                        <h5>MEET YOUR DEDICATED CARE TEAM</h5>
                        <p>These in-house travel advisors get to know your family’s individual preferences, travel habits, and more. They can recommend trips, notify you about new accommodations, place a hold on homes you like, and eventually book your vacations.</p>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-3">
                    <Col lg="4">
                        <img src="https://cms.inspirato.com/ImageGen.ashx?image=/media/9441843/insp-pm-careservice-webpage_bespoke.jpg" alt="" />
                    </Col>
                    <Col lg="7">
                        <h5>EXPLORE BDTRAVEL CUSTOM TRAVEL</h5>
                        <p>If you’re dreaming of a custom trip to a destination outside the Inspirato Collection, our Bespoke travel designers are here to help. This team of experts can turn any trip you imagine, anywhere in the world, into an Inspirato vacation with a tailor-made itinerary handcrafted just for you.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MiddleHome;