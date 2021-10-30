import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Place = ({ place, button }) => {
    const { placeName, img_url, district, description, rating, review, cost, _id } = place;

    const cardimg = {
        width: '100%',
        height: "200px"
    }
    return (
        <div>
            <Col className="h-100">
                <Card>
                    <Card.Img variant="top" src={img_url} style={cardimg} />
                    <Card.Body className='text-start pl-2'>
                        <p><i className="fas fa-map-marker-alt text-warning me-2"></i>{district}</p>
                        <Card.Title>{placeName}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 100)}...
                        </Card.Text>
                        <p><i className="fas fa-star text-warning me-2"></i>{rating} <i className="fas fa-users text-warning mx-2"></i>{review}</p>
                        <h4>${cost} <small className="fs-6 text-muted">BDT</small></h4>
                    </Card.Body>
                    {button && <Card.Footer>
                        <Link to={`/booking/${_id}`}><Button className="w-75 bg-warning">Book Now</Button></Link>
                    </Card.Footer>}
                </Card>
            </Col>
        </div>
    );

};

export default Place;