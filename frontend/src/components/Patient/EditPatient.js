import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { BACKENDURL } from '../../constant';
const EditPatient = () => {
    const { id } = useParams(); // Get the patient ID from the URL
    const navigate = useNavigate(); // To navigate back after editing
    const [formData, setFormData] = useState({
        fname: '',
        email: '',
        phone: '',
        gender: '',
        address: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${BACKENDURL}/patient/data/${id}`)
            .then(response => {
                setFormData(response.data.data); // Assuming response structure is { data: { fname, email, ... } }
                setLoading(false);
            })
            .catch(err => {
                setError('Error fetching patient data');
                setLoading(false);
            });
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${BACKENDURL}/patient/data/${id}`, formData)
            .then(response => {
                if (response.data.success) {
                    alert('Patient updated successfully');
                    navigate('/patients'); // Redirect back to the patient list
                } else {
                    alert('Error updating patient');
                }
            })
            .catch(err => {
                alert('Error updating patient');
                console.error(err);
            });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Container>
            <h2>Edit Patient</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="fname"
                        value={formData.fname}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                        type="text"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button type="submit" variant="primary">Save Changes</Button>
            </Form>
        </Container>
    );
};

export default EditPatient;
