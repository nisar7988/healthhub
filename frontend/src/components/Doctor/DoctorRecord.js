import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  Container, Row, Col, Table, Button, Form, Pagination } from 'react-bootstrap';
import { BACKENDURL } from '../../constant';
const DoctorRecord = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingDoctorId, setEditingDoctorId] = useState(null); // Track which doctor is being edited
    const [editFormData, setEditFormData] = useState({
        name: '',
        email: '',
        specialization: '',
        contactno: '',
        yearofexperience: ''
    });

    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items per page

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get(`${BACKENDURL}/doctor/data`);
                if (response.data.success) {
                    setDoctors(response.data.data);
                } else {
                    setError('Failed to fetch doctors');
                }
            } catch (err) {
                setError('An error occurred while fetching doctors');
            } finally {
                setLoading(false);
            }
        };

        fetchDoctors();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const handleDeleteDoctor = async (id) => {
        try {
            const response = await axios.delete(`${BACKENDURL}/doctor/datadelete/${id}`);
            if (response.data.success) {
                // Remove the doctor from the state
                setDoctors(doctors.filter((doctor) => doctor.id !== id));
            } else {
                alert('Failed to delete the doctor');
            }
        } catch (error) {
            alert('An error occurred while deleting the doctor');
        }
    };


    const handleEditDoctor = (doctor) => {
        setEditingDoctorId(doctor.id);
        setEditFormData({
            name: doctor.name,
            email: doctor.email,
            specialization: doctor.specialization,
            contactno: doctor.contactno,
            yearofexperience: doctor.yearofexperience
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleUpdateDoctor = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`${BACKENDURL}/doctor/dataupdate/${editingDoctorId}`, editFormData);
            if (response.data.success) {
                // Update the doctor in the state
                setDoctors(doctors.map((doctor) =>
                    doctor.id === editingDoctorId ? { ...doctor, ...editFormData } : doctor
                ));
                setEditingDoctorId(null); // Exit edit mode
            } else {
                alert('Failed to update doctor');
            }
        } catch (error) {
            alert('An error occurred while updating the doctor');
        }
    };

    const handleCancelEdit = () => {
        setEditingDoctorId(null);
    };


    // Pagination logic
    const indexOfLastDoctor = currentPage * itemsPerPage;
    const indexOfFirstDoctor = indexOfLastDoctor - itemsPerPage;
    const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

    // Pagination controls
    const totalPages = Math.ceil(doctors.length / itemsPerPage);

    const paginationItems = [];
    for (let i = 1; i <= totalPages; i++) {
        paginationItems.push(
            <Pagination.Item key={i} active={i === currentPage} onClick={() => setCurrentPage(i)}>
                {i}
            </Pagination.Item>
        );
    }



    //   name, email, password, specialization, contactno, yearofexperience 
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={12}>
                    <h2>Doctors Records</h2>
                    <Table striped bordered hover responsive="sm">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Specialization</th>
                                <th>Contact No</th>
                                <th>Year of Experience</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctors.map((doctor) => (
                                <tr key={doctor.id}>
                                    <td>{doctor.id}</td>
                                    {editingDoctorId === doctor.id ? (
                                        <>
                                            <td>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    value={editFormData.name}
                                                    onChange={handleInputChange}
                                                />
                                            </td>
                                            <td>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    value={editFormData.email}
                                                    onChange={handleInputChange}
                                                />
                                            </td>
                                            <td>
                                                <Form.Control
                                                    type="text"
                                                    name="specialization"
                                                    value={editFormData.specialization}
                                                    onChange={handleInputChange}
                                                />
                                            </td>
                                            <td>
                                                <Form.Control
                                                    type="text"
                                                    name="contactno"
                                                    value={editFormData.contactno}
                                                    onChange={handleInputChange}
                                                />
                                            </td>
                                            <td>
                                                <Form.Control
                                                    type="number"
                                                    name="yearofexperience"
                                                    value={editFormData.yearofexperience}
                                                    onChange={handleInputChange}
                                                />
                                            </td>
                                            <td>
                                                <Button
                                                    variant="success"
                                                    onClick={handleUpdateDoctor}
                                                    className="me-2"
                                                >
                                                    Save
                                                </Button>
                                                <Button
                                                    variant="secondary"
                                                    onClick={handleCancelEdit}
                                                >
                                                    Cancel
                                                </Button>
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td>{doctor.name}</td>
                                            <td>{doctor.email}</td>
                                            <td>{doctor.specialization}</td>
                                            <td>{doctor.contactno}</td>
                                            <td>{doctor.yearofexperience}</td>
                                            <td>
                                                <Button
                                                    variant="warning"
                                                    className="me-2"
                                                    onClick={() => handleEditDoctor(doctor)}
                                                >
                                                    Edit
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    onClick={() => handleDeleteDoctor(doctor.id)}
                                                >
                                                    Delete
                                                </Button>
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    {/* Pagination Controls */}
                    <Pagination>
                        <Pagination.Prev
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        />
                        {paginationItems}
                        <Pagination.Next
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        />
                    </Pagination>

                </Col>
            </Row>
        </Container>

    );
};

export default DoctorRecord;
