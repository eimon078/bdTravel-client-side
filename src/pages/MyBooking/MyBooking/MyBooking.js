import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import useAuth from '../../../hooks/useAuth';


const MyBooking = () => {
    const [myBooking, setMyBooking] = useState([])
    const { user } = useAuth();

    //load all mybooking
    useEffect(() => {
        const url = `https://dark-mansion-51838.herokuapp.com/booking/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyBooking(data);
            })
    }, [user.email])


    //handle delete booking
    const handelDelete = (id) => {
        const procced = window.confirm("Are You sure to Delete?");
        if (procced) {
            const url = `https://dark-mansion-51838.herokuapp.com/booking/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        alert('Delete Successfully');
                        const remainingUsers = myBooking.filter(booking => booking._id !== id);
                        setMyBooking(remainingUsers);
                    }
                })
        }
    }

    return (
        <div className='my-5'>
            <h1 className='my-5 text-warning'>My Booking</h1>
            <Container>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Booking Place</Th>
                            <Th>Cost</Th>
                            <Th>Location</Th>
                            <Th>Date</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>

                        {
                            myBooking.map(booking => <Tr key={booking._id}>
                                <Td>{booking.placeName}</Td>
                                <Td>{booking.cost}</Td>
                                <Td>{booking.district}</Td>
                                <Td>{booking.date}</Td>
                                <Td><Button size='sm' className='bg-danger' onClick={() => handelDelete(booking._id)}>Delete</Button></Td>
                            </Tr>)
                        }

                    </Tbody>
                </Table>
            </Container>
        </div>
    );
};

export default MyBooking;