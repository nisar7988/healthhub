

import React, { useEffect, useState } from 'react';
import { Table, Button, Container, Row, Col,  Form } from 'react-bootstrap';
import axios from 'axios';
import { BACKENDURL } from '../../constant';

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingPatientId, setEditingPatientId] = useState(null); // To track which patient is being edited
  const [editFormData, setEditFormData] = useState({
    fname: '',
    email: '',
    phone: '',
    gender: '',
    address: ''
  });

  useEffect(() => {
    axios.get(`${BACKENDURL}/patient/data`)
      .then(response => {
        setPatients(response.data.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching patient data');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Handle the delete patient action
  const handleDelete = async (id) => {
            try {
                const response = await axios.delete(`${BACKENDURL}/patient/datadelete/${id}`);
                if (response.data.success) {
                    // Remove the deleted patient from the state
                    setPatients(patients.filter(patient => patient.id !== id));
                } else {
                    alert('Error deleting patient');
                }
            } catch (error) {
                console.error('Error deleting patient:', error);
                alert('Error deleting patient');
            }
        };

  // Handle the edit button click - initialize the form with patient data
  const handleEdit = (patient) => {
    setEditingPatientId(patient.id);
    setEditFormData({
      fname: patient.fname,
      email: patient.email,
      phone: patient.phone,
      gender: patient.gender,
      address: patient.address
    });
  };

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission for updating the patient
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${BACKENDURL}/patient/dataupdate/${editingPatientId}`, editFormData);
      if (response.data.success) {
        // Update the patient in the state
        setPatients(patients.map(patient =>
          patient.id === editingPatientId ? { ...patient, ...editFormData } : patient
        ));
        setEditingPatientId(null); // Reset the edit mode
      } else {
        alert('Error updating patient');
      }
    } catch (error) {
      console.error('Error updating patient:', error);
      alert('Error updating patient');
    }
  };

  // Cancel edit mode
  const handleCancelEdit = () => {
    setEditingPatientId(null);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={12}>
             <h2>Patient Records</h2>
              <Table striped bordered hover responsive="sm">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th>Actions</th> {/* Added actions column */}
                  </tr>
                </thead>
                <tbody>
                  {patients.map((patient) => (
                    <tr key={patient.id}>
                      <td>{patient.id}</td>
                      {/* If editing this patient, display a form */}
                      {editingPatientId === patient.id ? (
                        <>
                          <td>
                            <Form.Control
                              type="text"
                              name="fname"
                              value={editFormData.fname}
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
                              name="phone"
                              value={editFormData.phone}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <Form.Control
                              type="text"
                              name="gender"
                              value={editFormData.gender}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <Form.Control
                              type="text"
                              name="address"
                              value={editFormData.address}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <Button
                              variant="success"
                              onClick={handleUpdate}
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
                          <td>{patient.fname}</td>
                          <td>{patient.email}</td>
                          <td>{patient.phone}</td>
                          <td>{patient.gender}</td>
                          <td>{patient.address}</td>
                          <td>
                            {/* Edit Button */}
                            <Button
                              variant="warning"
                              className="me-2"
                              onClick={() => handleEdit(patient)}
                            >
                              Edit
                            </Button>

                            {/* Delete Button */}
                            <Button
                              variant="danger"
                              onClick={() => handleDelete(patient.id)}
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
            
        </Col>
      </Row>
    </Container>
  );
};

export default PatientList;













