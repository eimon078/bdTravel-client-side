import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Place from '../Place/Place';

const Places = () => {
    const [loading, setLoading] = useState(true);
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:7000/places')
            .then(res => res.json())
            .then(data => {
                setPlaces(data);
                console.log(data)
                setLoading(false);
            })
    }, [])

    if (loading) {
        return <Spinner animation="border" variant="warning" className='my-5' />
    }
    return (
        <div className='mt-5'>
            <h1 className="mt-5 mb-3">OUR PACKAGES</h1>
            <Container>

                <Row xs={1} md={3} className="g-4">
                    {
                        places.map(place => <Place
                            key={place._id}
                            place={place}
                            button='1'
                        ></Place>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Places;