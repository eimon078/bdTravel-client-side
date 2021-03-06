import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Place from '../../Home/Place/Place';

const Booking = () => {
    const [place, setPlace] = useState({})
    const history = useHistory();
    const [booking, setBooking] = useState({ name: '', email: '', phone: '', address: '', date: '' });
    const { id } = useParams();

    const { user } = useAuth();
    booking.email = user.email
    booking.name = user?.displayName
    useEffect(() => {
        const url = `https://dark-mansion-51838.herokuapp.com/places/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPlace(data)
            })

    }, [])

    const getValue = (e) => {
        let name = e.target.name;
        let vlaue = e.target.value;
        setBooking({ ...booking, [name]: vlaue })
    }

    const registerBooking = (e) => {
        const { _id, ...exceptId } = place;
        // console.log(exceptId);
        if (booking.phone) {
            const url = 'https://dark-mansion-51838.herokuapp.com/booking'
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({ ...booking, ...exceptId, status: 'pending' })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        alert('Booking Successfully');
                        history.push('/');

                    }
                }).catch(error => {
                    console.log(error);
                })
        }

        e.preventDefault()

    }
    return (
        <div>

            <Container>
                <h1 className="my-5">PLEASE BOOKING CONFIRM</h1>
                <Row xs={1} md={2} className="g-4">
                    {place?.cost ? <Place place={place} button=''></Place> : <Spinner animation="border" variant="warning" />}
                    <Col>
                        <Form onSubmit={registerBooking}>
                            <Row className="justify-content-center mb-3">
                                <Col lg="6">
                                    <Form.Control size="lg" type="text" placeholder="Name" name='name' value={booking.name} onChange={getValue} required />
                                </Col>
                            </Row>

                            <Row className="justify-content-center mb-3">
                                <Col lg="6">
                                    <Form.Control size="lg" type="email" placeholder="Email" name='email' value={booking.email} onChange={getValue} required />
                                </Col>
                            </Row>
                            <Row className="justify-content-center mb-3">
                                <Col lg="6">
                                    <Form.Control size="lg" type="text" placeholder="address" name='address' value={booking.address} onChange={getValue} required />
                                </Col>
                            </Row>
                            <Row className="justify-content-center mb-3">
                                <Col lg="6">
                                    <Form.Control size="lg" type="number" placeholder="phone" name='phone' value={booking.phone} onChange={getValue} required />
                                </Col>
                            </Row>
                            <Row className="justify-content-center mb-3">
                                <Col lg="6">
                                    <Form.Control size="lg" type="date" placeholder="date" name='date' value={booking.date} onChange={getValue} required />
                                </Col>
                            </Row>
                            <Row className="justify-content-center mb-3">
                                <Col lg="6">
                                    <Form.Control className="bg-warning" size="lg" type="submit" value="Booking Register" />
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Booking;