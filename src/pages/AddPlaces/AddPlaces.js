import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddPlaces = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        if (data.placeName) {
            const url = 'https://dark-mansion-51838.herokuapp.com/places'
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(pdata => {
                    if (pdata.insertedId) {
                        alert("successfully added")
                        reset();
                    }
                })
        }
    }
    return (
        <div>

            <Container>
                <h1 className="my-5">ADD NEW PACKAGE</h1>
                <Row className="justify-content-center mb-3">
                    <Col lg="8">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Row className="justify-content-center mb-3">
                                <Col lg="4" className='mt-2'>
                                    <input className="w-100 rounded p-1" type="text" {...register("placeName", { required: true })} placeholder="place name" />
                                </Col>
                                <Col lg="4" className='mt-2'>
                                    <input className="w-100 rounded p-1" type="text" {...register("district", { required: true })} placeholder="district" />
                                </Col>
                            </Row>
                            <Row className="justify-content-center mb-3">
                                <Col lg="4" className='mt-2'>
                                    <input className="w-100 rounded p-1" type="number" {...register("cost", { required: true })} placeholder="cost" />
                                </Col>
                                <Col lg="4" className='mt-2'>
                                    <input className="w-100 rounded p-1" type="text" {...register("img_url", { required: true })} placeholder="img url" />
                                </Col>
                            </Row>
                            <Row className="justify-content-center mb-3">
                                <Col lg="4" className='mt-2'>
                                    <input className="w-100 rounded p-1" type="number" {...register("review", { required: true })} placeholder="review" />
                                </Col>
                                <Col lg="4" className='mt-2'>
                                    <input className="w-100 rounded p-1" type="number" {...register("rating", { required: true, min: 1, max: 5 })} placeholder="rating" />
                                </Col>
                            </Row>
                            <Row className="justify-content-center mb-3">
                                <Col lg="8">
                                    <textarea className="w-100 rounded p-1" type="text" {...register("description", { required: true })} placeholder="description" />
                                </Col>
                            </Row>

                            <Row className="justify-content-center mb-3">
                                <Col lg="8">
                                    <input className="w-50 rounded-pill p-1 bg-warning" type="submit" value="Add Package" />
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddPlaces;