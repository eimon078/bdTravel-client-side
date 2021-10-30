import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../Images/404.png'

const NotFound = () => {
    return (
        <div>
            <img style={{ height: "600px", width: "100%" }} src={notFound} alt="" />
            <Link to='/home'><button className="btn-warning btn-lg rounded-pill px-3 py-2">Go Back Home</button></Link>
        </div>
    );
};

export default NotFound;