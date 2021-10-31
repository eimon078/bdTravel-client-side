import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import './Login.css'
import login_img from '../../../Images/login_img.jpg'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const { signInWithGoogle, setUser, setIsLoading } = useAuth();


    //handle redirect
    const history = useHistory();
    const location = useLocation();
    const redirect = location.state?.form || '/';


    // firebase auth method 
    const googleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                setUser(res.user)
                history.push(redirect);
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <div className='login py-5 bg-light'>
            <Container>
                <Row className='bg-white rounded-3 shadow g-0'>
                    <Col lg="6">
                        <img src={login_img} className='img-fluid' alt="" />
                    </Col>
                    <Col lg="6">
                        <div className='py-3 text-center'>
                            <h1>Please Login</h1>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
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
                                    <input className="w-50 rounded-pill p-1" style={{ background: "Tomato", color: "white" }} type="submit" value="Login" />
                                </Col>
                            </Row>
                        </form>
                        <div>
                            <h6>or Login With</h6>
                            <span style={{ color: "Tomato" }} onClick={googleSignIn}><i className="fab fa-google fa-2x"></i></span>
                        </div>
                        <div className="py-4">
                            <span className="pe-2"> Don't Have an Account?</span><Link to="/register">Create Account</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;