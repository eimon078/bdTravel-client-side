import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const MyBooking = () => {
    const [myBooking, setMyBooking] = useState([])
    const { user } = useAuth();
    console.log(user.email);
    useEffect(() => {
        const url = `http://localhost:7000/booking/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyBooking(data);
                console.log(myBooking);
            })
    }, [user.email])

    return (
        <div>
            <h1>This is my booking</h1>
        </div>
    );
};

export default MyBooking;