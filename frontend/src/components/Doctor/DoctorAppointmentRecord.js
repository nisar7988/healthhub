import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { BACKENDURL } from '../../constant';
const DoctorAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Get the logged-in doctor from the Redux store
    const doctor = useSelector((state) => state.DoctorInfo.doctor);

    useEffect(() => {
        if (!doctor?.id) return;  // Make sure doctorId is available

        // Function to fetch appointments for the logged-in doctor
        const fetchAppointments = async () => {
            try {
                setLoading(true);
                // Send the doctorId in the query parameters
                const response = await axios.get(`${BACKENDURL}/appointment/getdoctorsappointment/${doctor.id}`);
                setAppointments(response.data.data);  // Set fetched appointments
                console.log(response.data.data);
                
            } catch (err) {
                setError('Error fetching doctor appointments.');
                console.error('Error fetching appointments:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchAppointments();
    }, [doctor]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Doctor's Appointments</h2>
            {appointments.length > 0 ? (
                <Table striped bordered hover>
                    

                    <thead>
                        <tr>
                            <th>Appointment ID</th>
                            <th>Patient Name</th>
                            <th>Doctor Name</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment) => (
                            <tr key={appointment.id}>
                                <td>{appointment.id}</td>
                                <td>{appointment.patient_name}</td>
                                <td>{appointment.doctor_name}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <p>No appointments found for this doctor.</p>
            )}
        </div>
    );
};

export default DoctorAppointments;
