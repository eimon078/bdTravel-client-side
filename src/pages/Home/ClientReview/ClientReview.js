import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './ClientReview.css'

const ClientReview = () => {

    return (
        <div>
            <h1>This is review</h1>
            <Container>
                <Row className="g-4">
                    <Col lg="4">
                        <Card className='justify-content-center align-items-center'>
                            <Card.Img variant="top" className='review_img' src="https://github.com/codingmarket07/Our-Team-Section-M6/blob/master/team1.png?raw=true" />
                            <Card.Body>
                                <Card.Title>Nurul Amin</Card.Title>
                                <Card.Text>
                                    The trip was completely seamless. We were met as scheduled at every meeting point throughout the trip. The car types were as promised and the drivers professional at all times.All the guides that we toured with were the best I have been associated with and are highly recommended.
                                </Card.Text>
                                <p className='text-warning'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card className='justify-content-center align-items-center'>
                            <Card.Img variant="top" className='review_img' src="https://github.com/codingmarket07/Our-Team-Section-M6/blob/master/team2.png?raw=true" />
                            <Card.Body>
                                <Card.Title>Maspi Roy</Card.Title>
                                <Card.Text>
                                    My husband and I got very lucky and were married right before COVID hit. However, we weren't able to go on our honeymoon. We waited almost two years before we could enjoy some newlyweds time and since we couldn't go anywhere, we decided to splurge and use our savings for bdTravle.

                                </Card.Text>
                                <p className='text-warning'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card className='justify-content-center align-items-center'>
                            <Card.Img variant="top" className='review_img' src="https://github.com/codingmarket07/Our-Team-Section-M6/blob/master/team3.png?raw=true" />
                            <Card.Body>
                                <Card.Title>Karim Khan</Card.Title>
                                <Card.Text>
                                    This  <strong>bdTravel</strong> company provided excellent communication, recommendations, and service from our initial contact through a follow-up post-trip. We originally booked this trip in 2019 for 2020 prior to the onset of Covid, which led to many uncertainties and changes until it was finally executed in 2021.
                                </Card.Text>
                                <p className='text-warning'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ClientReview;