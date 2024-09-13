
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Container, Row, Col, Card, Pagination, Form , Button} from 'react-bootstrap';
import { BACKENDURL } from '../../constant';
const BookAppointmentRecord = () => {
    const [appointmentRecord, setAppointmentRecord] = useState([]);
    const [filteredRecords, setFilteredRecords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;
     
    //  Editing states
     const [editingAppointmentId, setEditingAppointmentId] = useState(null);
     const [editFormData, setEditFormData] = useState({
         doctor_name: '',
         date: '',
         time: '',
         booked: false,
         patient_name: ''
     });

    useEffect(() => {
        const fetchAppointmentRecord = async () => {
            try {
                const response = await axios.get(`${BACKENDURL}/appointment/getappointment`);
                if (response.data.success) {
                    setAppointmentRecord(response.data.data);
                    setFilteredRecords(response.data.data); // Set initial filtered records to all data
                } else {
                    setError('Failed to fetch appointment');
                }
            } catch (err) {
                setError('Error fetching appointment data');
            } finally {
                setLoading(false);
            }
        };

        fetchAppointmentRecord();
    }, [editingAppointmentId]);

    
   
    // Pagination logic
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = filteredRecords.slice(indexOfFirstRecord, indexOfLastRecord);
    const totalPages = Math.ceil(filteredRecords.length / recordsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleEditAppointment = (appointment) => {
        setEditingAppointmentId(appointment.id);
        setEditFormData({
            doctor_name: appointment.doctor_name,
            date: appointment.date,
            time: appointment.time,
            booked: appointment.booked,
            patient_name: appointment.patient_name || ''
        });
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setEditFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // const handleUpdateAppointment = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.put(`/appointment/dataupdate/${editingAppointmentId}`, editFormData);
    //         if (response.data.success) {
    //             setAppointmentRecord(appointmentRecord.map((appointment) =>
    //                 appointment.id === editingAppointmentId ? { ...appointment, ...editFormData } : appointment
    //             ));
    //             setEditingAppointmentId(null);
    //         } else {
    //             alert('Failed to update appointment');
    //         }
    //     } catch (error) {
    //         alert('An error occurred while updating the appointment');
    //     }
    // };

    // const handleCancelEdit = () => {
    //     setEditingAppointmentId(null);
    // };

    const handleUpdateAppointment = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.put(`${BACKENDURL}/appointment/dataupdate/${editingAppointmentId}`, editFormData);
            
            // Check if the response is successful
            if (response.data && response.data.success) {
                setAppointmentRecord(appointmentRecord.map((appointment) =>
                    appointment.id === editingAppointmentId ? { ...appointment, ...editFormData } : appointment
                ));
                setEditingAppointmentId(null);
            } else {
                alert(response.data.message || 'Failed to update appointment');
            }
        } catch (error) {
            console.error('Error updating appointment:', error);  // Log the error for debugging
            alert('An error occurred while updating the appointment');
        }
    };
    
    // Function to cancel the edit
    const handleCancelEdit = () => {
        setEditingAppointmentId(null);
    };
    





    const handleDeleteAppointment = async (id) => {
        console.log(id)
        try {
            const response = await axios.delete(`${BACKENDURL}/appointment/datadelete/${id}`);
            if (response.data.success) {
                setAppointmentRecord(appointmentRecord.filter((appointment) => appointment.id !== id));
            } else {
                alert('Failed to delete the appointment');
            }
        } catch (error) {
            alert('An error occurred while deleting the appointment');
        }
    };














    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={12}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Card.Title>Appointment Records</Card.Title>

                            {/* Table */}
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Doctor Name</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Booked</th>
                                        <th>Booked By</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentRecords.length > 0 ? (
                                        currentRecords.map((appointment) => (
                                            <tr key={appointment.id}>
                                                <td>{appointment.id}</td>
                                                {editingAppointmentId === appointment.id ? (
                                                    <>
                                                        <td>
                                                            <Form.Control
                                                                type="text"
                                                                name="doctor_name"
                                                                value={editFormData.doctor_name}
                                                                onChange={handleInputChange}
                                                            />
                                                        </td>
                                                        <td>
                                                            <Form.Control
                                                                type="date"
                                                                name="date"
                                                                value={editFormData.date}
                                                                onChange={handleInputChange}
                                                            />
                                                        </td>
                                                        <td>
                                                            <Form.Control
                                                                type="time"
                                                                name="time"
                                                                value={editFormData.time}
                                                                onChange={handleInputChange}
                                                            />
                                                        </td>
                                                        <td>
                                                            <Form.Check
                                                                type="checkbox"
                                                                name="booked"
                                                                checked={editFormData.booked}
                                                                onChange={handleInputChange}
                                                            />
                                                        </td>
                                                        <td>
                                                            <Form.Control
                                                                type="text"
                                                                name="patient_name"
                                                                value={editFormData.patient_name}
                                                                onChange={handleInputChange}
                                                            />
                                                        </td>
                                                        <td>
                                                            <Button
                                                                variant="success"
                                                                onClick={handleUpdateAppointment}
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
                                                        <td>{appointment.doctor_name}</td>
                                                        <td>{appointment.date}</td>
                                                        <td>{appointment.time}</td>
                                                        <td>{appointment.booked ? 'Yes' : 'No'}</td>
                                                        <td>{appointment.patient_name || 'N/A'}</td>
                                                        <td>
                                                            <Button
                                                                variant="warning"
                                                                className="me-2"
                                                                onClick={() => handleEditAppointment(appointment)}
                                                            >
                                                                Edit
                                                            </Button>
                                                            <Button
                                                                variant="danger"
                                                                onClick={() => handleDeleteAppointment(appointment.id)}
                                                            >
                                                                Delete
                                                            </Button>
                                                        </td>
                                                    </>
                                                )}
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="7" className="text-center">
                                                No appointments found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>

                               {/* Pagination */}
                               {totalPages > 1 && (
                                <Pagination>
                                    <Pagination.Prev
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    />
                                    {Array.from({ length: totalPages }, (_, i) => (
                                        <Pagination.Item
                                            key={i + 1}
                                            active={i + 1 === currentPage}
                                            onClick={() => handlePageChange(i + 1)}
                                        >
                                            {i + 1}
                                        </Pagination.Item>
                                    ))}
                                    <Pagination.Next
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                    />
                                </Pagination>
                        
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default BookAppointmentRecord;












// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Table, Container, Row, Col, Card, Pagination } from 'react-bootstrap';

// const BookAppointmentRecord = () => {
//     const [appointmentRecord, setAppointmentRecord] = useState([]);
//     const [filteredRecords, setFilteredRecords] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const [currentPage, setCurrentPage] = useState(1);
//     const recordsPerPage = 5;

//     useEffect(() => {
//         const fetchAppointmentRecord = async () => {
//             try {
//                 const response = await axios.get('/appointment/getappointment');
//                 if (response.data.success) {
//                     setAppointmentRecord(response.data.data);
//                     setFilteredRecords(response.data.data); // Set initial filtered records to all data
//                 } else {
//                     setError('Failed to fetch appointment');
//                 }
//             } catch (err) {
//                 setError('Error fetching appointment data');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchAppointmentRecord();
//     }, []);

//     // Pagination logic
//     const indexOfLastRecord = currentPage * recordsPerPage;
//     const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
//     const currentRecords = filteredRecords.slice(indexOfFirstRecord, indexOfLastRecord);
//     const totalPages = Math.ceil(filteredRecords.length / recordsPerPage);

//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }

//     return (
//         <Container>
//             <Row className="justify-content-center">
//                 <Col md={12}>
//                     <Card className="shadow-sm">
//                         <Card.Body>
//                             <Card.Title>Appointment Records</Card.Title>

//                             {/* Table */}
//                             <Table striped bordered hover responsive>
//                                 <thead>
//                                     <tr>
//                                         <th>ID</th>
//                                         <th>Doctor Name</th>
//                                         <th>Date</th>
//                                         <th>Time</th>
//                                         <th>Booked</th>
//                                         <th>Booked By</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {currentRecords.length > 0 ? (
//                                         currentRecords.map((appointment) => (
//                                             <tr key={appointment.id}>
//                                                 <td>{appointment.id}</td>
//                                                 <td>{appointment.doctor_name}</td>
//                                                 <td>{appointment.date}</td>
//                                                 <td>{appointment.time}</td>
//                                                 <td>{appointment.booked ? 'Yes' : 'No'}</td>
//                                                 <td>{appointment.patient_name || 'N/A'}</td>
//                                             </tr>
//                                         ))
//                                     ) : (
//                                         <tr>
//                                             <td colSpan="6" className="text-center">
//                                                 No appointments found
//                                             </td>
//                                         </tr>
//                                     )}
//                                 </tbody>
//                             </Table>

//                             {/* Pagination */}
//                             {totalPages > 1 && (
//                                 <Pagination>
//                                     <Pagination.Prev
//                                         onClick={() => handlePageChange(currentPage - 1)}
//                                         disabled={currentPage === 1}
//                                     />
//                                     {Array.from({ length: totalPages }, (_, i) => (
//                                         <Pagination.Item
//                                             key={i + 1}
//                                             active={i + 1 === currentPage}
//                                             onClick={() => handlePageChange(i + 1)}
//                                         >
//                                             {i + 1}
//                                         </Pagination.Item>
//                                     ))}
//                                     <Pagination.Next
//                                         onClick={() => handlePageChange(currentPage + 1)}
//                                         disabled={currentPage === totalPages}
//                                     />
//                                 </Pagination>
//                             )}
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default BookAppointmentRecord;
