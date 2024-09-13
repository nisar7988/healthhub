const connect = require('../config/dbConnection.js'); // Adjust the path to your actual dbConnection file
// const bcrypt = require('bcrypt');

const signupServices = async (payload) => {
    try {
        const {
            fname, email, phone, password,
            dateOfBirth, gender, address, emergencyContact, medicalHistory
        } = payload;
       console.log(fname, email, phone, password, dateOfBirth, gender, address, emergencyContact, medicalHistory);
        const connection = await connect();



        // Use Promise to handle async query
        return new Promise((resolve, reject) => {

            const sql = 'select * from signuppatient where email = ? '
            connection.query(sql, [email], (error, result) => {
                if (error) {
                    console.error("Error inserting data:", error);
                    resolve({ statuscode: 400, status: false, msg: "Error in registration" });
                }
                else if (result.length > 0) {
                    resolve({ statuscode: "400", message: 'email already exists', status: false })
                }
                else {

                    const sql = `INSERT INTO signuppatient 
                    (fname, email, phone, password, dateOfBirth, gender, address, emergencyContact, medicalHistory)
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

                    connection.query(sql, [
                        fname, email, phone, password, dateOfBirth, gender, address, emergencyContact, medicalHistory
                    ], (error, result) => {
                        if (error) {
                            console.error("Error inserting data:", error);
                            resolve({ statuscode: 400, status: false, msg: "Error in registration" });
                        } else {
                            console.log("Data added successfully", result);
                            resolve({ statuscode: 200, status: true, msg: "Registered successfully" });
                        }
                    })



                }
            })
        }).finally(() => {
                connection.end(); // Close the connection after the query is done
            });
    


    } catch (err) {
        console.error("Error:", err);
        return { statuscode: 500, status: false, msg: "Error inserting data" };
    }
};

const patientData = async () => {
    let connection;
    try {
        connection = await connect();
        
        // Query to fetch all patients
        const patientQuery = `
            SELECT id, fname, email,phone,gender,address 
            FROM signuppatient
        `;

            const patients = await new Promise((resolve, reject) => {
                connection.query(patientQuery, (err, results) => {
                    if (err) {
                        console.error('Database query error:', err);
                        return reject(new Error('Error fetching patient data'));
                    }
                    resolve(results);
                });
            });

        return patients;

    } catch (error) {
        console.error('Error fetching patient data:', error);
        throw error; // Propagate the error to be handled by the route handler
    } finally {
        if (connection) {
            connection.end((err) => {
                if (err) {
                    console.error('Error closing the database connection:', err);
                }
            });
        }
    }
};




const deletePatientById = async (id) => {
    let connection;
    try {
        connection = await connect();
        const deleteQuery = 'DELETE FROM signuppatient WHERE id = ?';

        const result = await new Promise((resolve, reject) => {
            connection.query(deleteQuery, [id], (err, results) => {
                if (err) {
                    console.error('Database query error:', err);
                    return reject('Error deleting patient');
                }
                resolve(results);
            });
        });

        return result;
    } catch (error) {
        console.error('Error in deletePatientById service:', error);
        throw new Error('Error deleting patient');
    } finally {
        if (connection) {
            connection.end((err) => {
                if (err) {
                    console.error('Error closing the database connection:', err);
                }
            });
        }
    }
};


const updatePatientById = async (id, fname, email, phone, gender, address) => {
    let connection;
    try {
      // Connect to the database
      connection = await connect();
  
      const updateQuery = `
        UPDATE signuppatient
        SET fname = ?, email = ?, phone = ?, gender = ?, address = ?
        WHERE id = ?
      `;
  
      // Return a promise that resolves or rejects based on the query result
      return new Promise((resolve, reject) => {
        connection.query(updateQuery, [fname, email, phone, gender, address, id], (err, result) => {
          if (err) {
            console.error('Error updating patient:', err);
            return reject(new Error('Database error'));
          }
  
          if (result.affectedRows === 0) {
            return resolve({ success: false, message: 'Patient not found' });
          }
  
          resolve({ success: true, message: 'Patient updated successfully' });
        });
      });
    } catch (error) {
      console.error('Error during database operation:', error);
      throw new Error('Database connection error');
    } finally {
      // Ensure the connection is closed after the operation
      if (connection) {
        connection.end();
      }
    }
  };



// const getPatientById = async (email, password) => {
//     let connection;
//     try {
//         connection = await connect();
//         const query = 'SELECT * FROM signuppatient WHERE email = ?';
//         const result = await new Promise((resolve, reject) => {
//             connection.query(query, [email], (err, results) => {
//                 if (err) {
//                     console.error('Database query error:', err);
//                     return reject('Error in authentication');
//                 }
//                 resolve(results);
//             });
//         });

//         if (result.length > 0) {
//             const user = result[0];
//             const match = await (password, user.password);
            
//             if (match) {
//                 // Return the user's profile data
//                 return { status: true, data: { id: user.id, fname: user.fname, email: user.email, phone: user.phone, gender: user.gender, address: user.address } };
//             } else {
//                 return { status: false, message: 'Invalid password' };
//             }
//         } else {
//             return { status: false, message: 'Email not found' };
//         }
//     } catch (error) {
//         console.error('Error in login service:', error);
//         throw new Error('Error in authentication');
//     } finally {
//         if (connection) {
//             connection.end((err) => {
//                 if (err) {
//                     console.error('Error closing the database connection:', err);
//                 }
//             });
//         }
//     }
// };




module.exports = { signupServices, patientData , deletePatientById , updatePatientById};
