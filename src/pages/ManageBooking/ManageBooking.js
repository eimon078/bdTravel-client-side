import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const ManageBooking = () => {
    const [allBooking, setAllBooking] = useState([])
    const [update, setUpdate] = useState(false);

    //load All booking data
    useEffect(() => {
        fetch('https://dark-mansion-51838.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => {
                setAllBooking(data);
            })
    }, [update])


    //handle delete
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
                        const remainingUsers = allBooking.filter(booking => booking._id !== id);
                        setAllBooking(remainingUsers);
                    }
                })
        }
    }

    //handle update Status
    const handelUpdate = (id) => {
        fetch(`https://dark-mansion-51838.herokuapp.com/booking/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ "status": "Approved" })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Update SuccessFully");
                    setUpdate(!update)
                }
            })

    }

    return (
        <div className='my-5'>
            <h1 className='my-5 text-warning'>Manage Booking</h1>
            <Container className='my-5'>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Booking By</Th>
                            <Th>Address</Th>
                            <Th>Booking Place</Th>
                            <Th>Place Location</Th>
                            <Th>Date</Th>
                            <Th>Status</Th>
                            <Th>Action 1</Th>
                            <Th>Action 2</Th>
                        </Tr>
                    </Thead>
                    <Tbody>

                        {
                            allBooking.map(booking => <Tr key={booking._id}>
                                <Td>{booking.name}</Td>
                                <Td>{booking.address}</Td>
                                <Td>{booking.placeName}</Td>
                                <Td>{booking.district}</Td>
                                <Td>{booking.date}</Td>
                                <Td>{booking.status}</Td>
                                <Td><Button size='sm' className='bg-danger' onClick={() => handelUpdate(booking._id)}>Update Status</Button></Td>
                                <Td><Button size='sm' className='bg-danger' onClick={() => handelDelete(booking._id)}>Delete</Button></Td>
                            </Tr>)
                        }

                    </Tbody>
                </Table>
            </Container>
        </div>
    );
};

export default ManageBooking;