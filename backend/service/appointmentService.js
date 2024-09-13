const connect = require('../config/dbConnection')        // Adjust the path to your actual dbConnection file
// const sendMail = require('../config/nodeMailer')

// const appointmentServices = async (payload) => {
//     // Log the payload to check what is being received
//     console.log('Received payload:', payload);

//     if (!payload) {
//         console.error('No payload provided');
//         return { success: false, message: 'No data provided for booking the appointment' };
//     }

//     // Destructure required fields from the payload
//     const { date ,time , specialty} = payload;

//     // Check for missing required fields
//     if (!date || !time  ||!specialty) {
//         return { success: false, message: 'Missing required fields' };
//     }

//     try {
//         // Connect to the database
//         const connection = await connect();

//         // SQL query to insert a new appointment
//         const query = `
//             INSERT INTO appointment
//             (date,  time)
//             VALUES (?, ?)
//         `;

//         // Execute the query
//         const result = await new Promise((resolve, reject) => {
//             connection.query(query, [date,  time], (err, result) => {
//                 if (err) {
//                     console.error('Database error:', err);
//                     return reject(err);
//                 }
//                 resolve(result);
//             });
//         });

//         // Return success response with appointment ID
//         return { success: true, message: 'Appointment booked successfully', appointmentId: result.insertId };

//     } catch (error) {
//         // Handle errors and log them
//         console.error('Error booking appointment:', error);
//         return { success: false, message: 'Failed to book appointment' };
//     }
// };


// const bookAppointment = async (appointmentData) => {
//     try {
//     const { id, date, time, bookedBy } = appointmentData;
//     const connection = await connect();

//     console.log(appointmentData);

//     // Ensure all necessary data is present
//     if (!id || !date || !bookedBy) {
//       throw new Error('Missing required fields');
//     }

//     // Set `booked` to true since we're booking the appointment
//     const booked = true;

//     // Perform the SQL insert
//     const sql = `

//       UPDATE appointment
//       SET date = ?, time = ?, booked = ?, bookedBy = ?
//       WHERE id = ?;

//     `;

//     const values = [id, date, time || null, booked, bookedBy];

//     return new Promise((resolve, reject) => {
//       connection.query(sql, values, (err, result) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(result);
//       });
//     });




//     if (result.affectedRows === 0) {
//         return { success: false, message: 'Invalid appointment ID or appointment already booked' };
//     }

//     // Close the database connection
//     connection.end();

//     return { success: true, message: 'Appointment booked successfully' };
// } catch (error) {
//     console.error('Error booking appointment:', error.message);
//     return { success: false, message: 'Failed to book appointment' };
// }
// };




const bookAppointment = async (appointmentData) => {
    try {
        const { id, date, time, bookedBy } = appointmentData;
        const connection = await connect();

        console.log('Booking Appointment with Data:', appointmentData);

        // Ensure all necessary data is present
        if (!id || !bookedBy) {
            throw new Error('Missing required fields');
        }

        // const checkSql = 'SELECT * FROM appointment WHERE id = ?';
        // const checkResult = await new Promise((resolve, reject) => {
        //     connection.query(checkSql, [id], (err, result) => {
        //         if (err) {
        //             console.error('SQL Error on Check:', err);
        //             return reject(err);
        //         }
        //         console.log(result);
        //         resolve(result);
        //     });
        // });

        // if (checkResult.length === 0) {
        //     return { success: false, message: 'Appointment ID does not exist' };
        // } else if (checkResult[0].booked) {
        //     return { success: false, message: 'Appointment is already booked' };
        // }


        // Set `booked` to true since we're booking the appointment
        const booked = true;

        // Perform the SQL update
        const sql = `
            UPDATE appointment
            SET  booked = ?, bookedBy = ?
            WHERE id = ?;
        `;

        const values = [booked, bookedBy, id];  // Corrected the order of values

        const result = await new Promise((resolve, reject) => {
            connection.query(sql, values, (err, result) => {
                if (err) {
                    console.error('SQL Error:', err);
                    return reject(err);
                }
                resolve(result);
                console.log(result);

            });
        });

        // Check if the appointment was actually updated
        if (result.affectedRows === 0) {
            return { success: false, message: 'Invalid appointment ID or appointment already booked' };
        }

        // Close the database connection
        connection.end();
        // sendMail(patientEmail);  



        return { success: true, message: 'Appointment booked successfully' };

    } catch (error) {
        console.error('Error booking appointment:', error.message);
        return { success: false, message: 'Failed to book appointment' };
    }
};













const viewAppointment = async (payload) => {
    try {
        const { specializationId } = payload;
        const connection = await connect();


        // Fetch all doctors with the specified specialization
        const doctorSql = "SELECT * FROM signupdoctor WHERE specializationId = ?";
        const doctorValues = [specializationId];
        const doctors = await new Promise((resolve, reject) => {
            connection.query(doctorSql, doctorValues, (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });

        if (doctors.length === 0) {
            return { statuscode: 404, status: false, msg: "No doctors found for this specialization" };
        }

        // Fetch appointments for each doctor and filter out those with no appointments
        const appointments = await Promise.all(
            doctors.map((doctor) => {
                const appointmentSql = "SELECT * FROM appointment WHERE doctorId = ? AND booked = 0 AND `date` >= CURDATE() order By `date` ;";
                const appointmentValues = [doctor.id];
                return new Promise((resolve, reject) => {
                    connection.query(appointmentSql, appointmentValues, (err, result) => {
                        if (err) {
                            return reject(err);
                        }
                        if (result.length > 0) {
                            resolve({ ...doctor, appointments: result });
                        } else {
                            resolve(null); // Return null if no appointments
                        }
                    });
                });
            })
        );

        // Filter out the doctors with no appointments
        const filteredAppointments = appointments.filter(appointment => appointment !== null);

        // Close the connection
        connection.end();

        if (filteredAppointments.length === 0) {
            return { statuscode: 404, status: false, msg: "No appointments available for doctors with this specialization" };
        }

        return { statuscode: 200, status: true, data: filteredAppointments };

    } catch (error) {
        console.error('Error fetching appointments:', error);
        return { statuscode: 500, status: false, msg: "Error fetching data" };
    }
};


const freeAppointmentbook = async (appointmentData) => {
    try {
        const { doctorId, date, time, bookedBy, booked } = appointmentData;
        const connection = await connect();

        const sql = `
        INSERT INTO appointment (doctorId, date, time, bookedBy, booked)
        VALUES (?, ?, ?, ?, ?);
      `;

        const values = [doctorId, date, time, bookedBy, booked];
        console.log(values);

        const result = await new Promise((resolve, reject) => {
            connection.query(sql, values, (err, result) => {
                if (err) {
                    console.error("SQL Error:", err);
                    return reject(err);
                }
                resolve(result);


            });
        });

        connection.end();

        return { success: true, message: "Appointment booked successfully" };
    } catch (error) {
        console.error("Error booking appointment:", error);
        return { success: false, message: "Failed to book appointment" };
    }
};


// id,doctorId,date, time, booked,bookedBy 

// const getAppointment = async () => {
//     try {
//         const connection = await connect();
//         const sql = `
//         SELECT 
//             appointment.*, 
//             signuppatient.fname, 
//             signupdoctor.name
//         FROM 
//             appointment
//         JOIN 
//             signuppatient ON appointment.bookedby = signuppatient.fname 
//         JOIN 
//             signupdoctor ON appointment.doctorId = signupdoctor.name`;
//         const result = await new Promise((resolve, reject) => {
//             connection.query(sql, (err, result) => {
//                 if (err) {
//                     console.error("SQL Error:", err);
//                     return reject(err);
//                 }
//                 resolve(result);
//             });
//         });
//         connection.end();
//         return result;
//     } catch (error) {
//         console.error("Error getting appointment:", error);
//         return { success: false, message: "Failed to get appointment" };
//     }


// }
const getAppointment = async () => {
    try {
        const connection = await connect();
        const sql = `
            SELECT 
                appointment.*, 
                signuppatient.fname AS patient_name, 
                signupdoctor.name AS doctor_name
            FROM 
                appointment
            JOIN 
                signuppatient ON appointment.bookedby = signuppatient.id 
            JOIN 
                signupdoctor ON appointment.doctorId = signupdoctor.id;
        `;
        const result = await new Promise((resolve, reject) => {
            connection.query(sql, (err, result) => {
                if (err) {
                    console.error("SQL Error:", err);
                    return reject(err);
                }
                resolve(result);
            });
        });
        connection.end();
        return result;
    } catch (error) {
        console.error("Error getting appointment:", error);
        return { success: false, message: "Failed to get appointment" };
    }
};



// const getDoctorAppointment = async (payload) => {
//     let connection;
//     try {
//         connection = await connect();
//         const sql = `SELECT  appointment.*,  signuppatient.fname AS patient_name, signupdoctor.name AS doctor_name FROM appointment JOIN  signuppatient ON appointment.bookedby = signuppatient.id JOIN signupdoctor ON appointment.doctorId = signupdoctor.id  WHERE  appointment.doctorId =  ?;`;
//         const result = await new Promise((resolve, reject) => {
//             connection.query(sql, payload, (err, result) => {
//                 if (err) {
//                     console.error("SQL Error:", err);
//                     reject(err);
//                 } else {
//                     resolve(result);
//                 }
//             });
//         });
//         return result;
//     } catch (error) {
//         console.error("Error getting doctor appointment:", error);
//         return { success: false, message: "Failed to get doctor appointment" };
//     } finally {
//         if (connection) {
//             connection.end();
//         }
//     }
// }


const getDoctorAppointment = async (doctorId) => {
    let connection;

    try {
        console.log(doctorId);
        connection = await connect();  // Connect to the database

        // Query to fetch appointments for the doctor based on doctorId
        const sql = `
            SELECT 
                appointment.*,  
                signuppatient.fname AS patient_name, 
                signupdoctor.name AS doctor_name 
            FROM 
                appointment 
            JOIN 
                signuppatient ON appointment.bookedby = signuppatient.id 
            JOIN 
                signupdoctor ON appointment.doctorId = signupdoctor.id 
            WHERE 
                appointment.doctorId = ?;
        `;

        // Execute the SQL query
        const result = await new Promise((resolve, reject) => {
            connection.query(sql, [doctorId], (err, result) => {
                if (err) {
                    console.error("SQL Error:", err);
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        return result;
    } catch (error) {
        console.error("Error getting doctor appointments:", error);
        return { success: false, message: "Failed to get doctor appointments" };
    } finally {
        if (connection) {
            connection.end();  // Close the database connection
        }
    }
};


const deleteAppointmentId = async (id) => {
    let connection;
    try {
        connection = await connect();  // Connect to the database
        const sql = `DELETE FROM appointment WHERE id = ?;`;

        // Wrap the query execution in a Promise
        const result = await new Promise((resolve, reject) => {
            connection.query(sql, [id], (err, result) => {
                if (err) {
                    console.error("SQL Error:", err);
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        // Check if any rows were affected
        if (result.affectedRows > 0) {
            return { success: true, message: 'Appointment deleted successfully' };
        } else {
            return { success: false, message: 'No appointment found with the given ID' };
        }
    } catch (error) {
        console.error("Error deleting appointment:", error);
        return { success: false, message: "Failed to delete appointment" };
    } finally {
        if (connection) {
            connection.end();  // Ensure the connection is closed
        }
    }
};






const updateAppointmentId = async (id, doctor_name, date, time, booked, patient_name) => {
    console.log("run")
    let connection;
    try {
        connection = await connect();  // Connect to the database

        const sql = `
           UPDATE appointment
                JOIN signupdoctor ON signupdoctor.name = ?
                JOIN signuppatient ON signuppatient.fname = ?
                SET appointment.doctorId = signupdoctor.id,
                    appointment.date = ?,
                    appointment.time = ?,
                    appointment.booked = ?,
                    appointment.bookedBy = signuppatient.id
                WHERE appointment.id = ?;

        `;

        // console.log(doctorId);
        

        // Wrap the query execution in a Promise
        const result = await new Promise((resolve, reject) => {
            connection.query(sql, [doctor_name, patient_name, date, time, booked, id], (err, result) => {
                if (err) {
                    console.error("SQL Error:", err);
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        // Check if any rows were affected
        if (result.affectedRows > 0) {
            return { success: true, message: 'Appointment updated successfully', result };
        } else {
            return { success: false, message: 'No appointment found with the given ID' };
        }
    } catch (error) {
        console.error("Error updating appointment:", error);
        return { success: false, message: "Failed to update appointment" };
    } finally {
        if (connection) {
            connection.end();  // Ensure the connection is closed
        }
    }
};


module.exports = { bookAppointment, viewAppointment, freeAppointmentbook, getAppointment, getDoctorAppointment, deleteAppointmentId, updateAppointmentId }

