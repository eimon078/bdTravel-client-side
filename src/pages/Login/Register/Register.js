import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import login_img from '../../../Images/login_img.jpg'

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='login py-5 bg-light'>
            <Container>
                <Row className='bg-white rounded-3 shadow g-0'>
                    <Col lg="6">
                        <img src={login_img} className='img-fluid' alt="" />
                    </Col>
                    <Col lg="6">
                        <div className='py-3 text-center'>
                            <h1>Please Register</h1>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Row className="justify-content-center mb-3">
                                <Col lg="8">
                                    <input className="w-75 rounded-pill p-1" type="text" {...register("name", { required: true })} placeholder="email" />
                                </Col>
                            </Row>
                            <Row className="justify-content-center mb-3">
                                <Col lg="8">
                                    <input className="w-75 rounded-pill p-1" type="email" {...register("email", { required: true })} placeholder="email" />
                                </Col>
                            </Row>
                            <Row className="justify-content-center mb-3">
                                <Col lg="8">
                                    <input className="w-75 rounded-pill p-1" type="password" {...register("password", { required: true, minLength: 6 })} placeholder="password" />
                                </Col>
                            </Row>
                            <Row className="justify-content-center mb-3">
                                <Col lg="8">
                                    <input className="w-50 rounded-pill p-1" style={{ background: "Tomato", color: "white" }} type="submit" value="Create an Account" />
                                </Col>
                            </Row>
                        </form>
                        <div className="py-4">
                            <span className="pe-2"> Already Have an Account?</span><Link to="/login">or,Login</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;